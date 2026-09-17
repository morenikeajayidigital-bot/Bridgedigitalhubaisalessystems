import React from 'react';
import { motion } from 'motion/react';

const includedList = [
  {
    title: 'The training:',
    description: 'Four days, one live session plus three days of guided video lessons.',
  },
  {
    title: 'Bonus:',
    description:
      "One month of direct mentorship access with me, included at no extra cost. During this month, you're expected to take at least one real action toward your first result. This isn't a passive bonus, it's meant to be used.",
  },
  {
    title: 'Access:',
    description:
      "Prerecorded videos stay available to you for one month. The WhatsApp support group runs for one month as well. After that month, if you're not already in ongoing mentorship, you can renew WhatsApp access for eighteen thousand naira.",
  },
  {
    title: 'Tools:',
    description:
      'The free plan of any AI tool used in the training is enough to complete everything. No paid software is required.',
  },
];

export const WhatsIncluded: React.FC = () => {
  return (
    <section className="bg-[#E8DFCB] py-20 sm:py-28 border-b border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <h2 className="font-serif text-3xl sm:text-5xl text-[#0A0A0A] font-medium tracking-tight">
          What's included
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {includedList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-6 sm:p-8 space-y-3 shadow-xs"
            >
              <h3 className="font-serif text-xl sm:text-2xl text-[#0A0A0A] font-semibold">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-[#0A0A0A]/90 font-sans leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
