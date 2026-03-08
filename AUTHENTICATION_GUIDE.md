# Authentication System - Setup Guide

## 🎯 Overview

This project uses **NextAuth.js v5** (Auth.js) with credentials-based authentication. The system provides:
- ✅ Secure login and registration
- ✅ Password hashing with bcryptjs
- ✅ Session management with JWT
- ✅ Profile editing capabilities
- ✅ Protected routes
- ✅ Reusable authentication components

## 📦 Installation

All dependencies are already installed:
```bash
npm install next-auth@beta bcryptjs
npm install --save-dev @types/bcryptjs
```

## ⚙️ Configuration

### Environment Variables (.env.local)

The `.env.local` file contains:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
DATABASE_PATH=./data/users.json
```

**Important:** The `NEXTAUTH_SECRET` should be kept secure. A production-ready secret has been generated for you.

## 🗂️ File Structure

### Core Files
```
src/
├── auth.js                          # NextAuth configuration
├── middleware.js                    # Route protection middleware
├── app/
│   ├── api/auth/
│   │   ├── [...nextauth]/route.js   # NextAuth API endpoint
│   │   ├── register/route.js        # User registration endpoint
│   │   └── profile/route.js         # Profile update endpoint
│   ├── login/page.jsx               # Login page (uses LoginForm)
│   ├── register/page.jsx            # Register page (uses RegisterForm)
│   └── profile/page.jsx             # User profile & edit page
├── Components/Auth/
│   ├── LoginForm.jsx                # Reusable login component
│   └── RegisterForm.jsx             # Reusable registration component
└── contexts/
    └── AuthContext.jsx              # Session provider wrapper
```

### Data Storage
```
data/
└── users.json                       # User database (auto-created)
```

## 🔐 Features

### 1. Registration
- **Endpoint:** `/api/auth/register`
- **Method:** POST
- **Fields:** name, studentId, department, year, password
- **Validation:** 
  - All fields required
  - Password minimum 6 characters
  - Unique email/student ID check

### 2. Login
- **Provider:** Credentials (email/student ID + password)
- **Session Strategy:** JWT
- **Session Duration:** 30 days
- **Redirect:** `/books` on successful login

### 3. Profile Management
- **View:** Access via `/profile` or sidebar
- **Edit:** Click "Edit Profile" button
- **Updateable Fields:**
  - Full Name
  - Department
  - Year
  - Password (optional)

### 4. Session Management
- **Auto-synced** across components via `useSession()` hook
- **Persistent** for 30 days
- **Secure** JWT tokens stored in cookies

## 🚀 Usage

### For Users

1. **Register:** Visit `/register` and fill in your details
2. **Login:** Visit `/login` with your student ID and password
3. **Profile:** Click "Profile" in the sidebar to view/edit your data
4. **Logout:** Click "Sign out" in the sidebar

### For Developers

#### Access User Session
```jsx
import { useSession } from "next-auth/react";

function MyComponent() {
  const { data: session, status } = useSession();
  
  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Not logged in</p>;
  
  return (
    <div>
      <p>Name: {session.user.name}</p>
      <p>Student ID: {session.user.studentId}</p>
      <p>Department: {session.user.department}</p>
    </div>
  );
}
```

#### Protect Routes (Server Components)
```jsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function ProtectedPage() {
  const session = await auth();
  
  if (!session) {
    redirect("/login");
  }
  
  return <div>Protected content</div>;
}
```

#### Protect Routes (Client Components)
```jsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function ProtectedClient() {
  const { status } = useSession();
  const router = useRouter();
  
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }
  
  if (status === "loading") return <p>Loading...</p>;
  
  return <div>Protected content</div>;
}
```

#### Sign Out
```jsx
import { signOut } from "next-auth/react";

<button onClick={() => signOut({ callbackUrl: "/" })}>
  Sign Out
</button>
```

## 🛡️ Security Features

1. **Password Hashing:** Bcrypt with salt rounds of 12
2. **JWT Sessions:** No server-side session storage needed
3. **CSRF Protection:** Built-in NextAuth CSRF protection
4. **Input Validation:** Server-side validation on all endpoints
5. **Error Handling:** Generic error messages to prevent information leakage

## 📝 API Endpoints

### POST /api/auth/register
**Request Body:**
```json
{
  "name": "John Doe",
  "studentId": "john@university.edu",
  "department": "CSC",
  "year": "3",
  "password": "securepassword123"
}
```

**Response (Success):**
```json
{
  "message": "Registration successful",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@university.edu",
    "studentId": "john@university.edu",
    "department": "CSC",
    "year": "3"
  }
}
```

### PUT /api/auth/profile
**Request Body:**
```json
{
  "id": "user-id",
  "name": "Updated Name",
  "department": "BSC",
  "year": "4",
  "password": "newpassword123" // Optional
}
```

## 🔄 Migration to Production Database

Currently using JSON file storage. For production:

1. **Install MongoDB driver:**
```bash
npm install mongodb
```

2. **Update `src/auth.js`:** Replace file-based functions with MongoDB queries

3. **Update environment variables:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/eduself
```

4. **Update API routes** to use database instead of JSON file

## 🎨 Customization

### Change Redirect After Login
Edit `src/Components/Auth/LoginForm.jsx`, line ~36:
```javascript
router.push("/books"); // Change to your desired path
```

### Modify Session Duration
Edit `src/auth.js`, line ~87:
```javascript
maxAge: 30 * 24 * 60 * 60, // Change 30 to desired days
```

### Add More Departments
Edit `src/Components/Auth/RegisterForm.jsx` and `src/app/profile/page.jsx`, update department options.

## 🐛 Troubleshooting

### Issue: "Invalid credentials" error
- Check if user exists in `data/users.json`
- Verify password is correct
- Check bcrypt comparison in `src/auth.js`

### Issue: Session not persisting
- Verify `NEXTAUTH_SECRET` is set in `.env.local`
- Check browser cookies are enabled
- Ensure `NEXTAUTH_URL` matches your domain

### Issue: Registration fails silently
- Check console for errors
- Verify `data/` directory permissions
- Ensure all required fields are provided

## 📞 Support

For issues or questions:
1. Check NextAuth documentation: https://authjs.dev/
2. Review the code comments in `src/auth.js`
3. Check browser console and terminal for error messages

---

**Built with ❤️ using NextAuth.js**
