import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './WhatsAppContact';

interface NavigationProps {
  onJoinClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onJoinClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#E8DFCB]/90 backdrop-blur-md border-b border-[#0A0A0A]/10">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#0A0A0A]/15 bg-white shrink-0 shadow-xs flex items-center justify-center p-0.5 transform -rotate-1 hover:rotate-0 transition-transform">
            <img
              src="/images/bridge_digital_hub_emblem.png"
              alt="Bridge Digital Hub Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl tracking-tight text-[#0A0A0A] font-semibold block leading-tight">
              Bridge Digital Hub
            </span>
            <span className="text-[10px] tracking-wider text-[#0A0A0A]/70 uppercase font-medium hidden sm:block">
              Connect • Grow • Innovate
            </span>
          </div>
          <span className="hidden lg:inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-[#DC143C] text-white rounded-full ml-1">
            October 22 to 25, 2026
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Talk to Bridge Digitals on WhatsApp"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold bg-white text-[#0A0A0A] border border-[#0A0A0A]/15 rounded-md hover:bg-white/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#DC143C]"
          >
            <MessageCircle className="w-4 h-4 text-[#0A0A0A]" />
            <span>Talk to Bridge Digitals</span>
          </a>

          <button
            type="button"
            onClick={onJoinClick}
            className="bg-[#DC143C] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:opacity-90 active:opacity-95 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC143C] cursor-pointer shadow-xs whitespace-nowrap"
          >
            Join the training
          </button>
        </div>
      </div>
    </header>
  );
};
