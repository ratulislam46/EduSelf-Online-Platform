"use client"
import React, { useState, useMemo } from 'react';
import YearList from './YearList';
import { ChevronRight, Search, X, Filter } from 'lucide-react';

const DeptList = ({ allData }) => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Categories list 
  const categories = ["All", "BSc", "BBA", "BA", "BSS"];

  // Search + Category Filter work on together
  const filteredData = useMemo(() => {
    return allData?.filter((dept) => {
      const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || dept.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

  }, [allData, searchQuery, activeCategory]);

  if (selectedDept) {
    return (
      <YearList
        department={selectedDept}
        onBack={() => setSelectedDept(null)}
      />
    );
  };
  // console.log(activeCategory);

  return (
    <div className="px-4 py-10 animate-in fade-in duration-700">

      {/* 1. Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 tracking-tight">
          Choose Your <span className="text-indigo-600">Department</span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-500 font-medium">
          Select your academic field to access curated textbooks and specialized resources.
        </p>
      </div>

      {/* 2. Controls Section (Search & Filter) */}
      <div className="flex flex-col items-center gap-8 mb-16">

        {/* Search Bar */}
        <div className="w-full max-w-xl relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search by department name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-12 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none font-medium"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="absolute inset-y-0 right-5 flex items-center text-gray-400 hover:text-red-500">
              <X size={20} />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:cursor-pointer ${activeCategory === cat
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105"
                : "bg-white text-gray-600 border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Grid Display Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredData?.length > 0 ? (
          filteredData.map((dept) => (
            <div
              key={dept.id}
              onClick={() => setSelectedDept(dept)}
              className="group relative h-[350px] cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-xl transition-all duration-500"
            >
              <img
                src={dept?.thumbnail}
                alt={dept?.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">{dept.category}</span>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-black text-white mb-5">{dept?.name}</h3>
                <div className="flex items-center">

                  <button className="flex items-center gap-2 rounded-2xl text-black group-hover:text-white backdrop-blur-md px-5 py-2.5 text-sm font-bold bg-white shadow-xl transition-all duration-300 group-hover:bg-white/10 border border-white/20 group-hover:border-white cursor-pointer">
                    Explore Now
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                </div>
              </div>
            </div>
          ))
        ) : (
          /* Empty State */
          <div className="col-span-full py-20 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
            <div className="inline-flex p-5 bg-white rounded-full shadow-sm mb-4 text-gray-400">
              <Filter size={40} />
            </div>
            <p className="text-gray-500 font-bold text-xl">No match found!</p>
            <p className="text-gray-400 text-sm mt-1">Try adjusting your search or category filter.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-6 text-indigo-600 font-bold hover:underline hover:cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeptList;