"use client"
import React, { useState } from 'react';
import YearList from './YearList';

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
    <div className="animate-in fade-in duration-500">
      <h2 className="text-3xl font-black mb-10 text-center">ডিপার্টমেন্ট নির্বাচন করুন</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allData.map((dept) => (
          <div 
            key={dept.id} 
            onClick={() => setSelectedDept(dept)}
            className="cursor-pointer bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="h-40 bg-indigo-50 rounded-2xl mb-4 overflow-hidden">
              <img src={dept.thumbnail} alt={dept.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold group-hover:text-indigo-600">{dept.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeptList;