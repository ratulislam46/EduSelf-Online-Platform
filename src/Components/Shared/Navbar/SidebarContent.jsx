"use client";

import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import { FaHome, FaUserCircle, FaBook, FaBookmark, FaLayerGroup, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { VscSaveAs } from 'react-icons/vsc';


const SidebarContent = ({ isMobile = false, closeMenu }) => {
    const { data: session, status } = useSession();
    
    const navLinks = [
        { href: "/", label: "Home", icon: <FaHome /> },
        { href: "/books", label: "Books", icon: <FaBook /> },
        { href: "/saved", label: "Saved", icon: <FaBookmark /> },
        { href: "/profile", label: "Profile", icon: <FaUserCircle /> },
    ];

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' });
    };

    return (
        <div className="p-8 flex flex-col h-full bg-white shadow-xl lg:shadow-none min-h-screen">
            {/* Brand Logo & Close Button (Mobile) */}
            <div className="flex-none mb-10 flex items-center justify-between">
                <div>
                    <h5 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 uppercase leading-none">
                        Eduself
                    </h5>
                    <div className="h-1 w-8 bg-indigo-600 rounded-full mt-1"></div>
                </div>
                {isMobile && (
                    <button
                        onClick={closeMenu}
                        className="p-2 text-gray-400 hover:text-red-400 bg-red-50 rounded-full transition-all duration-500 transform hover:rotate-180 cursor-pointer"
                    >
                        <FaTimes size={22} />
                    </button>
                )}
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                <ul className="space-y-2 font-medium">
                    {navLinks?.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item?.href}
                                onClick={isMobile ? closeMenu : undefined}
                                className="group flex items-center gap-4 px-4 py-3 text-gray-600 rounded-xl transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                                <span className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    {item?.icon}
                                </span>
                                <span className="text-sm font-semibold tracking-wide">{item?.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="my-6 border-t border-gray-100"></div>

                {/* Auth Section */}
                {status === 'loading' ? (
                    <div className="px-4 py-3 text-center">
                        <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    </div>
                ) : session ? (
                    <>
                        {/* User Info Card */}
                        <div className="mb-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-gray-900 truncate">
                                        {session.user?.name || 'User'}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">
                                        {session.user?.studentId || ''}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Profile & Logout Buttons */}
                        <ul className="space-y-3 font-medium">
                            <li>
                                <Link
                                    href="/profile"
                                    onClick={isMobile ? closeMenu : undefined}
                                    className="flex items-center gap-4 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 transition-all border border-gray-200 hover:border-gray-300">
                                    <FaUserCircle className="text-xl" />
                                    <span className="text-sm font-semibold">My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-4 px-4 py-3 text-red-600 rounded-xl hover:bg-red-50 transition-all border border-red-200 hover:border-red-300 cursor-pointer">
                                    <FaSignOutAlt className="text-xl" />
                                    <span className="text-sm font-semibold">Sign out</span>
                                </button>
                            </li>
                        </ul>
                    </>
                ) : (
                    <ul className="space-y-3 font-medium">
                        <li>
                            <Link href="/login"
                                onClick={isMobile ? closeMenu : undefined}
                                className="flex items-center gap-4 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 transition-all border border-gray-200 hover:border-gray-300">
                                <MdLogin className="text-xl" />
                                <span className="text-sm font-semibold">Sign in</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/register"
                                onClick={isMobile ? closeMenu : undefined}
                                className="flex items-center gap-4 px-4 py-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all transform active:scale-95 text-center justify-center cursor-pointer">
                                <VscSaveAs className="text-xl" />
                                <span className="text-sm font-semibold">Sign up</span>
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>

            {/* Footer */}
            <div className="flex-none mt-auto pt-6 border-t border-gray-50">
                <div className="py-3 px-4 bg-gray-50 rounded-2xl text-center">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">
                        Version 2.0.1
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SidebarContent;