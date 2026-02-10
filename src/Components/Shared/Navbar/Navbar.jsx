import Link from 'next/link';
import { FaHome, FaUserCircle, FaNewspaper, FaPlus } from 'react-icons/fa';
import { MdQuiz, MdForum, MdLogin } from 'react-icons/md';
import { AiFillAppstore } from 'react-icons/ai';
import { VscSaveAs } from 'react-icons/vsc';
import SmalDeviceNavbar from './SmalDeviceNavbar';

const Navbar = () => {

    return (
        <div className="flex">
            {/* Desktop Sidebar */}
            <div className='hidden lg:block w-72 border-r border-gray-100 min-h-screen bg-white sticky top-0'>
                <div className="p-8 flex flex-col h-full">
                    {/* Brand Logo Section */}
                    <div className="mb-10 px-2">
                        <h5 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 uppercase">
                            Eduself
                        </h5>
                        <div className="h-1 w-8 bg-indigo-600 rounded-full mt-1"></div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto custom-scrollbar">
                        <ul className="space-y-2 font-medium">
                            {[
                                { href: "/", label: "Home", icon: <FaHome /> },
                                { href: "/quiz", label: "Quiz", icon: <MdQuiz /> },
                                { href: "/forum", label: "Forum", icon: <MdForum /> },
                                { href: "/profile", label: "Profile", icon: <FaUserCircle /> },
                                { href: "/notice", label: "Notice", icon: <FaNewspaper /> },
                                { href: "/add-notice", label: "Add Notice", icon: <FaPlus /> },
                                { href: "/routine", label: "Routine", icon: <AiFillAppstore /> },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-4 px-4 py-3 text-gray-600 rounded-xl transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600"
                                    >
                                        <span className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            {item.icon}
                                        </span>
                                        <span className="text-sm tracking-wide">{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Divider */}
                        <div className="my-6 border-t border-gray-50"></div>

                        {/* Auth Section */}
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link href="/sign-in" className="flex items-center gap-4 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 transition-all">
                                    <MdLogin className="text-xl" />
                                    <span className="text-sm">Sign in</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/sign-up" className="flex items-center gap-4 px-4 py-3 bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                    <VscSaveAs className="text-xl" />
                                    <span className="text-sm">Sign up</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Optional Footer/Status */}
                    <div className="mt-auto pt-6">
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-xs text-gray-400 text-center uppercase tracking-widest font-bold">
                                Version 2.0.1
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden'>
                <SmalDeviceNavbar />
            </div>
        </div>
    );
};

export default Navbar;