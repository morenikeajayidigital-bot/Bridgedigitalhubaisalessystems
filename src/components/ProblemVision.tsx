import React from 'react';
import { motion } from 'motion/react';

export const ProblemVision: React.FC = () => {
  return (
    <section className="bg-[#E8DFCB] py-20 sm:py-28 border-b border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Contrast narrative card in pure white */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-8 sm:p-12 space-y-8"
        >
          <div className="space-y-4 text-xl sm:text-2xl text-[#0A0A0A] font-serif leading-relaxed">
            <p className="font-normal">You post. Someone replies. They seem interested.</p>
            <p className="font-semibold text-2xl sm:text-3xl text-[#0A0A0A]">Then nothing.</p>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[#0A0A0A]/90 leading-relaxed font-sans">
            <p>
              Not because they didn't want it. Because nobody followed up, and by the time you remembered, the moment had passed.
            </p>
            <p>
              You've been carrying the whole sales process in your head, with nothing holding it up when life gets busy.
            </p>
          </div>

          <div className="pt-6 border-t border-[#0A0A0A]/10 space-y-4">
            <p className="text-lg sm:text-xl text-[#0A0A0A] font-medium leading-relaxed">
              Imagine sending one message and having a full system respond behind the scenes. Copy that sounds like you. Follow up that actually happens. A path from "just looking" to "just paid," without you personally chasing every single person.
            </p>
            <p className="text-xl sm:text-2xl font-serif text-[#0A0A0A] font-semibold">
              That's what this training builds.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
