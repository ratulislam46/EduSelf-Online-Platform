"use client"
import React, { useState } from 'react';
import PDFViewer from './PDFViewer';

const BookList = ({ yearData, deptName, onBack }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  if (selectedBook) {
    return <PDFViewer book={selectedBook} onBack={() => setSelectedBook(null)} />;
  }

  return (
    <div className="animate-in zoom-in-95 duration-500">
      <button onClick={onBack} className="mb-6 text-indigo-600 font-bold cursor-pointer">← Back to Years</button>
      <h2 className="text-2xl font-black mb-8">{deptName} - {yearData.year_label} এর বইসমূহ</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {yearData.books.map((book) => (
          <div 
            key={book.id} 
            onClick={() => setSelectedBook(book)}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md mb-3 border border-gray-100">
              <img src={book.cover} alt={book.bookName} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h4 className="font-bold text-sm leading-tight">{book.bookName}</h4>
            <p className="text-xs text-gray-500 mt-1">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;