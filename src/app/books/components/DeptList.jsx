"use client"
import React, { useState } from 'react';
import YearList from './YearList';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const DeptList = ({ allData }) => {
  const [selectedDept, setSelectedDept] = useState(null);

  // যদি ডিপার্টমেন্ট সিলেক্ট করা থাকে, তবে YearList দেখাও
  if (selectedDept) {
    return (
      <YearList
        department={selectedDept}
        onBack={() => setSelectedDept(null)}
      />
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <h2 className="text-3xl font-black mb-10 text-center text-gray-800 tracking-tight">
        ডিপার্টমেন্ট নির্বাচন করুন
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allData?.map((dept) => (
          <div
            key={dept.id}
            onClick={() => setSelectedDept(dept)}
            className="group relative h-[350px] cursor-pointer overflow-hidden rounded-2xl bg-gray-200 shadow-lg transition-all duration-500 border border-white/20"
          >
            {/* Full Card Thumbnail */}
            <img
              src={dept?.thumbnail}
              alt={dept?.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Gradient Overlay - টেক্সট ক্লিয়ার রাখার জন্য */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Content Layer */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transform transition-all duration-500">
                {/* Department Name */}
                <h3 className="text-2xl font-black text-white mb-4 tracking-wide transition-colors">
                  {dept?.name}
                </h3>

                {/* Explore Button */}
                <div className="flex items-center">
                  <button className="flex items-center gap-2 rounded-2xl text-black group-hover:text-white backdrop-blur-md px-5 py-2.5 text-sm font-bold bg-white shadow-xl transition-all duration-300 group-hover:bg-white/10 border border-white/20 group-hover:border-white cursor-pointer">
                    Explore Now
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeptList;