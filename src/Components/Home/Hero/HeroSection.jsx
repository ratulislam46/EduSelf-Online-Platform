import React from 'react';
import { BookOpen, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8 animate-fade-in">
          <Sparkles size={14} className="text-indigo-600" />
          <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
            The Future of Academic Learning
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
          Unleash Knowledge with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            EduSelf Digital
          </span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
          Access thousands of curated textbooks, research papers, and department-specific 
          resources. Empowering students to read, learn, and excel anywhere.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 hover:shadow-2xl hover:shadow-indigo-200 transition-all group active:scale-95">
            Start Reading
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all active:scale-95">
            Explore Departments
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Hero Image / Mockup Placeholder */}
        <div className="mt-16 relative">
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white/50 p-2 shadow-2xl backdrop-blur-sm">
            <div className="rounded-2xl border border-gray-100 bg-red-200 overflow-hidden aspect-video flex items-center justify-center">
              {/* This represents your platform UI mockup */}
              <div className="flex flex-col items-center gap-4 text-gray-300">
                <BookOpen size={64} strokeWidth={1} />
                <span className="text-sm font-medium">Dashboard Preview</span>
              </div>
            </div>
          </div>
          
          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -right-4 md:right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <span className="text-lg font-bold">12k</span>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase">Active Readers</p>
                <p className="text-sm font-bold text-gray-900">Across 20+ Depts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;