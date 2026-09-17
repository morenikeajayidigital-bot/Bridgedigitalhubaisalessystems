import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemVision } from './components/ProblemVision';
import { InstructorOrigin } from './components/InstructorOrigin';
import { HowItWorks } from './components/HowItWorks';
import { WalkAwayWith } from './components/WalkAwayWith';
import { WhatsIncluded } from './components/WhatsIncluded';
import { WhoThisIsFor } from './components/WhoThisIsFor';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { QuestionsFAQ } from './components/QuestionsFAQ';
import { FinalCta } from './components/FinalCta';
import { CheckoutModal } from './components/CheckoutModal';
import { StickyMobileCta } from './components/StickyMobileCta';
import { WhatsAppFloatingButton, WHATSAPP_PHONE, WHATSAPP_URL } from './components/WhatsAppContact';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#E8DFCB] text-[#0A0A0A] selection:bg-[#DC143C] selection:text-white">
      {/* Header Navigation */}
      <Navigation onJoinClick={handleOpenCheckout} />

      {/* Main Single-Page Content in exact copy order */}
      <main>
        <Hero onJoinClick={handleOpenCheckout} />
        <ProblemVision />
        <InstructorOrigin />
        <HowItWorks />
        <WalkAwayWith />
        <WhatsIncluded />
        <WhoThisIsFor />
        <SocialProof />
        <Pricing onJoinClick={handleOpenCheckout} />
        <QuestionsFAQ />
        <FinalCta onJoinClick={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <footer className="bg-[#E8DFCB] border-t border-[#0A0A0A]/10 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <p className="font-serif text-lg font-semibold text-[#0A0A0A]">
            Bridge Digital Hub
          </p>
          <p className="text-xs text-[#0A0A0A]/60">
            October 22 to 25, 2026
          </p>
          <div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp inquiry to ${WHATSAPP_PHONE}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A0A0A] bg-white border border-[#0A0A0A]/15 px-3.5 py-2 rounded-md hover:bg-white/80 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquiries: {WHATSAPP_PHONE}</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action for Desktop */}
      <WhatsAppFloatingButton />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />

      {/* Sticky Call-to-Action for Mobile Viewports */}
      <StickyMobileCta onJoinClick={handleOpenCheckout} />
    </div>
  );
}
