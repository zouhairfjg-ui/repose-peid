
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-100">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-base text-slate-500">
                    &copy; {new Date().getFullYear()} ZenStep. Tous droits réservés. Conçu pour votre bien-être.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
