"use client"
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Bookmark, Search, Trash2, BookOpen, ArrowLeft, ExternalLink, Library } from 'lucide-react';

const SavedPage = ({ savedBooks = [], onRemove }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // সার্চ লজিক
  const filteredSavedBooks = useMemo(() => {
    return savedBooks.filter(book => 
      book.bookName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [savedBooks, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 animate-in fade-in duration-700">
      
      {/* ১. হেডার সেকশন */}
      <div className="bg-white border-b border-gray-100 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 mb-3 font-bold">
                <Bookmark size={20} className="fill-indigo-600" />
                <span className="uppercase tracking-[0.2em] text-[10px] sm:text-xs">My Collection</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                Saved <span className="text-indigo-600">Books</span>
              </h1>
              <p className="text-gray-500 mt-2 font-medium">
                {savedBooks.length} items found in your library.
              </p>
            </div>

            {/* সার্চ বার */}
            <div className="relative w-full max-w-sm group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Search your library..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none transition-all font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {filteredSavedBooks.length > 0 ? (
          /* ২. সেভ করা বইয়ের গ্রিড */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSavedBooks.map((book) => (
              <div 
                key={book.id} 
                className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* বুক কভার */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.bookName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* হোভার অ্যাকশন (Remove Button) */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <button 
                       onClick={() => onRemove(book.id)}
                       className="p-4 bg-white/90 backdrop-blur-md text-red-600 rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-xl active:scale-90"
                       title="Remove from saved"
                     >
                       <Trash2 size={24} />
                     </button>
                  </div>
                </div>

                {/* কন্টেন্ট */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-indigo-600 transition-colors">{book.bookName}</h3>
                  <p className="text-gray-500 text-sm font-medium mb-6">by {book.author}</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <Link href={`/reader/${book.id}`} className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs tracking-wider hover:gap-3 transition-all">
                      READ NOW <BookOpen size={16} />
                    </Link>
                    <button className="text-gray-300 hover:text-indigo-600 transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ৩. এম্পটি স্টেট (খালি থাকলে যা দেখাবে) */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-indigo-50 rounded-[2.5rem] flex items-center justify-center text-indigo-400 mb-6 animate-pulse">
              <Library size={48} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              {searchQuery ? "No matching books found" : "Your library is empty"}
            </h2>
            <p className="text-gray-500 max-w-xs mb-10 font-medium">
              {searchQuery 
                ? "We couldn't find what you're looking for. Try a different name."
                : "Explore our collection and save your favorite books here."}
            </p>
            <Link href="/books">
              <button className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-indigo-600 hover:shadow-indigo-200 transition-all active:scale-95 hover:cursor-pointer">
                <ArrowLeft size={20} />
                Start Exploring
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPage;