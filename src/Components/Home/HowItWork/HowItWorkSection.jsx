import React from 'react';
import { School, CalendarDays, BookOpenCheck, ArrowRight } from 'lucide-react';

const HowItWorkSection = () => {
    const steps = [
        {
            number: "01",
            title: "Select Department",
            description: "Choose your field of study from our comprehensive list of academic departments.",
            icon: <School className="text-white" size={24} />,
            gradient: "from-blue-600 to-indigo-600"
        },
        {
            number: "02",
            title: "Select Year",
            description: "Pick your current academic year to filter for the most relevant curriculum materials.",
            icon: <CalendarDays className="text-white" size={24} />,
            gradient: "from-indigo-600 to-purple-600"
        },
        {
            number: "03",
            title: "Start Reading",
            description: "Instantly access your books through our high-speed, integrated online PDF reader.",
            icon: <BookOpenCheck className="text-white" size={24} />,
            gradient: "from-purple-600 to-pink-600"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-3">
                        Simple Process
                    </h2>
                    <p className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                        Three Steps to Excellence
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group">

                                {/* Step Icon & Number */}
                                <div className="relative mb-8">
                                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl shadow-indigo-200 group-hover:rotate-6 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center shadow-md">
                                        <span className="text-xs font-black text-gray-900">{step.number}</span>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="text-center px-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Mobile Arrow (Visible only on mobile between cards) */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden mt-8 text-gray-300">
                                        <ArrowRight size={32} className="rotate-90" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Callout */}
                <div className="mt-20 flex justify-center">
                    <div className="inline-flex items-center gap-4 p-1 pr-6 bg-white rounded-full shadow-sm border border-gray-100">
                        <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                            NEW
                        </span>
                        <p className="text-sm text-gray-600 font-medium">
                            No registration required to browse the catalog.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorkSection;