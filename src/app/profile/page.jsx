"use client"
import React from 'react';
import Image from 'next/image';
import { User, BookOpen, LogOut, MapPin, Calendar, ChevronRight, Clock } from 'lucide-react';
import Link from 'next/link';

const ProfilePage = () => {

  const user = {
    name: "Md Ratul Howlader",
    email: "arfanratul46@gmail.com",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    avatar: "https://i.ibb.co.com/wrgNy3sg/profile.jpg",
    readingHistory: [
      { id: 1, title: "Deep Learning for Computer Vision", date: "2 hours ago" },
      { id: 2, title: "Modern Operating Systems - 5th Ed", date: "Yesterday" },
      { id: 3, title: "Introduction to Algorithms", date: "3 days ago" },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header / User Info Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Banner */}
          <div className="h-32 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500"></div>

          <div className="px-6 pb-6">
            <div className="relative flex justify-between items-end -mt-12">
              {/* Avatar Modification with Next.js Image */}
              <div className="relative w-24 h-24 rounded-2xl border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                <Image
                  src={user.avatar}
                  alt="Profile" fill sizes="96px" priority
                  className="object-cover" />
              </div>

              <Link
                href='/login'
                className="flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 hover:cursor-pointer transition-all font-bold text-sm active:scale-95">
                <LogOut size={18} />
                <span>Logout</span>
              </Link>
            </div>

            <div className="mt-6">
              <h1 className="text-2xl md:text-3xl font-black text-gray-900">{user.name}</h1>
              <p className="text-gray-500 font-medium">{user.email}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-100 transition-colors">
                <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Department</p>
                  <p className="text-sm font-bold text-gray-700">{user.department}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-purple-100 transition-colors">
                <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl">
                  <Calendar size={22} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Academic Year</p>
                  <p className="text-sm font-bold text-gray-700">{user.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reading History Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <BookOpen size={24} />
              </div>
              <h2 className="text-xl font-black text-gray-900">Reading History</h2>
            </div>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-tighter">
              {user.readingHistory.length} Activities
            </span>
          </div>

          <div className="grid gap-4">
            {user?.readingHistory?.map((item) => (
              <div
                key={item.id}
                className="group flex items-center justify-between p-4 border border-gray-50 rounded-2xl hover:border-indigo-100 hover:bg-indigo-50/20 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-white text-gray-400 group-hover:text-indigo-500 transition-all shadow-sm">
                    <User size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-indigo-700 transition-colors">{item.title}</h3>
                    <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
                      <Clock size={12} /> {item.date}
                    </p>
                  </div>
                </div>
                <div className="text-gray-300 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all">
                  <ChevronRight size={24} />
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 py-4 text-sm font-bold text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all border border-dashed border-gray-200 hover:border-indigo-200 hover:cursor-pointer">
            View All History
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;