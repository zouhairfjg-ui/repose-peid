
import React from 'react';

const ReassuranceSection: React.FC = () => {
    return (
        <section className="bg-brand-brown-600">
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Pourquoi le bois ?</span>
                    <span className="block">Parce que votre bien-être mérite mieux que le plastique.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-brand-brown-100">
                    Contrairement aux alternatives en plastique, froides et instables, notre repose-pieds en bois offre une sensation chaleureuse et une robustesse inégalée. Le bois est un matériau vivant, durable et écologique qui ancre votre espace de travail dans la sérénité. C'est un choix conscient pour votre santé et pour la planète.
                </p>
            </div>
        </section>
    );
};

export default ReassuranceSection;
