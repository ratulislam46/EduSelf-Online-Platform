import React from 'react';
import { Layers, Filter, Monitor, ArrowUpRight } from 'lucide-react';

const FeaturesOverviewSection = () => {
  const features = [
    {
      title: "Department-based Books",
      description: "Curated collections specifically tailored to your major. Whether it's Engineering, Arts, or Science, find exactly what your syllabus requires.",
      icon: <Layers className="text-blue-600" size={24} />,
      bgColor: "bg-blue-50",
      borderColor: "group-hover:border-blue-200"
    },
    {
      title: "Year-wise Filtering",
      description: "Don't get lost in thousands of titles. Filter your curriculum by academic year to see relevant textbooks for your current semester.",
      icon: <Filter className="text-purple-600" size={24} />,
      bgColor: "bg-purple-50",
      borderColor: "group-hover:border-purple-200"
    },
    {
      title: "Online Reading",
      description: "A powerful, built-in PDF reader with zoom, fullscreen, and navigation. Access your library from any device without downloading a thing.",
      icon: <Monitor className="text-emerald-600" size={24} />,
      bgColor: "bg-emerald-50",
      borderColor: "group-hover:border-emerald-200"
    }
  ];

  return (
    <section className="py-24">
      <div className="px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Designed for the Modern Student
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 ${feature.borderColor}`}
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                {feature.title}
                <ArrowUpRight size={16} className="text-gray-300 group-hover:text-gray-900 transition-colors" />
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-normal">
                {feature.description}
              </p>

              {/* Decorative background element */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                {React.cloneElement(feature.icon, { size: 80 })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 italic">
            And many more features like reading history, bookmarks, and night mode...
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;