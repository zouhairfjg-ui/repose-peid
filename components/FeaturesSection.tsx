
import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const FeaturesSection: React.FC = () => {
    const features = [
        { name: "Matériau", description: "Bois de bouleau massif, finition naturelle et douce au toucher." },
        { name: "Inclinaison", description: "Angle ergonomique de 15° scientifiquement prouvé pour un soutien optimal." },
        { name: "Surface", description: "Revêtement antidérapant discret pour une stabilité parfaite de vos pieds." },
        { name: "Dimensions", description: "45cm x 30cm x 11cm - Parfait pour tous les bureaux et toutes les morphologies." },
    ];

    return (
        <div className="bg-white py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                    <div>
                        <div className="lg:text-left">
                            <h2 className="text-base font-semibold text-brand-brown-600 tracking-wide uppercase">Spécifications</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                L'ingénierie au service de votre confort
                            </p>
                        </div>

                        <div className="mt-12">
                            <dl className="space-y-10">
                                {features.map((feature) => (
                                    <div 
                                        key={feature.name} 
                                        className={`relative transition-all duration-300 ease-in-out ${
                                            feature.name === "Surface" 
                                            ? 'p-3 -m-3 rounded-lg hover:bg-brand-brown-50 hover:shadow-inner cursor-help' 
                                            : 'hover:scale-105'
                                        }`}
                                        title={feature.name === "Surface" ? "Surface texturée pour une adhérence parfaite" : undefined}
                                    >
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-brown-600 text-white">
                                                <CheckIcon className="h-6 w-6" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 flex flex-col gap-8">
                         <img
                            className="rounded-xl shadow-xl ring-1 ring-gray-900/10"
                            src="https://res.cloudinary.com/dxstmm6mh/image/upload/v1771212036/Ergonomic_Under_Desk_Footrest_-_Foot_Stool_for_Office_Chair_and_Gaming_Chair_-_Rocking_Foot_Rest_for_Improved_Circulation_-_The_Office_Oasis_s6wob0.jpg"
                            alt="Repose-pieds en bois sous différents angles, mettant en valeur le design et la fabrication."
                         />
                         <img
                            className="rounded-xl shadow-xl ring-1 ring-gray-900/10"
                            src="https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197170/Under_desk_foot_rest_mlvbip.jpg"
                            alt="Le repose-pieds en utilisation sous un bureau, améliorant la posture."
                         />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
