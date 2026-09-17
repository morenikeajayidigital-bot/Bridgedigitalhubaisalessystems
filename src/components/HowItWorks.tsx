import React, { useState } from 'react';
import { motion } from 'motion/react';

interface DayDetail {
  dayNumber: number;
  badge?: string;
  label: string;
  leadBold: string;
  text: string;
}

const daysData: DayDetail[] = [
  {
    dayNumber: 1,
    badge: 'Live Session',
    label: 'Day 1, live',
    leadBold: 'Day 1, live:',
    text: 'Platform access, orientation, and why this training only works if you follow through.',
  },
  {
    dayNumber: 2,
    label: 'Day 2',
    leadBold: 'Day 2:',
    text: "Context engineering, meaning gathering the details of your own business so the AI understands what you actually do. This builds your customer avatar, the profile of exactly who you're selling to. Sales copywriting fundamentals follow, built directly on that avatar.",
  },
  {
    dayNumber: 3,
    label: 'Day 3',
    leadBold: 'Day 3:',
    text: "Writing sales emails that get read. WhatsApp follow up messages that don't feel like begging. Content for your business and your offers.",
  },
  {
    dayNumber: 4,
    label: 'Day 4',
    leadBold: 'Day 4:',
    text: 'Building your full sales funnel. Setting up payment collection so you can get paid from anywhere, by anyone who wants to buy. Creating product mockups and descriptions. Automating your follow up so leads stop slipping through. Setting up a system to bring past buyers back for a second and third purchase.',
  },
];

export const HowItWorks: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <section className="bg-[#E8DFCB] py-20 sm:py-28 border-b border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0A0A0A] font-medium tracking-tight">
            How it works
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#0A0A0A]/90 font-sans leading-relaxed">
            <p className="font-medium text-[#0A0A0A]">
              The training runs over four days, Thursday to Sunday, October 22 to 25, 2026.
            </p>
            <p>
              Day one is a live session on Zoom or Google Meet. This is where you get access to everything and understand why the next three days matter. There is no replay for this session, so it needs to be attended live.
            </p>
            <p>
              Days two to four are pre-recorded, step by step video lessons, walking you through building your own system piece by piece.
            </p>
          </div>
        </div>

        {/* Day navigation tabs (Active tab in #DC143C) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-[#0A0A0A]/15 pb-4">
          <button
            type="button"
            onClick={() => setSelectedDay(null)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              selectedDay === null
                ? 'bg-[#DC143C] text-white'
                : 'bg-white text-[#0A0A0A] hover:bg-white/80 border border-[#0A0A0A]/15'
            }`}
          >
            All four days
          </button>
          {daysData.map((day) => {
            const isActive = selectedDay === day.dayNumber;
            return (
              <button
                key={day.dayNumber}
                type="button"
                onClick={() => setSelectedDay(day.dayNumber)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#DC143C] text-white'
                    : 'bg-white text-[#0A0A0A] hover:bg-white/80 border border-[#0A0A0A]/15'
                }`}
              >
                {day.label}
              </button>
            );
          })}
        </div>

        {/* Cards displaying the curriculum in pure white #FFFFFF */}
        <div className="space-y-6">
          {daysData
            .filter((day) => selectedDay === null || selectedDay === day.dayNumber)
            .map((day) => (
              <motion.div
                key={day.dayNumber}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FFFFFF] border border-[#0A0A0A]/10 rounded-lg p-6 sm:p-8 space-y-3 relative shadow-xs"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-serif text-xl sm:text-2xl text-[#0A0A0A] font-semibold">
                    {day.leadBold}
                  </span>
                  {day.badge && (
                    <span className="bg-[#DC143C] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {day.badge}
                    </span>
                  )}
                </div>
                <p className="text-base sm:text-lg text-[#0A0A0A]/90 leading-relaxed font-sans">
                  {day.text}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
