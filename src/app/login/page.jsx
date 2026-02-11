"use client"

import React, { useState } from 'react';
import { Mail, Lock, LogIn, ArrowRight, BookOpen } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* Left Side: Brand Identity (Hidden on Mobile) */}
      <div className="hidden md:flex md:w-5/12 bg-gradient-to-br from-indigo-700 to-blue-800 p-12 flex-col justify-between text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-12">
            <div className="bg-white/15 p-2 rounded-xl backdrop-blur-lg border border-white/20">
              <BookOpen size={28} />
            </div>
            <span className="text-2xl font-bold tracking-tight">EduLib</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Welcome Back to <br /> Your Digital Library.
            </h1>
            <p className="text-indigo-100 text-lg opacity-90 max-w-sm font-light">
              Pick up right where you left off. Access your reading history and department resources in one click.
            </p>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <div className="flex -space-x-2 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                className="w-8 h-8 rounded-full border-2 border-indigo-700 object-cover" 
                src={`https://i.pravatar.cc/150?img=${i + 10}`} 
                alt="User"
              />
            ))}
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-indigo-700 bg-indigo-600 text-[10px] font-bold">
              +2k
            </div>
          </div>
          <p className="text-sm text-indigo-200">Joined by 2,000+ students this semester.</p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 sm:p-16 lg:p-24">
        <div className="w-full max-w-sm">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Sign In</h2>
            <p className="text-gray-500 mt-3">Access your student dashboard and books.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email / ID Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-gray-700">Email or Student ID</label>
              </div>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                <input 
                  type="text" 
                  name="email"
                  placeholder="name@university.edu"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all placeholder:text-gray-400"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <button type="button" className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                  Forgot Password?
                </button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                <input 
                  type="password" 
                  name="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all placeholder:text-gray-400"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Remember Me Toggle (Optional but nice) */}
            <div className="flex items-center gap-2 ml-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <label htmlFor="remember" className="text-sm text-gray-600 select-none cursor-pointer">Keep me logged in</label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl shadow-xl shadow-gray-200 transition-all flex items-center justify-center gap-3 group active:scale-[0.98]"
            >
              <span>Sign In to EduLib</span>
              <LogIn size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              New to our library? 
              <a href="/register" className="ml-2 text-indigo-600 font-bold hover:underline inline-flex items-center gap-1 group">
                Create an account
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;