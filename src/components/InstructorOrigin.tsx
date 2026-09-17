import React from 'react';
import { motion } from 'motion/react';

export const InstructorOrigin: React.FC = () => {
  return (
    <section className="bg-[#E8DFCB] py-20 sm:py-28 border-b border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-8 sm:p-12 space-y-8"
        >
          <h2 className="font-serif text-2xl sm:text-4xl text-[#0A0A0A] font-medium tracking-tight leading-snug">
            I built this after living the exact problem it solves.
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-[#0A0A0A]/90 leading-relaxed font-sans">
            <p>
              I used to post products on WhatsApp and Instagram hoping for sales. People would get excited, then go quiet. Leads died, and most of the time I never even knew why.
            </p>
            <p>
              That frustration led me to this exact training. The best decision ever!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
