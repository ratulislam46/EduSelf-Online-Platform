import React from 'react';
import { User, BookOpen, LogOut, MapPin, Calendar } from 'lucide-react';

const ProfilePage = () => {
  // Mock Data
  const user = {
    name: "Alex Rivera",
    email: "alex.rivera@university.edu",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150",
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
          <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
          <div className="px-6 pb-6">
            <div className="relative flex justify-between items-end -mt-12">
              <img 
                src={user.avatar} 
                alt="Profile" 
                className="w-24 h-24 rounded-2xl border-4 border-white shadow-md object-cover"
              />
              <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm">
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
            
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500">{user.email}</p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">Department</p>
                  <p className="text-sm font-medium text-gray-700">{user.department}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">Academic Year</p>
                  <p className="text-sm font-medium text-gray-700">{user.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reading History Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="text-blue-600" size={22} />
            <h2 className="text-lg font-bold text-gray-900">Reading History</h2>
          </div>
          
          <div className="space-y-4">
            {user.readingHistory.map((item) => (
              <div 
                key={item.id} 
                className="group flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white text-gray-400 group-hover:text-blue-500 transition-colors">
                    <User size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                </div>
                <div className="text-gray-300 group-hover:text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
            View All History
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;