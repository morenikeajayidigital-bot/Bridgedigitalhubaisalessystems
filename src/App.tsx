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
import { WhatsAppFloatingButton, WHATSAPP_URL, OFFICIAL_EMAIL } from './components/WhatsAppContact';
import { MessageCircle, Mail } from 'lucide-react';

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
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#0A0A0A]/15 bg-white shadow-xs p-0.5 transform rotate-2 hover:rotate-0 transition-transform">
              <img
                src="/images/bridge_digital_hub_emblem.png"
                alt="Bridge Digital Hub Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="font-serif text-xl font-bold text-[#0A0A0A] tracking-tight">
              Bridge Digital Hub
            </p>
            <p className="text-xs tracking-widest text-[#0A0A0A]/70 uppercase font-semibold">
              Connect • Grow • Innovate
            </p>
          </div>
          <p className="text-xs text-[#0A0A0A]/60">
            October 22 to 25, 2026
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talk to Bridge Digitals on WhatsApp"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A0A0A] bg-white border border-[#0A0A0A]/15 px-3.5 py-2 rounded-md hover:bg-white/80 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#0A0A0A]" />
              <span>Talk to Bridge Digitals</span>
            </a>

            <a
              href={`mailto:${OFFICIAL_EMAIL}`}
              aria-label={`Official Email: ${OFFICIAL_EMAIL}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A0A0A] bg-white border border-[#0A0A0A]/15 px-3.5 py-2 rounded-md hover:bg-white/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{OFFICIAL_EMAIL}</span>
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
