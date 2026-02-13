"use client"
import React from 'react';

const PDFViewer = ({ book, onBack }) => {
  return (
    <div className="animate-in fade-in duration-500 h-[90vh] flex flex-col">
      <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-2xl shadow-sm">
        <button onClick={onBack} className="text-red-500 font-bold">✕ Close Reader</button>
        <h3 className="font-bold truncate max-w-[200px] md:max-w-md">{book.bookName}</h3>
        <a href={book.pdfUrl} download className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold">Download</a>
      </div>
      <div className="flex-1 bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
        <iframe 
          src={`${book.pdfUrl}#toolbar=0`} 
          className="w-full h-full border-none"
          title={book.bookName}
        />
      </div>
    </div>
  );
};

export default PDFViewer;