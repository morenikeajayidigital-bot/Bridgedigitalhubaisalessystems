import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './WhatsAppContact';

interface StickyMobileCtaProps {
  onJoinClick: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onJoinClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 inset-x-0 z-40 bg-[#FFFFFF] border-t border-[#0A0A0A]/15 py-3 px-4 shadow-lg sm:hidden"
        >
          <div className="flex items-center justify-between gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talk to Bridge Digitals on WhatsApp"
              className="p-2.5 rounded-md border border-[#0A0A0A]/20 bg-white text-[#0A0A0A] flex items-center justify-center shrink-0 hover:bg-[#E8DFCB]/40 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <div className="min-w-0 pr-1">
              <p className="text-xs font-semibold text-[#0A0A0A] truncate">AI Sales System</p>
              <span className="inline-block text-xs font-bold text-[#DC143C]">
                18,000 naira
              </span>
            </div>

            <button
              type="button"
              onClick={onJoinClick}
              className="bg-[#DC143C] text-white text-xs font-semibold px-4 py-2.5 rounded-md hover:opacity-90 active:opacity-95 transition-opacity cursor-pointer focus-visible:outline-2 focus-visible:outline-[#DC143C] shrink-0"
            >
              Join the training
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
