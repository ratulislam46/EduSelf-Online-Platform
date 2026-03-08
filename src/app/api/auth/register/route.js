import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, studentId, department, year, password } = body;

    // Validation
    if (!name || !studentId || !department || !year || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    // File path for users
    const filePath = path.join(process.cwd(), "data", "users.json");

    // Create directory and file if they don't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]));
    }

    // Read existing users
    const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Check if user already exists
    const existingUser = users.find(
      (user) => user.email === studentId || user.studentId === studentId
    );

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email or student ID already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email: studentId, // Using student ID as email for simplicity
      studentId,
      department,
      year,
      password: hashedPassword,
      role: "student",
      createdAt: new Date().toISOString(),
    };

    // Add user to array
    users.push(newUser);

    // Save to file
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json(
      {
        message: "Registration successful",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          studentId: newUser.studentId,
          department: newUser.department,
          year: newUser.year,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Something went wrong during registration" },
      { status: 500 }
    );
  }
}
