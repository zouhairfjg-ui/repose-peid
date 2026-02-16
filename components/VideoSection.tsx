
import React from 'react';

const VideoSection: React.FC = () => {
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                        Le confort en pleine action
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600">
                        Découvrez en moins d'une minute comment ZenStep transforme votre posture et réintroduit le bien-être dans votre journée de travail.
                    </p>
                </div>

                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
                        <video
                            className="w-full h-auto"
                            src="https://res.cloudinary.com/dxstmm6mh/video/upload/v1689262103/production_id_4763870_1080p_hevc.mp4"
                            controls
                            poster="https://res.cloudinary.com/dxstmm6mh/image/upload/v1771197170/Under_desk_foot_rest_mlvbip.jpg"
                            preload="metadata"
                            aria-label="Vidéo de démonstration du repose-pieds ZenStep"
                        >
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </div>
                     <p className="mt-6 text-base text-center text-slate-500 italic">
                        Voix off : "Fini les tensions. Retrouvez une posture naturelle et une concentration optimale. ZenStep, votre premier pas vers un travail sans douleur."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
