"use client"

import React, { useState } from 'react';
import { Search, GraduationCap, Code, Beaker, Briefcase, Palette, Microscope, ChevronRight } from 'lucide-react';

const DepartmentsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const departments = [
        { id: 1, name: "Computer Science", icon: <Code />, category: "Engineering", count: "1,240 Students", color: "bg-blue-500" },
        { id: 2, name: "Mechanical Engineering", icon: <Briefcase />, category: "Engineering", count: "850 Students", color: "bg-orange-500" },
        { id: 3, name: "Biotechnology", icon: <Beaker />, category: "Science", count: "420 Students", color: "bg-green-500" },
        { id: 4, name: "Fine Arts", icon: <Palette />, category: "Arts", count: "310 Students", color: "bg-purple-500" },
        { id: 5, name: "Medical Sciences", icon: <Microscope />, category: "Science", count: "980 Students", color: "bg-red-500" },
        { id: 6, name: "Architecture", icon: <GraduationCap />, category: "Engineering", count: "540 Students", color: "bg-indigo-500" },
    ];

    const categories = ["All", "Engineering", "Science", "Arts"];

    const filteredDepartments = departments.filter(dept => {
        const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = activeFilter === "All" || dept.category === activeFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen bg-gray-50/50 p-6 md:p-12">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="mb-10 space-y-4">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Academic Departments</h1>
                    <p className="text-gray-500 text-lg">Explore our diverse fields of study and find your focus.</p>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search departments..."
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeFilter === cat
                                        ? "bg-gray-900 text-white shadow-md"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Department Grid */}
                {filteredDepartments.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredDepartments.map((dept) => (
                            <div
                                key={dept.id}
                                className="group relative bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                                <div className={`w-14 h-14 ${dept.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-inherit/20 group-hover:scale-110 transition-transform`}>
                                    {React.cloneElement(dept.icon, { size: 28 })}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-1">{dept.name}</h3>
                                <p className="text-sm text-gray-500 font-medium mb-4">{dept.category}</p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{dept.count}</span>
                                    <div className="p-2 bg-gray-50 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                        <ChevronRight size={18} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                        <div className="inline-flex p-4 bg-gray-50 rounded-full text-gray-400 mb-4">
                            <Search size={32} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">No departments found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DepartmentsPage;