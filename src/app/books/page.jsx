"use client"

import React, { useState } from 'react';
import { Search, Filter, Book, User, Bookmark, SlidersHorizontal, X } from 'lucide-react';

const BooksListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock Data
  const books = [
    { id: 1, title: "Modern Operating Systems", author: "Andrew S. Tanenbaum", subject: "Systems", department: "Computer Science", year: "3rd Year" },
    { id: 2, title: "Engineering Thermodynamics", author: "P.K. Nag", subject: "Thermal", department: "Mechanical", year: "2nd Year" },
    { id: 3, title: "Data Structures & Algorithms", author: "Narasimha Karumanchi", subject: "Programming", department: "Computer Science", year: "1st Year" },
    { id: 4, title: "Architectural Graphics", author: "Francis D.K. Ching", subject: "Design", department: "Architecture", year: "1st Year" },
    { id: 5, title: "Digital Signal Processing", author: "John G. Proakis", subject: "Signals", department: "Electronics", year: "3rd Year" },
    { id: 6, title: "Clean Code", author: "Robert C. Martin", subject: "Software", department: "Computer Science", year: "2nd Year" },
  ];

  const departments = ["All", "Computer Science", "Mechanical", "Architecture", "Electronics"];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "All" || book.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Book className="text-blue-600" /> Library Catalog
            </h1>
            
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text"
                placeholder="Search by title or author..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium"
            >
              <SlidersHorizontal size={18} /> Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-64 space-y-8 shrink-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Department</h3>
              <div className="space-y-2">
                {departments.map(dept => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedDept === dept ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Stats</h3>
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-blue-600 text-2xl font-bold">{filteredBooks.length}</p>
                <p className="text-blue-800 text-xs font-medium uppercase">Books Available</p>
              </div>
            </div>
          </aside>

          {/* Books Grid */}
          <main className="flex-1">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <div key={book.id} className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all flex flex-col">
                    <div className="relative aspect-[3/4] mb-4 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <Book size={48} className="text-gray-300 group-hover:text-blue-200 transition-colors" />
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-bold text-blue-600 rounded uppercase tracking-tighter shadow-sm border border-blue-100">
                          {book.subject}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 flex-1">
                      <h3 className="font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                        {book.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User size={14} />
                        <span>{book.author}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] font-medium text-gray-400">
                      <span className="bg-gray-100 px-2 py-1 rounded">{book.department}</span>
                      <span>{book.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <X className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">No books found</h3>
                <p className="text-gray-500">Try changing your filters or search keywords.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default BooksListPage;