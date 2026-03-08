import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

// Helper function to get users from JSON file
const getUsers = () => {
  const filePath = path.join(process.cwd(), "data", "users.json");
  
  if (!fs.existsSync(filePath)) {
    // Create directory and file if they don't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Helper function to save users to JSON file
const saveUser = (user) => {
  const filePath = path.join(process.cwd(), "data", "users.json");
  const users = getUsers();
  users.push(user);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

// Helper function to find user by email or student ID
const findUser = (identifier) => {
  const users = getUsers();
  return users.find(
    (user) => user.email === identifier || user.studentId === identifier
  );
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email or Student ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please provide both email and password");
        }

        const user = findUser(credentials.email);

        if (!user) {
          throw new Error("Invalid credentials");
        }

        // Check if password is correct
        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        // Return user object without password
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          studentId: user.studentId,
          department: user.department,
          year: user.year,
          role: user.role || "student",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.studentId = user.studentId;
        token.department = user.department;
        token.year = user.year;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.studentId = token.studentId;
        session.user.department = token.department;
        session.user.year = token.year;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
});
