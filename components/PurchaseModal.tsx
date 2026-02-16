
import React, { useState, useEffect } from 'react';

// IMPORTANT : Collez ici l'URL de l'application web que vous avez copiée depuis Google Apps Script.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyc9TVSBk6T_OPMnCwPwECpkN8Wmc8gKBymLOQ7yPhqa4ROSWtJhu7-aH6oXj88iszOEw/exec'; 

interface PurchaseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState('');

    useEffect(() => {
        const fields = [fullName, email, phone, address];
        const filledFields = fields.filter(field => field.trim() !== '').length;
        const newProgress = Math.round((filledFields / fields.length) * 100);
        setProgress(newProgress);
    }, [fullName, email, phone, address]);

     useEffect(() => {
        if (!isOpen) {
            // Reset form when modal closes, with a delay for animations
            setTimeout(() => {
                setFullName('');
                setEmail('');
                setPhone('');
                setAddress('');
                setAgreedToTerms(false);
                setIsSubmitted(false);
                setIsSubmitting(false);
                setSubmissionError('');
            }, 300);
        }
    }, [isOpen]);


    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (progress < 100 || isSubmitting || !agreedToTerms) return;

        setIsSubmitting(true);
        setSubmissionError('');

        try {
            // --- Méthode de soumission robuste via un formulaire caché ---
            // Cette technique contourne les problèmes de CORS que 'fetch' peut rencontrer
            // avec Google Apps Script. Elle simule une soumission de formulaire
            // traditionnelle, ce qui est très fiable pour que la requête atteigne le serveur.

            // 1. Créer un iframe caché pour que la page ne se recharge pas
            const iframe = document.createElement('iframe');
            const iframeId = `form-submit-iframe-${Date.now()}`;
            iframe.name = iframeId;
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            // 2. Créer un formulaire caché
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = SCRIPT_URL;
            form.target = iframe.name; // Soumettre dans l'iframe caché

            // 3. Ajouter les champs de données au formulaire
            const fields = { fullName, email, phone, address };
            for (const key in fields) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = fields[key as keyof typeof fields];
                form.appendChild(input);
            }
            document.body.appendChild(form);

            // 4. Soumettre le formulaire
            form.submit();

            // 5. Nettoyer après la soumission
            setTimeout(() => {
                if (document.body.contains(form)) {
                    document.body.removeChild(form);
                }
                if (document.body.contains(iframe)) {
                    document.body.removeChild(iframe);
                }
            }, 3000);

            // 6. Supposer le succès et mettre à jour l'UI
            // Cette méthode ne permet pas de lire la réponse du serveur,
            // mais elle est la plus susceptible de fonctionner.
            setIsSubmitted(true);
            setTimeout(() => {
                onClose();
            }, 4000);

        } catch (error) {
            console.error("Erreur lors de la création du formulaire de soumission :", error);
            setSubmissionError("Une erreur inattendue est survenue. Veuillez réessayer.");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 w-full max-w-lg relative max-h-[95vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                 <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Fermer la fenêtre de commande"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {isSubmitted ? (
                    <div className="text-center py-8" role="status" aria-live="polite">
                        <svg className="mx-auto h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 id="modal-title" className="text-2xl font-bold text-gray-900 mt-4">Merci pour votre commande !</h2>
                        <p className="text-gray-600 mt-2">Vous recevrez une confirmation par e-mail sous peu.</p>
                        <img 
                            src="https://res.cloudinary.com/dxstmm6mh/image/upload/c_thumb,w_128,h_128,g_auto,q_auto,f_auto/v1771197170/Under_desk_foot_rest_mlvbip.jpg"
                            alt="Repose-pieds ZenStep commandé" 
                            className="mx-auto my-6 rounded-lg shadow-md contrast-125 brightness-105 saturate-110"
                        />
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="mt-6 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-brown-600 hover:bg-brand-brown-700 transition-transform duration-300 hover:scale-105"
                        >
                            Merci !
                        </button>
                        <p className="mt-4 text-sm text-gray-500">Cette fenêtre se fermera automatiquement.</p>
                    </div>
                ) : (
                    <>
                        <h2 id="modal-title" className="text-2xl font-bold text-gray-900 mb-2">Confirmez votre commande</h2>
                        <p className="text-gray-600 mb-6">Vous êtes sur le point d'adopter le confort. Remplissez simplement vos informations ci-dessous.</p>
                        
                        <div className="mb-6">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Progression</span>
                                <span className="text-sm font-medium text-brand-brown-700" aria-live="polite">{progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                    className="bg-brand-brown-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="flex items-center bg-brand-brown-50 p-4 rounded-lg mb-6">
                            <img src="https://res.cloudinary.com/dxstmm6mh/image/upload/c_thumb,w_80,h_80,g_auto,q_auto,f_auto/v1771197170/Under_desk_foot_rest_mlvbip.jpg" alt="Repose-pieds ZenStep" className="w-20 h-20 rounded-md object-cover mr-4" />
                            <div>
                                <h3 className="font-bold text-gray-800">Repose-Pieds Ergonomique ZenStep</h3>
                                <p className="text-brand-brown-700 font-semibold text-lg">279 MAD</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nom complet</label>
                                    <input type="text" id="fullName" name="fullName" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-brown-500 focus:border-brand-brown-500 sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
                                    <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-brown-500 focus:border-brand-brown-500 sm:text-sm" />
                                </div>
                                 <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
                                    <input type="tel" id="phone" name="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-brown-500 focus:border-brand-brown-500 sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse de livraison</label>
                                    <textarea id="address" name="address" rows={3} required value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-brown-500 focus:border-brand-brown-500 sm:text-sm"></textarea>
                                </div>
                            </div>
                            {submissionError && <p className="mt-4 text-sm text-red-600 text-center">{submissionError}</p>}
                            
                            <div className="mt-4 flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        checked={agreedToTerms}
                                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                                        className="focus:ring-brand-brown-500 h-4 w-4 text-brand-brown-600 border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-medium text-gray-700">
                                        J'ai lu et j'accepte les <a href="#" className="underline text-brand-brown-600 hover:text-brand-brown-700">conditions générales de vente</a>.
                                    </label>
                                </div>
                            </div>

                             <p id="form-helper-text" className="sr-only">Veuillez remplir tous les champs et accepter les conditions pour activer ce bouton.</p>
                            <button 
                                type="submit" 
                                className="mt-6 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-brown-600 hover:bg-brand-brown-700 transition-transform duration-300 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed" 
                                disabled={progress < 100 || isSubmitting || !agreedToTerms}
                                aria-describedby={progress < 100 || !agreedToTerms ? "form-helper-text" : undefined}
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Valider ma commande'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default PurchaseModal;
