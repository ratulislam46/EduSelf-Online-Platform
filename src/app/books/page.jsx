"use client"

import React, { useState } from 'react';
import { Search, GraduationCap, ArrowRight, BookOpen, Layers, X } from 'lucide-react';

const BooksSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(null);

  const departments = [
    { id: 1, name: "Bangla", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "English", image: "https://images.unsplash.com/photo-1543004629-142a762df0d4?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Physics", image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Chemistry", image: "https://images.unsplash.com/photo-1603126731744-118503a4667d?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "Higher Math", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Social Work", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "Soil Science", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=400" },
    { id: 8, name: "Zoology", image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&q=80&w=400" },
    { id: 9, name: "History", image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=400" },
    { id: 10, name: "Accounting", image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=400" },
    { id: 11, name: "Finance", image: "https://images.unsplash.com/photo-1611974714851-48206139d733?auto=format&fit=crop&q=80&w=400" },
    { id: 12, name: "Marketing", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=400" },
    { id: 13, name: "Management", image: "https://images.unsplash.com/photo-1542744173-8e7e53815d1e?auto=format&fit=crop&q=80&w=400" },
  ];

  const filteredDepts = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Components for the Year Selection View
  if (selectedDept) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] p-6 animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => setSelectedDept(null)}
            className="flex items-center gap-2 text-indigo-600 font-semibold mb-8 hover:gap-3 transition-all"
          >
            <X size={20} /> Back to Departments
          </button>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{selectedDept.name} Department</h2>
            <p className="text-gray-500 mt-2">Select your academic year to view syllabus and books.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((year) => (
              <div key={year} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group cursor-pointer">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Layers size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{year}</h3>
                <p className="text-gray-500 text-sm mb-6">Honours curriculum materials and references.</p>
                <div className="flex items-center text-indigo-600 font-bold gap-2 group-hover:gap-4 transition-all">
                  View Books <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Search Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">University Library</h1>
              <p className="text-gray-500 text-sm font-medium">Browse materials by department</p>
            </div>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search department..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDepts.map((dept) => (
            <div 
              key={dept.id} 
              className="group relative h-80 rounded-[2.5rem] overflow-hidden bg-gray-200 shadow-lg hover:shadow-indigo-200/50 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedDept(dept)}
            >
              {/* Thumbnail Image */}
              <img 
                src={dept.image} 
                alt={dept.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-indigo-400 mb-2">
                  <GraduationCap size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Honours 1-4 Years</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {dept.name}
                </h3>

                <button className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black transition-all">
                  Explore <BookOpen size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDepts.length === 0 && (
          <div className="text-center py-24">
             <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
               <Search size={32} />
             </div>
             <h3 className="text-xl font-bold text-gray-900">Department Not Found</h3>
             <p className="text-gray-500 mt-2">Try searching for another field of study.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksSection;