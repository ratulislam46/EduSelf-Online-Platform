import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, name, department, year, password } = body;

    // File path for users
    const filePath = path.join(process.cwd(), "data", "users.json");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "User database not found" },
        { status: 404 }
      );
    }

    // Read existing users
    const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Find user index
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Update user data
    if (name) users[userIndex].name = name;
    if (department) users[userIndex].department = department;
    if (year) users[userIndex].year = year;

    // Hash and update password if provided
    if (password && password.trim() !== "") {
      if (password.length < 6) {
        return NextResponse.json(
          { error: "Password must be at least 6 characters long" },
          { status: 400 }
        );
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      users[userIndex].password = hashedPassword;
    }

    users[userIndex].updatedAt = new Date().toISOString();

    // Save updated users to file
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json(
      {
        message: "Profile updated successfully",
        user: {
          id: users[userIndex].id,
          name: users[userIndex].name,
          email: users[userIndex].email,
          studentId: users[userIndex].studentId,
          department: users[userIndex].department,
          year: users[userIndex].year,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Something went wrong while updating profile" },
      { status: 500 }
    );
  }
}
