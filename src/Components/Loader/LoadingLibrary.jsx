import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

const LoadingLibrary = () => {
    return (
        <div className="min-h-[80vh] w-full flex flex-col items-center justify-center px-6 overflow-hidden pt-10">

            {/* ১. Animated icon section */}
            <div className="relative mb-8">
                {/*  Pulsing Glow */}
                <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />

                <div className="relative bg-white p-6 rounded-[2.5rem] shadow-2xl border border-indigo-50 flex items-center justify-center animate-bounce-slow">
                    <BookOpen size={48} className="text-indigo-600" strokeWidth={1.5} />

                    {/* little Icon */}
                    <div className="absolute -top-2 -right-2 bg-yellow-400 p-1.5 rounded-xl shadow-lg animate-spin-slow">
                        <Sparkles size={16} className="text-white fill-white" />
                    </div>
                </div>
            </div>

            {/* ২. Text section */}
            <div className="text-center space-y-3">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                    Loading <span className="text-indigo-600">Library...</span>
                </h3>
                <p className="text-gray-400 font-medium text-sm md:text-base animate-pulse">
                    Curating the best resources for your excellence
                </p>
            </div>

            {/* ৩. Mordern process bar */}
            <div className="mt-10 w-full max-w-[280px] h-1.5 bg-gray-100 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 w-1/2 rounded-full animate-loading-bar" />
            </div>

            {/* ৪. Dummy cards Scaleton*/}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl opacity-20 pointer-events-none">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-48 bg-gray-200 rounded-3xl animate-pulse" />
                ))}
            </div>

        </div>
    );
};

export default LoadingLibrary;