"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaNewspaper, FaUserCircle } from 'react-icons/fa';
import { MdForum, MdQuiz } from 'react-icons/md';

const SmalDeviceNavbar = () => {
    const pathname = usePathname();

    const navItems = [
        { href: '/', icon: FaHome, label: 'Home', size: 24 },
        { href: '/quiz', icon: MdQuiz, label: 'Quiz', size: 24 },
        { href: '/forum', icon: MdForum, label: 'Forum', size: 24 },
        { href: '/notice', icon: FaNewspaper, label: 'Notice', size: 22 },
        { href: '/profile', icon: FaUserCircle, label: 'Profile', size: 22 },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-lg">
            {/* Ambient Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative h-16 bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20 dark:border-gray-800 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
                <div className="grid h-full grid-cols-5">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative flex flex-col items-center justify-center group"
                            >
                                {/* Active Indicator (The "Blob") */}
                                <div className={`absolute inset-1 rounded-xl transition-all duration-300 ease-out 
                                    ${isActive 
                                        ? "bg-indigo-100 dark:bg-indigo-500/20 scale-100" 
                                        : "bg-transparent scale-0 group-active:scale-90 group-active:bg-gray-100 dark:group-active:bg-gray-800"
                                    }`} 
                                />

                                {/* Icon Container */}
                                <div className={`relative z-10 transition-all duration-300 ${isActive ? "-translate-y-1" : "group-hover:-translate-y-1"}`}>
                                    <Icon 
                                        size={item.size} 
                                        className={`transition-colors duration-300 ${
                                            isActive 
                                            ? "text-indigo-600 dark:text-indigo-400" 
                                            : "text-gray-500 dark:text-gray-400 group-hover:text-indigo-500"
                                        }`} 
                                    />
                                </div>

                                {/* Label - Tiny & Modern */}
                                <span className={`relative z-10 text-[10px] font-bold transition-all duration-300 uppercase tracking-tighter
                                    ${isActive 
                                        ? "opacity-100 translate-y-0 text-indigo-600 dark:text-indigo-400" 
                                        : "opacity-0 translate-y-2 text-gray-400"
                                    }`}
                                >
                                    {item.label}
                                </span>

                                {/* Bottom Dot for Active State */}
                                {isActive && (
                                    <div className="absolute bottom-1.5 w-1 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.6)]" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SmalDeviceNavbar;