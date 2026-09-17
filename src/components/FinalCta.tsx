import React from 'react';
import { motion } from 'motion/react';

interface FinalCtaProps {
  onJoinClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onJoinClick }) => {
  return (
    <section className="bg-[#E8DFCB] py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-8 sm:p-12 space-y-8 shadow-xs"
        >
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-[#0A0A0A] font-serif leading-relaxed">
              You already know how this goes if nothing changes. Someone gets interested, the conversation goes quiet, and you tell yourself you'll follow up later.
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-[#0A0A0A] font-semibold leading-snug">
              This training exists so later never has to happen again.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onJoinClick}
              className="w-full sm:w-auto bg-[#DC143C] text-white text-base sm:text-lg font-semibold px-8 py-4 rounded-md hover:opacity-90 active:opacity-95 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC143C] cursor-pointer shadow-xs text-center"
            >
              Join the AI Sales System, 18,000 naira
            </button>
          </div>

          <div className="pt-6 border-t border-[#0A0A0A]/10">
            <p className="text-sm sm:text-base text-[#0A0A0A]/80 font-medium leading-relaxed">
              As soon as you pay, you're added directly to the closed WhatsApp group. From there, you'll get everything you need before the live session on October 22.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
