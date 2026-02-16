
import React from 'react';

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

interface HeaderProps {
    onOrderClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <LeafIcon />
                        <span className="text-xl font-bold text-slate-800">ZenStep</span>
                    </div>
                    <button onClick={onOrderClick} className="inline-block bg-brand-brown-600 text-white font-semibold px-4 py-2 sm:px-5 rounded-lg hover:bg-brand-brown-700 transition-colors duration-300 text-sm sm:text-base">
                        Commander
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
