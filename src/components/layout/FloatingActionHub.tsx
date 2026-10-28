import React, { useState } from 'react';
import { MessageCircle, Bot, LifeBuoy, X, ExternalLink, Ticket, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MaxdaxChatbot } from '../common/MaxdaxChatbot';

export const FloatingActionHub: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [supportMenuOpen, setSupportMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/919061196096?text=${encodeURIComponent(
    'Hello MAXDAX, I am inquiring about smart home automation, support, or career opportunities.'
  )}`;

  return (
    <>
      {/* Interactive Chatbot Modal */}
      <MaxdaxChatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      {/* Support Popover Menu */}
      {supportMenuOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-72 bg-brand-surface/98 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>Customer Support Hub</span>
            </span>
            <button
              type="button"
              onClick={() => setSupportMenuOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {/* Google Complaint Form Link */}
            <a
              href="https://forms.gle/G6an7JSj5WSf17mcA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-amber-950/70 border border-amber-800/80 text-amber-200 hover:bg-amber-900 transition-all font-semibold"
            >
              <div className="flex items-center gap-2">
                <Ticket className="w-4 h-4 text-amber-400" />
                <span>Complaint Form (MWD)</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Service Support Page */}
            <Link
              to="/service-support"
              onClick={() => setSupportMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-slate-700 transition-all"
            >
              <span>On-Site Ticket Portal</span>
              <span className="text-[10px] font-mono text-sky-400">OPEN</span>
            </Link>

            {/* Direct Phone Support */}
            <a
              href="tel:+919061196096"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-slate-700 transition-all"
            >
              <span>Call Service Desk</span>
              <span className="text-[10px] font-mono text-emerald-400">+91 9061196096</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Corner Dock */}
      <aside aria-label="Corner Actions" className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5">
        {/* Support Shortcut Button */}
        <button
          type="button"
          onClick={() => {
            setSupportMenuOpen(!supportMenuOpen);
            setChatOpen(false);
          }}
          className={`flex items-center gap-1.5 px-3.5 py-3 rounded-full text-xs font-bold border shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            supportMenuOpen
              ? 'bg-amber-500 border-amber-400 text-slate-950'
              : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700 text-amber-300'
          }`}
          title="Customer Support & Complaints"
          aria-label="Open Support Menu"
        >
          <LifeBuoy className="w-4 h-4" />
          <span className="hidden md:inline">Support</span>
        </button>

        {/* AI Chatbot Launcher Button */}
        <button
          type="button"
          onClick={() => {
            setChatOpen(!chatOpen);
            setSupportMenuOpen(false);
          }}
          className={`flex items-center gap-2 px-4 py-3 rounded-full text-xs font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            chatOpen
              ? 'bg-sky-500 text-slate-950 ring-4 ring-sky-500/30 font-black'
              : 'bg-sky-600 hover:bg-sky-500 text-white'
          }`}
          aria-label="Open MAXDAX AI Assistant"
        >
          <Bot className="w-5 h-5" />
          <span className="hidden sm:inline">AI Assistant</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
        </button>

        {/* WhatsApp Direct Connect Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with MAXDAX on WhatsApp"
          className="flex items-center justify-center w-12 h-12 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
          title="WhatsApp Us"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </aside>
    </>
  );
};
