
import React from 'react';

interface HeroSectionProps {
    onOrderClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="bg-brand-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center py-16 sm:py-20 lg:py-28">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              <span className="block">La fin des journées difficiles.</span>
              <span className="block text-brand-brown-600">Le début du confort absolu.</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-slate-600 sm:text-xl md:mt-8 lg:mx-0 lg:max-w-none">
              Découvrez le repose-pieds ergonomique en bois qui réaligne votre posture, booste votre concentration et soulage durablement vos douleurs.
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10 lg:justify-start">
              <div className="rounded-md shadow">
                <button onClick={onOrderClick} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-brown-600 hover:bg-brand-brown-700 md:py-4 md:text-lg md:px-10 transition-transform duration-300 hover:scale-105">
                  Adopter le confort maintenant
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
              <img className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 w-full" src="https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197170/Under_desk_foot_rest_mlvbip.jpg" alt="Repose-pieds ergonomique en bois en utilisation sous un bureau, améliorant la posture." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
