import { X, Mail, Phone } from 'lucide-react';
import { Instagram, Github, Linkedin } from '@/components/BrandIcons';

type Section = 'software' | 'photography' | 'pastry';

interface ContactPanelProps {
  open: boolean;
  onClose: () => void;
  section: Section;
}

const theme: Record<Section, { bg: string; text: string; sub: string; accent: string; border: string; input: string; btn: string }> = {
  software: {
    bg: 'bg-[#0a0f1a]',
    text: 'text-white',
    sub: 'text-slate-400',
    accent: 'text-blue-400',
    border: 'border-slate-800',
    input: 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500',
    btn: 'bg-blue-500 hover:bg-blue-400 text-white',
  },
  photography: {
    bg: 'bg-[#fafaf9]',
    text: 'text-stone-900',
    sub: 'text-stone-500',
    accent: 'text-stone-900',
    border: 'border-stone-200',
    input: 'bg-white border-stone-300 text-stone-900 placeholder-stone-400 focus:border-stone-900',
    btn: 'bg-stone-900 hover:bg-stone-800 text-white',
  },
  pastry: {
    bg: 'bg-[#fdf6f0]',
    text: 'text-stone-800',
    sub: 'text-stone-500',
    accent: 'text-amber-600',
    border: 'border-amber-200',
    input: 'bg-white border-amber-200 text-stone-800 placeholder-stone-400 focus:border-amber-500',
    btn: 'bg-amber-500 hover:bg-amber-400 text-white',
  },
};

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export default function ContactPanel({ open, onClose, section }: ContactPanelProps) {
  const t = theme[section];

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-[420px] ${t.bg} ${t.text} border-l ${t.border} transition-transform duration-300 ease-out flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className={`flex items-center justify-between px-6 py-5 border-b ${t.border}`}>
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg hover:bg-white/5 transition-colors ${t.sub}`}
            aria-label="Close contact panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
          <div>
            <p className={`text-base leading-relaxed ${t.sub}`}>
              Whether it's a software project, a photo shoot, or a cheesecake order —
              I'd love to hear from you. Send a message and I'll get back to you soon.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:hello@studio.com" className={`flex items-center gap-3 ${t.sub} hover:${t.accent} transition-colors`}>
              <Mail className="w-5 h-5" />
              hello@studio.com
            </a>
            <a href="tel:+10000000000" className={`flex items-center gap-3 ${t.sub} hover:${t.accent} transition-colors`}>
              <Phone className="w-5 h-5" />
              +1 (000) 000-0000
            </a>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${t.sub}`}>Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className={`w-full px-4 py-2.5 rounded-lg border ${t.input} outline-hidden transition-colors`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${t.sub}`}>Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-2.5 rounded-lg border ${t.input} outline-hidden transition-colors`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${t.sub}`}>Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell me what you're looking for..."
                className={`w-full px-4 py-2.5 rounded-lg border ${t.input} outline-hidden transition-colors resize-none`}
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-medium transition-colors ${t.btn}`}
            >
              Send message
            </button>
          </form>

          <div>
            <p className={`text-sm font-medium mb-3 ${t.sub}`}>Follow</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-10 h-10 rounded-lg border ${t.border} flex items-center justify-center ${t.sub} hover:${t.accent} hover:border-current transition-colors`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
