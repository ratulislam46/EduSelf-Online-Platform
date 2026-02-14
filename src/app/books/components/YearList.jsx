"use client"
import React, { useState } from 'react';
import BookList from './BookList';
import EmptyDepartment from './EmptyDepartment';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const YearList = ({ department, onBack }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);

  if (selectedYear) {
    return (
      <BookList
        yearData={selectedYear}
        deptName={department?.name}
        onBack={() => setSelectedYear(null)}
      />
    );
  };

  // console.log(department?.years?.length);
  if (!department?.years || department.years.length === 0) {
    return <EmptyDepartment onBack={onBack} />;
  }

  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <button onClick={onBack} className="mb-6 text-indigo-600 font-bold cursor-pointer">← Back to Departments</button>
      <h2 className="text-2xl font-black mb-8">{department?.name} - শিক্ষাবর্ষ</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {department?.years.map((year, index) => (
          <div
            key={year.id}
            onClick={() => setSelectedYear(year)}
            className="group relative cursor-pointer"
          >
            {/* Background Decorative Element - কার্ডের পেছনে হালকা গ্লো */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            {/* Main Card */}
            <div className="relative h-full p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm group-hover:shadow-2xl group-hover:border-indigo-100 transition-all duration-500 flex flex-col items-center overflow-hidden">

              {/* Animated Corner Shape */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-50 rounded-full group-hover:bg-indigo-600 transition-colors duration-500 opacity-50 group-hover:opacity-100" />

              {/* Year Icon Container */}
              <div className="relative z-10 w-20 h-20 mb-6 flex items-center justify-center rounded-3xl bg-indigo-50 text-indigo-600 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-inner">
                <Calendar size={36} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform" />
              </div>

              {/* Text Info */}
              <div className="relative z-10 text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-3 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  Academic Year
                </span>
                <h3 className="text-3xl font-black text-gray-800 group-hover:text-white transition-colors duration-500">
                  {year?.year_label}
                </h3>

                <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 group-hover:text-indigo-100 transition-colors">
                  <BookOpen size={16} />
                  <span className="text-sm font-bold">{year?.books.length} টি বই সংগৃহীত</span>
                </div>
              </div>

              {/* Hover Cover - হোভার করলে নিচ থেকে ব্লু কালার উঠে আসবে */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-700 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

              {/* Arrow Button - নিচে ছোট একটি বাটন */}
              <div className="relative z-10 mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  বইগুলো দেখুন <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default YearList;