
import React from 'react';

const CirculationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const SpineIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
);

const ZenIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0 1.172 1.953 1.172 5.119 0 7.072z" />
    </svg>
);

const DurabilityIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);


const BenefitsSection: React.FC = () => {
    const benefits = [
        {
            name: "Circulation Sanguine Réactivée",
            description: "Fini les jambes engourdies. L'angle parfait favorise un retour veineux optimal pour des jambes légères, même après 8h de travail.",
            icon: CirculationIcon,
        },
        {
            name: "Alignement Naturel du Dos",
            description: "En corrigeant la position de vos jambes, il redresse instantanément votre bassin et votre colonne. Dites adieu à la posture avachie.",
            icon: SpineIcon,
        },
        {
            name: "Une Touche 'Zen' dans votre Espace",
            description: "Son design minimaliste en bois clair s'intègre harmonieusement à votre bureau. L'alliance parfaite de l'esthétique et de la fonction.",
            icon: ZenIcon,
        },
        {
            name: "Conçu pour Durer, Naturellement",
            description: "Fabriqué à partir de bois massif, il est robuste, stable et vous accompagnera des années. Un investissement durable pour votre santé.",
            icon: DurabilityIcon,
        },
    ];

    return (
        <section className="bg-brand-brown-50 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-brand-brown-600 tracking-wide uppercase">Bienfaits</h2>
                    <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                        Plus qu'un repose-pieds, une révolution pour votre journée.
                    </p>
                </div>
                <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit) => (
                        <div key={benefit.name} className="text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-brand-brown-600 mx-auto">
                                <benefit.icon />
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-slate-900">{benefit.name}</h3>
                            <p className="mt-2 text-base text-slate-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
