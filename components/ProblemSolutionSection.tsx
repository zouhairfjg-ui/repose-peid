
import React from 'react';

const ProblemSolutionSection: React.FC = () => {
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            Cette position vous semble familière ?
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Jambes lourdes, dos qui tire, nuque raide... Rester assis des heures durant transforme votre chaise de bureau en un véritable défi pour votre corps. Ces inconforts ne sont pas une fatalité, mais le signal d'alarme d'une mauvaise posture qui épuise votre corps et votre esprit au quotidien.
                        </p>
                        <div className="mt-10">
                            <h3 className="text-2xl font-bold text-slate-900">
                                La solution simple et élégante pour une posture parfaite.
                            </h3>
                            <p className="mt-3 text-lg text-slate-600">
                                Notre repose-pieds ergonomique n'est pas un simple accessoire. C'est le partenaire de votre bien-être. Conçu en bois naturel, son inclinaison idéale surélève vos pieds pour aligner naturellement vos genoux, vos hanches et votre colonne vertébrale. Vous ressentez un soulagement immédiat et durable.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0" aria-hidden="true">
                        <img 
                            className="rounded-lg shadow-lg"
                            src="https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197205/18_43US__Footrest_Office_Desk___Office_Foot_Support___Supports_Foot_Desk___Foot_Support_Stool_-_1pc_-_Aliexpress_fkvhb2.jpg" 
                            alt="Personne utilisant le repose-pieds en bois"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolutionSection;
