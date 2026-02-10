"use client";

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import SidebarContent from './SidebarContent';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* --- MOBILE TOP BAR (Premium UI) --- */}
            <div className="lg:hidden flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">E</div>
                    <h5 className="text-xl font-black tracking-tighter text-indigo-600 uppercase">
                        Eduself
                    </h5>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl active:scale-90 transition-all shadow-sm shadow-indigo-100"
                >
                    <FaBars size={20} />
                </button>
            </div>

            {/* --- MOBILE SIDEBAR DRAWER (Smooth Slide) --- */}
            <div
                className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}
            >
                {/* Overlay with blur effect */}
                <div
                    className={`absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Sidebar Panel */}
                <div className={`absolute top-0 left-0 w-[80%] max-w-[300px] h-full transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <SidebarContent isMobile={true} closeMenu={() => setIsOpen(false)} />
                </div>
            </div>

            {/* --- DESKTOP SIDEBAR --- */}
            <div className='hidden lg:block w-72 border-r border-gray-100 min-h-screen bg-white sticky top-0'>
                <SidebarContent closeMenu={() => setIsOpen(false)} />
            </div>
        </div>
    );
};

export default Navbar;