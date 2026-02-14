"use client"

import React, { useState } from 'react';
import { User, Mail, GraduationCap, Lock, Calendar, BookOpen, ArrowRight } from 'lucide-react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        studentId: '',
        department: '',
        year: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    console.log(formData);

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">

            {/* Left Side: Visual/Branding (Hidden on Mobile) */}
            <div className="hidden md:flex md:w-1/2 bg-indigo-600 p-12 flex-col justify-between text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                            <BookOpen size={28} />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">EduSelf</span>
                    </div>
                    <h1 className="text-5xl font-bold leading-tight mb-6">
                        Your journey to <br /> knowledge starts here.
                    </h1>
                    <p className="text-indigo-100 text-lg max-w-md">
                        Join thousands of students and access a vast library of digital resources,
                        tailored to your department and academic year.
                    </p>
                </div>

                {/* Decorative Circles */}
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 -right-24 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="relative z-10 text-sm text-indigo-200">
                    © 2026 EduSelf Digital Library. All rights reserved.
                </div>
            </div>

            {/* Right Side: Registration Form */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-20">
                <div className="w-full max-w-md">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                        <p className="text-gray-500 mt-2">Enter your details to register as a student.</p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        {/* Full Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                            <div className="relative group">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={19} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Md Ratul Howlader"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Email / ID */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Email / Student ID</label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={19} />
                                <input
                                    type="text"
                                    name="studentId"
                                    placeholder="student.name@university.edu"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Dept & Year Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Department</label>
                                <div className="relative">
                                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={19} />
                                    <select
                                        name="department"
                                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none appearance-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-gray-600"
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Dept</option>
                                        <option value="CS">CSC</option>
                                        <option value="CS">BSC</option>
                                        <option value="CS">BBA</option>
                                        <option value="CS">BSS</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Year</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={19} />
                                    <select
                                        name="year"
                                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none appearance-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-gray-600"
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Year</option>
                                        <option value="1">1st Year</option>
                                        <option value="2">2nd Year</option>
                                        <option value="3">3rd Year</option>
                                        <option value="4">4th Year</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={19} />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 group mt-4 hover:cursor-pointer"
                        >
                            Sign Up
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="text-center text-gray-500 mt-8 text-sm">
                        Already have an account? <a href="/login" className="text-indigo-600 font-bold hover:underline">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;