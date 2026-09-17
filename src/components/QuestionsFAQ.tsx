import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    id: 'q1',
    question: 'What if I miss the live session on day one?',
    answer:
      "There's no replay for day one. If you can't attend live, this round may not be the right time to join.",
  },
  {
    id: 'q2',
    question: 'Do I need to buy any software?',
    answer: 'No. The free plan of any AI tool used in the training is enough.',
  },
  {
    id: 'q3',
    question: 'How long do I keep access to the videos?',
    answer: 'One month from the start of the training.',
  },
  {
    id: 'q4',
    question: 'What happens to the WhatsApp group after a month?',
    answer:
      "It closes unless you're continuing into mentorship. You can renew access for eighteen thousand naira if you're not yet in mentorship.",
  },
  {
    id: 'q5',
    question: 'How do I pay?',
    answer: 'Bank transfer or Paystack.',
  },
  {
    id: 'q6',
    question: 'Is this only for people who already have a business?',
    answer:
      "No. It's also for students, professionals, and anyone ready to learn a practical, sellable skill.",
  },
];

export const QuestionsFAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['q1', 'q5']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-[#E8DFCB] py-20 sm:py-28 border-b border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <h2 className="font-serif text-3xl sm:text-5xl text-[#0A0A0A] font-medium tracking-tight">
          Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC143C]"
                >
                  <span className="font-serif text-lg sm:text-xl font-semibold text-[#0A0A0A]">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 transition-transform duration-200 text-[#0A0A0A] ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-[#0A0A0A]/5 text-base sm:text-lg text-[#0A0A0A]/90 font-sans leading-relaxed">
                        <p className="pt-3">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
