
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const testimonials = [
    {
        quote: "J'avais constamment mal au dos en fin de journée. Depuis que j'utilise ZenStep, la différence est incroyable. Je suis beaucoup plus concentrée et moins fatiguée.",
        name: "Sophie L.",
        role: "Graphiste Freelance",
        rating: 5,
    },
    {
        quote: "Un produit simple, mais révolutionnaire pour mon quotidien en télétravail. Le design en bois est magnifique et la sensation de confort est immédiate. Je ne pourrais plus m'en passer.",
        name: "Julien M.",
        role: "Développeur Web",
        rating: 5,
    },
    {
        quote: "Enfin une solution élégante contre les jambes lourdes ! Mon ZenStep s'intègre parfaitement à mon bureau et m'apporte un réel soulagement tout au long de la journée.",
        name: "Claire D.",
        role: "Chargée de clientèle",
        rating: 5,
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="bg-brand-brown-50 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-brand-brown-600 tracking-wide uppercase">Témoignages</h2>
                    <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                        Ils ont adopté ZenStep. Ils racontent.
                    </p>
                </div>
                <div className="mt-16 grid gap-10 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="bg-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col">
                            <div className="flex items-center text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5" />
                                ))}
                            </div>
                            <blockquote className="mt-4 text-lg text-slate-700 flex-grow">
                                <p>“{testimonial.quote}”</p>
                            </blockquote>
                            <footer className="mt-6 border-t border-slate-200 pt-6">
                                <p className="text-base font-bold text-slate-900">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">{testimonial.role}</p>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
