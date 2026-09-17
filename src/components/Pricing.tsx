import React from 'react';
import { motion } from 'motion/react';

interface PricingProps {
  onJoinClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onJoinClick }) => {
  return (
    <section id="pricing" className="bg-[#E8DFCB] py-20 sm:py-28 border-b border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="font-serif text-3xl sm:text-5xl text-[#0A0A0A] font-medium tracking-tight">
          Pricing
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-8 sm:p-12 space-y-8 shadow-xs"
        >
          {/* Notification badge */}
          <div>
            <span className="inline-block bg-[#DC143C] text-white text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full">
              Early enrollment open until October 22
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <p className="text-base sm:text-lg text-[#0A0A0A]/70 line-through">
                Regular price is thirty five thousand naira.
              </p>
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] font-serif font-bold">
              Early enrollment price is eighteen thousand naira, open until October 22.
            </p>
            <p className="text-base sm:text-lg text-[#0A0A0A]/85 font-medium">
              This is the first time this exact training is running under Bridge Digital Hub.
            </p>
          </div>

          {/* Conversion Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onJoinClick}
              className="w-full sm:w-auto bg-[#DC143C] text-white text-base sm:text-lg font-semibold px-8 py-4 rounded-md hover:opacity-90 active:opacity-95 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC143C] cursor-pointer shadow-xs text-center"
            >
              Secure your spot at 18,000
            </button>
          </div>

          {/* Guarantee & Mentor terms */}
          <div className="pt-8 border-t border-[#0A0A0A]/10 space-y-4 text-base sm:text-lg text-[#0A0A0A]/90 font-sans leading-relaxed">
            <p>
              No one can guarantee your results, and anyone who tells you otherwise isn't being honest with you. What I can guarantee is this: if you show up, do the work, and put in real effort across the four days, you get a full month of direct mentorship access to help you take your first real action. If you need more time after that month, continued mentorship is available separately at fifty thousand naira, because I'd rather walk with you longer than let you give up early.
            </p>
            <p className="font-semibold text-[#0A0A0A]">
              This is the first cohort of this training running under Bridge Digital Hub. Enrollment closes October 22, the same day the live session happens, because you cannot join a session you missed the start of.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
