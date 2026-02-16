
import React from 'react';

interface CtaSectionProps {
    onOrderClick: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onOrderClick }) => {
    return (
        <section id="cta" className="bg-white">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                <div className='lg:w-0 lg:flex-1'>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        N'attendez pas que la douleur s'installe.
                    </h2>
                    <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-500">
                        Chaque jour passé sans le bon soutien est un jour de perdu pour votre confort et votre productivité. Faites le choix du bien-être dès aujourd'hui.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                    <div className="inline-flex rounded-md shadow">
                        <button onClick={onOrderClick} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-brand-brown-600 hover:bg-brand-brown-700 transition-transform duration-300 hover:scale-105">
                            Je commande et je soulage mon dos !
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
