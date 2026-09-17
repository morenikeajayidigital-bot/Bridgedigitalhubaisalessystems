import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="bg-[#E8DFCB] pt-16 sm:pt-24 pb-20 sm:pb-28 border-b border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Target Audience Qualifier */}
          <div className="inline-block">
            <span className="inline-block bg-white text-[#0A0A0A] text-sm sm:text-base px-4 py-2 border border-[#0A0A0A]/15 font-medium leading-relaxed rounded-md">
              For freelancers, coaches, consultants, and small business owners who already have people showing interest, but keep losing them before they pay.
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] font-medium tracking-tight leading-[1.15]">
            Your leads aren't cold because you're bad at this. They're cold because nothing was catching them.
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-[#0A0A0A]/90 font-normal leading-relaxed max-w-3xl">
            Sales copy. Emails. WhatsApp follow up. A funnel that actually leads somewhere. Built by you, in four days, with AI doing the heavy lifting.
          </p>

          {/* Action Call & Qualifier */}
          <div className="pt-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onJoinClick}
                className="bg-[#DC143C] text-white text-base sm:text-lg font-semibold px-8 py-4 rounded-md hover:opacity-90 active:opacity-95 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC143C] cursor-pointer shadow-sm"
              >
                Join the training
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
