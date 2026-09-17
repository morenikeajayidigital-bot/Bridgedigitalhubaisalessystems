import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WHATSAPP_PHONE = '+2348160475818';
export const WHATSAPP_RAW_NUMBER = '2348160475818';
export const WHATSAPP_MESSAGE = 'Can I learn more about AI sales systems?';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with us on WhatsApp at ${WHATSAPP_PHONE}: ${WHATSAPP_MESSAGE}`}
        className="group flex items-center gap-3 bg-[#FFFFFF] text-[#0A0A0A] border border-[#0A0A0A]/15 pl-4 pr-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC143C]"
      >
        <div className="w-8 h-8 rounded-full bg-[#0A0A0A] text-[#FFFFFF] flex items-center justify-center shrink-0 group-hover:bg-[#DC143C] transition-colors">
          <MessageCircle className="w-4 h-4 stroke-[2.2]" />
        </div>
        <div className="text-left leading-tight">
          <div className="text-xs text-[#0A0A0A]/70 font-medium">Have questions? Chat on WhatsApp</div>
          <div className="text-sm font-semibold text-[#0A0A0A] font-mono tracking-tight">{WHATSAPP_PHONE}</div>
        </div>
      </a>
    </aside>
  );
};
