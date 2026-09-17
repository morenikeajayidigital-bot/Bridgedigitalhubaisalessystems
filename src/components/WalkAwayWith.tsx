import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const outcomes = [
  'A customer avatar built specifically for your business',
  'Sales copy you wrote yourself, using what you learned',
  'Email and WhatsApp follow up sequences ready to send',
  'A working sales funnel from first contact to payment',
  'Payment collection set up and ready to receive money',
  'Product mockups and descriptions',
  'A follow up system that keeps working after you close your laptop',
  'A simple way to bring past customers back to buy again',
];

export const WalkAwayWith: React.FC = () => {
  return (
    <section className="bg-[#E8DFCB] py-20 sm:py-28 border-b border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0A0A0A] font-medium tracking-tight">
            What you'll walk away with
          </h2>
          <p className="text-base sm:text-lg text-[#0A0A0A]/90 font-medium">
            By the end of the four days, you will have:
          </p>
        </div>

        {/* Deliverables on pure white #FFFFFF card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-6 sm:p-10 space-y-8 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Outlined outcomes list */}
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {outcomes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3.5 text-base sm:text-lg text-[#0A0A0A] leading-relaxed">
                    <span className="shrink-0 mt-1 w-5 h-5 rounded-sm border border-[#0A0A0A]/30 flex items-center justify-center text-[#0A0A0A]">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Training Mockup Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-lg overflow-hidden border border-[#0A0A0A]/10 bg-[#E8DFCB]/20 p-2 shadow-sm">
                <img
                  src="/images/course_mockup.png"
                  alt="AI Sales System training material mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
