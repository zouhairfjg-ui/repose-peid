
import React from 'react';

const FaqSection: React.FC = () => {
    const faqs = [
        {
            question: "Est-ce que je peux l'utiliser pieds nus ?",
            answer: "Absolument ! La finition du bois est ultra-douce et agréable au contact de la peau. C'est même recommandé pour un effet relaxant et une meilleure connexion."
        },
        {
            question: "Convient-il à toutes les tailles ?",
            answer: "Oui, sa conception universelle et son angle sont étudiés pour s'adapter confortablement à la grande majorité des morphologies, que vous soyez grand ou petit."
        },
        {
            question: "Est-il lourd ou difficile à déplacer ?",
            answer: "Pas du tout. Il est suffisamment solide pour être parfaitement stable, mais assez léger pour être déplacé facilement d'un simple geste du pied si besoin."
        }
    ];
    return (
        <div className="bg-slate-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Vos questions, nos réponses</h2>
                    <dl className="mt-12 space-y-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                                <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
                                <dd className="mt-2 text-base text-gray-600">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
