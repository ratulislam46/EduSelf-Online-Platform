"use client";

import Link from "next/link";
import { FaHome, FaNewspaper, FaUserCircle } from 'react-icons/fa';
import { MdForum, MdQuiz } from 'react-icons/md';

const SmalDeviceNavbar = () => {
    return (
        <div>

            <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                    {/* Home  */}
                    <Link
                        href='/'
                        data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  dark:hover:bg-gray-800 group">
                        <FaHome size={26} className='text-white' />
                        <span className="sr-only">Home</span>
                    </Link>
                    <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                        Home
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    {/* Quiz  */}
                    <Link
                        href='/quiz'
                        data-tooltip-target="tooltip-quiz" type="button" className="inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group">
                        <MdQuiz size={26} className='text-white' />
                        <span className="sr-only">Quiz</span>
                    </Link>
                    <div id="tooltip-quiz" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                        Quiz
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    {/* Forum  */}
                    <Link
                        href='/forum'
                        data-tooltip-target="tooltip-forum" type="button" className="inline-flex flex-col items-center justify-center px-5  dark:hover:bg-gray-800 group">
                        <MdForum size={26} className='text-white' />
                        <span className="sr-only">Forum</span>
                    </Link>
                    <div id="tooltip-forum" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                        Forum
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    {/* Notice  */}
                    <Link
                        href='/notice'
                        data-tooltip-target="tooltip-notice" type="button" className="inline-flex flex-col items-center justify-center px-5  dark:hover:bg-gray-800 group">
                        <FaNewspaper size={20} className='text-white' />
                        <span className="sr-only">Notice</span>
                    </Link>
                    <div id="tooltip-notice" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                        Notice
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    {/* Profile */}
                    <Link
                        href='/profile'
                        data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full dark:hover:bg-gray-800 group">
                        <FaUserCircle size={20} className='text-white' />
                        <span className="sr-only">Profile</span>
                    </Link>
                    <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                        Profile
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SmalDeviceNavbar;