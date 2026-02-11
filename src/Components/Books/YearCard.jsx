import { BookOpen } from 'lucide-react';

const YearCard = ({ year, onClick }) => (
    <div
        onClick={onClick}
        className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-blue-500 transition-all cursor-pointer group shadow-sm text-center"
    >
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <BookOpen size={30} />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{year.label}</h3>
        <p className="text-gray-500 text-xs mt-1">Full Curriculum</p>
    </div>
);

export default YearCard;