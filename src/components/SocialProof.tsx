import React from 'react';
import { motion } from 'motion/react';

export const SocialProof: React.FC = () => {
  return (
    <section className="bg-[#E8DFCB] py-20 sm:py-28 border-b border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <h2 className="font-serif text-3xl sm:text-5xl text-[#0A0A0A] font-medium tracking-tight">
          What people are saying
        </h2>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-6 sm:p-8 space-y-4 shadow-xs"
          >
            <p className="font-serif text-xl sm:text-2xl text-[#0A0A0A] font-medium leading-relaxed">
              "Before this training, I was the person posting products and watching interest disappear with no explanation. This training is what changed that for me."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-6 sm:p-8 space-y-4 shadow-xs"
          >
            <p className="text-base sm:text-lg text-[#0A0A0A]/90 font-sans leading-relaxed">
              Other students who went through this exact AI Sales System training have said the same thing in their own words: that the barrier was never ability, it was not knowing the right tools existed. Once that gap closed, they were surprised by how much they were already capable of.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-6 sm:p-8 space-y-4 shadow-xs"
          >
            <p className="text-base sm:text-lg text-[#0A0A0A]/90 font-sans leading-relaxed">
              Separately, students of the AI Scale Up Sprint, a different training I also completed, have spoken about the teaching style itself: practical, beginner friendly, and easy to follow even with no tech background.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
