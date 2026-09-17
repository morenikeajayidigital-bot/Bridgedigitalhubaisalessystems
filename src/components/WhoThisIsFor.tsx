import React from 'react';
import { motion } from 'motion/react';

export const WhoThisIsFor: React.FC = () => {
  return (
    <section className="bg-[#E8DFCB] py-20 sm:py-28 border-b border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who this is for */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-6 sm:p-8 space-y-4 shadow-xs"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0A0A0A] font-semibold">
              Who this is for
            </h2>
            <div className="p-3.5 bg-[#E8DFCB]/50 border border-[#0A0A0A]/15 rounded-md">
              <p className="text-sm sm:text-base font-semibold text-[#0A0A0A] leading-snug">
                For freelancers, coaches, consultants, and small business owners who already have people showing interest, but keep losing them before they pay.
              </p>
            </div>
            <p className="text-base sm:text-lg text-[#0A0A0A]/90 font-sans leading-relaxed">
              This is for you if you already have some leads or interest coming in, but lose people because follow up is inconsistent or forgotten. It's for anyone building something who needs a real sales system instead of guesswork. Students, professionals, and anyone ready to learn a practical skill are welcome here too.
            </p>
          </motion.div>

          {/* Who this is not for */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-6 sm:p-8 space-y-4 shadow-xs"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0A0A0A] font-semibold">
              Who this is not for
            </h2>
            <p className="text-base sm:text-lg text-[#0A0A0A]/90 font-sans leading-relaxed">
              This isn't for you if you have no leads or interest at all right now. This training teaches you to convert people who are already curious, not to create interest from nothing. It also isn't for you if you're not ready to actually do the work across four days. Watching without doing won't move your business forward, and that's true of any training, not just this one.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
