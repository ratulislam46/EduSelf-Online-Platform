"use client"
import React, { useState } from 'react';
import YearList from './YearList';
import { ChevronRight, Search, X } from 'lucide-react'; // Search এবং X আইকন যোগ করা হয়েছে

const DeptList = ({ allData }) => {
  const [selectedDept, setSelectedDept] = useState(null);
  // ১. সার্চ কুয়েরির জন্য স্টেট
  const [searchQuery, setSearchQuery] = useState("");

  // যদি ডিপার্টমেন্ট সিলেক্ট করা থাকে, তবে YearList দেখাও
  if (selectedDept) {
    return (
      <YearList
        department={selectedDept}
        onBack={() => setSelectedDept(null)}
      />
    );
  }

  // ২. সার্চ ফিল্টারিং লজিক (নাম অনুযায়ী ফিল্টার হবে)
  const filteredData = allData?.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-700">
      <div className="text-center mb-10 px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 tracking-tight">
          Choose Your Department
        </h2>
        <p className="max-w-xl mx-auto text-base md:text-lg text-gray-500 font-medium leading-relaxed">
          Select your academic field to discover curated textbooks and specialized
          resources tailored specifically for your curriculum.
        </p>
      </div>

      {/* ৩. সার্চ বার ডিজাইন */}
      <div className="max-w-md mx-auto mb-16 px-4 relative group">
        <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none">
          <Search size={20} className="text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search your department..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-14 pr-12 py-4 bg-white border border-gray-200 rounded-[1.5rem] shadow-sm focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none text-gray-700 font-medium"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-7 flex items-center text-gray-400 hover:text-red-500 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* ৪. ফিল্টার করা ডাটা রেন্ডার করা */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredData?.length > 0 ? (
          filteredData.map((dept) => (
            <div
              key={dept.id}
              onClick={() => setSelectedDept(dept)}
              className="group relative h-[350px] cursor-pointer overflow-hidden rounded-2xl bg-gray-200 shadow-lg transition-all duration-500 border border-white/20"
            >
              <img
                src={dept?.thumbnail}
                alt={dept?.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-all duration-500">
                  <h3 className="text-2xl font-black text-white mb-4 tracking-wide">
                    {dept?.name}
                  </h3>
                  <div className="flex items-center">
                    <button className="flex items-center gap-2 rounded-2xl text-black group-hover:text-white backdrop-blur-md px-5 py-2.5 text-sm font-bold bg-white shadow-xl transition-all duration-300 group-hover:bg-white/10 border border-white/20 group-hover:border-white cursor-pointer">
                      Explore Now
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* ৫. ডাটা না পাওয়া গেলে Empty State */
          <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-500 font-bold text-lg">No department found matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-indigo-600 font-bold hover:underline"
            >
              View all departments
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeptList;