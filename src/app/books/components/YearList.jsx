"use client"
import React, { useState } from 'react';
import BookList from './BookList';

const YearList = ({ department, onBack }) => {
  const [selectedYear, setSelectedYear] = useState(null);

  if (selectedYear) {
    return (
      <BookList 
        yearData={selectedYear} 
        deptName={department?.name}
        onBack={() => setSelectedYear(null)} 
      />
    );
  }

  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <button onClick={onBack} className="mb-6 text-indigo-600 font-bold">← Back to Departments</button>
      <h2 className="text-2xl font-black mb-8">{department?.name} - শিক্ষাবর্ষ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {department?.years.map((year) => (
          <div 
            key={year.id} 
            onClick={() => setSelectedYear(year)}
            className="p-10 bg-indigo-600 text-white rounded-2xl text-center cursor-pointer hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
          >
            <h3 className="text-2xl font-bold">{year?.year_label}</h3>
            <p className="opacity-80 mt-2">{year?.books.length} টি বই আছে</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearList;