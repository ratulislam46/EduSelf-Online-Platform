"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUserCircle, FaNewspaper, FaBook, FaBookmark, FaLayerGroup, FaBars, FaTimes } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { VscSaveAs } from 'react-icons/vsc';

// Sidebar Content Component (Main Navbar er baire rakha hoyeche access fix korar jonno)
const SidebarContent = ({ isMobile = false, closeMenu }) => {
    const navLinks = [
        { href: "/", label: "Home", icon: <FaHome /> },
        { href: "/books", label: "Books", icon: <FaBook /> },
        { href: "/departments", label: "Departments", icon: <FaLayerGroup /> },
        { href: "/notice", label: "Notice", icon: <FaNewspaper /> },
        { href: "/saved", label: "Saved", icon: <FaBookmark /> },
        { href: "/profile", label: "Profile", icon: <FaUserCircle /> },
    ];

    return (
        <div className="p-8 flex flex-col h-full bg-white dark:bg-gray-900 shadow-xl lg:shadow-none">
            {/* Brand Logo & Close Button (Mobile) */}
            <div className="mb-10 flex items-center justify-between">
                <div>
                    <h5 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 uppercase leading-none">
                        Eduself
                    </h5>
                    <div className="h-1 w-8 bg-indigo-600 rounded-full mt-1"></div>
                </div>
                {isMobile && (
                    <button
                        onClick={closeMenu}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-300 transform hover:rotate-90"
                    >
                        <FaTimes size={22} />
                    </button>
                )}
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={isMobile ? closeMenu : undefined}
                                className="group flex items-center gap-4 px-4 py-3 text-gray-600 dark:text-gray-300 rounded-xl transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                <span className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    {item.icon}
                                </span>
                                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="my-6 border-t border-gray-100 dark:border-gray-800"></div>

                {/* Auth Section */}
                <ul className="space-y-3 font-medium">
                    <li>
                        <Link href="/sign-in" onClick={isMobile ? closeMenu : undefined} className="flex items-center gap-4 px-4 py-3 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                            <MdLogin className="text-xl" />
                            <span className="text-sm font-semibold">Sign in</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sign-up" onClick={isMobile ? closeMenu : undefined} className="flex items-center gap-4 px-4 py-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 hover:shadow-indigo-300 transition-all transform active:scale-95 text-center justify-center">
                            <VscSaveAs className="text-xl" />
                            <span className="text-sm font-semibold">Sign up</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-gray-50 dark:border-gray-800">
                <div className="py-3 px-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl text-center">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">
                        Version 2.0.1
                    </p>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* --- MOBILE TOP BAR --- */}
            <div className="lg:hidden flex items-center justify-between p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40 w-full">
                {/* Left Side: Logo and Name */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200 dark:shadow-none">
                        E
                    </div>
                    <h5 className="text-xl font-black tracking-tighter text-indigo-600 dark:text-indigo-400 uppercase">
                        Eduself
                    </h5>
                </div>

                {/* Right Side: Menu Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl active:scale-90 transition-all shadow-sm"
                >
                    <FaBars size={22} />
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
            <div className='hidden lg:block w-72 border-r border-gray-100 dark:border-gray-800 min-h-screen bg-white dark:bg-gray-900 sticky top-0'>
                <SidebarContent closeMenu={() => setIsOpen(false)} />
            </div>
        </div>
    );
};

export default Navbar;