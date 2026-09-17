import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WHATSAPP_PHONE = '+2348160475818';
export const WHATSAPP_RAW_NUMBER = '2348160475818';
export const WHATSAPP_MESSAGE = 'Hi, I would like to know more about the AI sales systems, can I get the details.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const OFFICIAL_EMAIL = 'Bridgedigitalhub@gmail.com';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside
      aria-label="Direct WhatsApp Inquiry"
      className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Talk to Bridge Digital Hub on WhatsApp"
        className="group flex items-center gap-3 bg-[#FFFFFF] text-[#0A0A0A] border border-[#0A0A0A]/15 pl-4 pr-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC143C]"
      >
        <div className="w-8 h-8 rounded-full bg-[#0A0A0A] text-[#FFFFFF] flex items-center justify-center shrink-0 group-hover:bg-[#DC143C] transition-colors">
          <MessageCircle className="w-4 h-4 stroke-[2.2]" />
        </div>
        <div className="text-left leading-tight">
          <div className="text-xs text-[#0A0A0A]/70 font-medium">Have questions about the system?</div>
          <div className="text-sm font-semibold text-[#0A0A0A] group-hover:text-[#DC143C] transition-colors">
            Talk to Bridge Digital Hub
          </div>
        </div>
      </a>
    </aside>
  );
};
