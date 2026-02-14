import React from 'react';
import Link from 'next/link'; // Next.js navigation এর জন্য
import { BookOpen, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">

      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles size={14} className="text-indigo-600 fill-indigo-600" />
          <span className="text-[10px] sm:text-xs font-black text-indigo-700 uppercase tracking-[0.15em]">
            The Future of Academic Learning
          </span>
        </div>

        {/* Responsive Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 tracking-tight mb-8 leading-[1.1]">
          Unleash Knowledge with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500">
            EduSelf Digital
          </span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-500 mb-12 leading-relaxed font-medium px-4">
          All your department's yearbooks are now in one place. Read, learn, and advance yourself with thousands of curated resources anytime, on any device.
        </p>

        {/* Interactive Buttons (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4">
          <Link href="/books" className="w-full sm:w-auto">
            <button className="w-full px-10 py-5 bg-gray-900 text-white rounded-[1.5rem] font-bold flex items-center justify-center gap-3 hover:bg-indigo-600 hover:shadow-[0_20px_50px_rgba(79,70,229,0.3)] transition-all group active:scale-95 cursor-pointer">
              Start Reading
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <Link href="/books" className="w-full sm:w-auto">
            <button className="w-full px-10 py-5 bg-white text-gray-700 border-2 border-gray-100 rounded-[1.5rem] font-bold flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95 cursor-pointer">
              Explore Departments
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </Link>
        </div>

        {/* Hero Banner Mockup Section */}
        <div className="mt-20 relative px-4 animate-in fade-in zoom-in duration-1000">
          <div className="relative mx-auto shadow-2xl border-4 border-white">
            <div className="overflow-hidden aspect-video border border-gray-100 shadow-inner group">
              {/* Banner Image */}
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="EduSelf Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay on Image for Polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating Floating Stats Card */}
          <div className="absolute -bottom-8 -right-2 md:right-12 lg:right-20 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <BookOpen size={24} strokeWidth={2} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none mb-1">Live Library</p>
                <p className="text-lg font-black text-gray-800">20+ Departments</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;