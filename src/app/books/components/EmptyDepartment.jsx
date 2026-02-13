import { Construction, BellRing, ChevronLeft, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

const EmptyDepartment = ({ onBack }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center animate-in fade-in zoom-in duration-500">

            {/* Animated Icon Container */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />
                <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl shadow-indigo-100 border border-indigo-50">
                    <Construction size={80} className="text-indigo-600 animate-bounce" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-400 p-3 rounded-2xl shadow-lg border-4 border-white animate-wiggle">
                    <BellRing size={24} className="text-white" />
                </div>
            </div>

            {/* Text Content */}
            <div className="max-w-md">
                <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
                    খুব শীঘ্রই আসছে!
                </h2>
                <p className="text-gray-500 leading-relaxed font-medium">
                    দুঃখিত! উক্ত ডিপার্টমেন্টের সকল বছরের বইগুলো আমাদের ডাটাবেসে যোগ করার কাজ চলছে।
                    আমাদের সাথেই থাকুন, আপনার প্রয়োজনীয় রিসোর্সগুলো দ্রুতই প্রদান করা হবে।
                </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/books" className="w-full sm:w-auto">

                {/* TODO: Not woriking  */}
                    <button
                        onClick={onBack} 
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-xl shadow-gray-200 cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                        অন্য ডিপার্টমেন্ট দেখুন
                    </button>
                </Link>

                <Link href="/" className="w-full sm:w-auto">
                    <button
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-100 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-sm cursor-pointer"
                    >
                        <LayoutGrid size={20} />
                        হোমে ফিরে যান
                    </button>
                </Link>
            </div>

            {/* Bottom Status Tag */}
            <div className="mt-12 flex items-center gap-2 text-xs font-bold text-indigo-400 tracking-[0.2em] uppercase">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
                Work in Progress
            </div>
        </div>
    );
};

export default EmptyDepartment;