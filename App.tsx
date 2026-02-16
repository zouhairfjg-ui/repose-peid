
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import VideoSection from './components/VideoSection';
import ReassuranceSection from './components/ReassuranceSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import PurchaseModal from './components/PurchaseModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-slate-50 text-slate-800 antialiased">
      <Header onOrderClick={handleOpenModal} />
      <main>
        <HeroSection onOrderClick={handleOpenModal} />
        <ProblemSolutionSection />
        <BenefitsSection />
        <FeaturesSection />
        <VideoSection />
        <ReassuranceSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection onOrderClick={handleOpenModal} />
      </main>
      <Footer />
      <PurchaseModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
