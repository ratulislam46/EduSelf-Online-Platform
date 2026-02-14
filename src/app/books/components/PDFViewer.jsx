"use client"
import React from 'react';

const PDFViewer = ({ book, onBack }) => {
    return (
        <div className="animate-in fade-in duration-500 h-[90vh] flex flex-col">
            <div className="flex justify-between items-center mb-4  p-4">
                <button onClick={onBack} className="text-red-500 font-bold px-4 py-2 rounded-xl text-sm border cursor-pointer">✕ Close Reader</button>
                <h3 className="font-bold truncate max-w-2xl md:max-w-md">{book.bookName}</h3>
                <a href={book.pdfUrl} download className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold">Download</a>
            </div>

            {/* Book page/PDF file show */}
            <div className="flex-1 bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
                <div>
                    <p className='text-gray-500 text-4xl text-center mt-50'><span className='text-amber-500'>{book.bookName}</span> Book Pages or PDF cooming soon</p>
                </div>
            </div>
        </div>
    );
};

export default PDFViewer;