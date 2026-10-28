import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Phone,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: {
    label: string;
    url?: string;
    route?: string;
    isExternal?: boolean;
    isWhatsApp?: boolean;
  }[];
}

const initialMessages: ChatMessage[] = [
  {
    id: 'msg-welcome',
    sender: 'bot',
    text: 'Hello! Welcome to MAXDAX Smart Living. I am your smart automation assistant. How can I help you today? You can ask about our Automated Gates, 4K CCTV, Video Intercoms, Consultation Booking, Support, or Career Opportunities. (മലയാളത്തിലും ചോദിക്കാം!)',
    timestamp: 'Just now',
    actions: [
      { label: '🚪 Gate Automation', route: '/solutions/gate-automation' },
      { label: '📹 4K CCTV Surveillance', route: '/solutions/cctv-surveillance' },
      { label: '📋 Book Consultation', route: '/contact' },
      { label: '🛠️ Register Complaint', route: '/service-support' },
      { label: '💼 Careers at MAXDAX', route: '/careers' }
    ]
  }
];

export const MaxdaxChatbot: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 700);
  };

  const generateBotResponse = (query: string): ChatMessage => {
    const q = query.toLowerCase();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Gate Automation queries (English & Malayalam)
    if (q.includes('gate') || q.includes('മോട്ടോർ') || q.includes('ഗേറ്റ്') || q.includes('sliding') || q.includes('swing')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'MAXDAX installs authentic Italian gate automation motors (BFT and DEA System) for sliding and swing driveway gates. Features include obstacle detection photocells, 24V DC battery backup for monsoons, and Video Door Phone integration.\n\nWould you like to test our interactive gate simulation or request a quote for your gate dimensions?',
        timestamp: time,
        actions: [
          { label: '🕹️ Test Gate Simulation', route: '/experience-centre' },
          { label: '📄 Gate Automation Details', route: '/solutions/gate-automation' },
          { label: '💬 Inquire on WhatsApp', isWhatsApp: true }
        ]
      };
    }

    // Careers / Jobs (English & Malayalam)
    if (q.includes('career') || q.includes('job') || q.includes('vacancy') || q.includes('ജോലി') || q.includes('കരിയർ') || q.includes('hiring') || q.includes('recruitment')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'MAXDAX PRIVATE LIMITED is currently hiring in Kerala! Open positions include Smart Home Automation Engineers, Gate & CCTV Field Technicians, and Sales Executives.\n\nYou can apply directly via our Careers portal or fill out the official Google Recruitment Form:',
        timestamp: time,
        actions: [
          { label: '💼 View Careers Page', route: '/careers' },
          { label: '📝 Open Google Job Application Form', url: 'https://forms.gle/V3rtHUrXjShF51Ju6', isExternal: true },
          { label: '📧 Email HR: hr@maxdax.in', url: 'mailto:hr@maxdax.in', isExternal: true }
        ]
      };
    }

    // Support / Complaints (English & Malayalam)
    if (q.includes('support') || q.includes('complaint') || q.includes('service') || q.includes('ticket') || q.includes('സപ്പോർട്ട്') || q.includes('കംപ്ലയിന്റ്') || q.includes('തകരാർ') || q.includes('repair')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Need assistance or have a service complaint? Our technical support desk is based in Kalamassery, Ernakulam. You can submit our official Complaint Registration Form or register a priority service ticket directly:',
        timestamp: time,
        actions: [
          { label: '📋 Open Complaint Registration Form (MWD)', url: 'https://forms.gle/G6an7JSj5WSf17mcA', isExternal: true },
          { label: '🎫 Register Service Ticket on Site', route: '/service-support' },
          { label: '📞 Call Service Desk: +91 9061196096', url: 'tel:+919061196096', isExternal: true }
        ]
      };
    }

    // CCTV & Surveillance
    if (q.includes('cctv') || q.includes('camera') || q.includes('security') || q.includes('സിസിടിവി') || q.includes('ക്യാമറ')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'We engineer true 4K UHD perimeter surveillance with ColorVu full-color night vision and AI AcuSense human/vehicle classification to eliminate false alarms. Video streams are encrypted and stored on local NVRs with remote mobile monitoring.',
        timestamp: time,
        actions: [
          { label: '📹 CCTV Specifications', route: '/solutions/cctv-surveillance' },
          { label: '👁️ Test CCTV Demo', route: '/experience-centre' },
          { label: '📋 Book Site Survey', route: '/contact' }
        ]
      };
    }

    // Video Door Phone
    if (q.includes('vdp') || q.includes('video door') || q.includes('intercom') || q.includes('ബെൽ') || q.includes('ഡൂർ ഫോൺ')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Our Video Door Phone systems feature 1080p wide-angle outdoor stations and 7" or 10" luxury touchscreens. When a visitor rings, you can see and speak to them on your phone anywhere in the world, and trigger a one-touch gate release.',
        timestamp: time,
        actions: [
          { label: '📱 Video Door Phone Page', route: '/solutions/video-door-phone' },
          { label: '🕹️ Test VDP Call Demo', route: '/experience-centre' }
        ]
      };
    }

    // Irrigation / Garden
    if (q.includes('irrigation') || q.includes('garden') || q.includes('water') || q.includes('നനയ്ക്കാൻ') || q.includes('തോട്ടം')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Our Smart Irrigation solutions feature multi-zone pop-up sprinklers, drip lines, and automatic rain forecasting delays that pause watering during Kerala monsoon downpours.',
        timestamp: time,
        actions: [
          { label: '🌱 Smart Irrigation Page', route: '/solutions/smart-irrigation' },
          { label: '💧 Test Irrigation Simulator', route: '/experience-centre' }
        ]
      };
    }

    // Pricing / Cost / Quote
    if (q.includes('price') || q.includes('cost') || q.includes('quote') || q.includes('rate') || q.includes('വില') || q.includes('ചിലവ്') || q.includes('ബഡ്ജറ്റ്')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Smart home and gate automation pricing depends on your property layout, gate weight/length, and selected subsystems. We offer free architectural plan review and site surveys in Kerala to provide an exact itemized engineering quotation.',
        timestamp: time,
        actions: [
          { label: '📋 Request Technical Quote', route: '/contact' },
          { label: '💬 Chat with Estimator on WhatsApp', isWhatsApp: true }
        ]
      };
    }

    // Default Fallback
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: `Thank you for asking! I can assist you with all aspects of MAXDAX smart home engineering in Kerala, including Automated Gates, 4K CCTV, Intercoms, Service Tickets, and Careers. Would you like to speak directly with an engineer or explore our solutions?`,
      timestamp: time,
      actions: [
        { label: 'Explore All 26 Solutions', route: '/solutions' },
        { label: 'Book Site Consultation', route: '/contact' },
        { label: 'Chat on WhatsApp', isWhatsApp: true }
      ]
    };
  };

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[410px] h-[540px] max-h-[80vh] bg-brand-surface/98 backdrop-blur-2xl border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-slate-950 via-brand-surface to-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 relative">
            <Bot className="w-5 h-5" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -bottom-0.5 -right-0.5 border-2 border-slate-950"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-white">MAXDAX Assistant</h3>
              <span className="text-[9px] font-mono font-bold bg-sky-950 text-sky-400 px-1.5 py-0.2 rounded border border-sky-800">
                AI BOT
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Smart Living & Support Engine</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close Chatbot"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Message Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed shadow-md ${
                msg.sender === 'user'
                  ? 'bg-sky-600 text-white rounded-br-none'
                  : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-none'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>
            </div>

            <span className="text-[10px] font-mono text-slate-500 mt-1 px-1">
              {msg.timestamp}
            </span>

            {/* Quick Action Buttons inside message */}
            {msg.actions && msg.actions.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                {msg.actions.map((act, i) => {
                  if (act.isWhatsApp) {
                    return (
                      <a
                        key={i}
                        href="https://wa.me/919061196096"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 hover:bg-emerald-900 text-[11px] font-semibold transition-all"
                      >
                        <Phone className="w-3 h-3 text-emerald-400" />
                        <span>{act.label}</span>
                      </a>
                    );
                  }

                  if (act.isExternal && act.url) {
                    return (
                      <a
                        key={i}
                        href={act.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-800/80 text-amber-300 hover:bg-amber-900 text-[11px] font-semibold transition-all"
                      >
                        <span>{act.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    );
                  }

                  if (act.route) {
                    return (
                      <Link
                        key={i}
                        to={act.route}
                        onClick={onClose}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-[11px] font-semibold transition-all"
                      >
                        <span>{act.label}</span>
                        <ArrowRight className="w-3 h-3 text-sky-400" />
                      </Link>
                    );
                  }

                  return null;
                })}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-slate-400 bg-slate-900/60 p-2.5 rounded-xl w-max border border-slate-800">
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce"></span>
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            <span className="text-[11px] font-mono">MAXDAX Assistant thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="px-3 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {[
          'Automate my villa gate',
          '4K CCTV options',
          'Book consultation',
          'Register complaint',
          'Careers / Jobs'
        ].map(chip => (
          <button
            key={chip}
            type="button"
            onClick={() => handleSend(chip)}
            className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-semibold whitespace-nowrap transition-all"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Chat Input Bar */}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Ask anything (e.g. gate motors, careers, support)..."
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="p-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white shadow-md disabled:opacity-50 transition-all active:scale-95"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
