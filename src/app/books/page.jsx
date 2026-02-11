"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Minimize, Download, Info, Menu } from 'lucide-react';

const BooksPage = () => {
    const [zoom, setZoom] = useState(100);
    const [currentPage, setCurrentPage] = useState(12);
    const totalPages = 284;

    const bookData = {
        title: "The Design of Everyday Things",
        author: "Don Norman"
    };

    return (
        <div className="flex flex-col h-screen bg-amber-500 text-zinc-100 font-sans">

            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between px-4 py-3 bg-gray-500 border-b border-zinc-700 shadow-lg z-10">
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-zinc-700 rounded-full transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <div>
                        <h1 className="text-sm md:text-base font-semibold truncate max-w-[150px] md:max-w-md">
                            {bookData.title}
                        </h1>
                        <p className="text-xs text-zinc-400">{bookData.author}</p>
                    </div>
                </div>

                {/* Controls: Hidden on small screens, grouped in menu */}
                <div className="hidden md:flex items-center gap-2 bg-gray-600 rounded-lg p-1 border border-zinc-700">
                    <button
                        onClick={() => setZoom(Math.max(50, zoom - 10))}
                        className="p-2 hover:bg-zinc-700 rounded-md transition-all"
                    >
                        <ZoomOut size={18} />
                    </button>
                    <span className="text-xs font-mono w-12 text-center">{zoom}%</span>
                    <button
                        onClick={() => setZoom(Math.min(200, zoom + 10))}
                        className="p-2 hover:bg-zinc-700 rounded-md transition-all"
                    >
                        <ZoomIn size={18} />
                    </button>

                    <div className="w-px h-4 bg-zinc-700 mx-1" />

                    <button className="p-2 hover:bg-zinc-700 rounded-md transition-all">
                        <Maximize size={18} />
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-zinc-700 rounded-full md:hidden">
                        <Menu size={20} />
                    </button>
                    <button className="hidden sm:flex p-2 hover:bg-zinc-700 rounded-full">
                        <Download size={20} />
                    </button>
                </div>
            </header>

            {/* Main Reading Area */}
            <main className="flex-1 overflow-auto relative bg-gray-300 flex justify-center p-4 md:p-8">
                {/* PDF Page Mockup */}
                <div
                    className="bg-white shadow-2xl transition-all duration-300 ease-in-out origin-top"
                    style={{
                        width: `${Math.min(100, (600 * zoom) / 100)}%`,
                        maxWidth: '850px',
                        aspectRatio: '1 / 1.41', // Standard A4 Aspect Ratio
                    }}
                >
                    {/* Internal Content Placeholder */}
                    <div className="p-12 text-zinc-800 space-y-6">
                        <div className="h-8 bg-zinc-100 w-3/4 rounded" />
                        <div className="space-y-3">
                            {[...Array(15)].map((_, i) => (
                                <div key={i} className="h-4 bg-zinc-50 rounded w-full" />
                            ))}
                        </div>
                        <div className="h-4 bg-zinc-50 rounded w-5/6" />
                    </div>
                </div>
            </main>

            {/* Bottom Navigation Toolbar */}
            <footer className="bg-gray-500 backdrop-blur-md border-t border-zinc-700 p-3 fixed bottom-6 left-1/2 -translate-x-1/2 rounded-2xl shadow-2xl flex items-center gap-6 z-20">
                <div className="flex items-center gap-1">
                    <button
                        disabled={currentPage <= 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="p-2 hover:bg-zinc-700 disabled:opacity-30 rounded-xl transition-colors border"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center gap-2 px-3">
                        <input
                            type="text"
                            value={currentPage}
                            onChange={(e) => setCurrentPage(Number(e.target.value))}
                            className="w-12 bg-zinc-900 border border-zinc-600 rounded-md py-1 text-center text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <span className="text-sm">of {totalPages}</span>
                    </div>

                    <button
                        disabled={currentPage >= totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="p-2 hover:bg-zinc-700 disabled:opacity-30 rounded-xl transition-colors border"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </footer>

        </div>
    );
};

export default BooksPage;