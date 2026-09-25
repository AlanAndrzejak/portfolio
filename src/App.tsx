import { useState, useEffect, useCallback } from 'react';
import { Code2, Camera, Croissant, Menu, X, Mail } from 'lucide-react';
import SoftwareDev from '@/views/SoftwareDev';
import Photography from '@/views/Photography';
import Pastry from '@/views/Pastry';
import ContactPanel from '@/components/ContactPanel';

type Section = 'software' | 'photography' | 'pastry';

const navItems: { id: Section; label: string; icon: typeof Code2 }[] = [
  { id: 'software', label: 'Software Development', icon: Code2 },
  { id: 'photography', label: 'Photography', icon: Camera },
  { id: 'pastry', label: 'Pastry', icon: Croissant },
];

export default function App() {
  const [active, setActive] = useState<Section>('software');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = useCallback(() => setContactOpen(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = contactOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [contactOpen]);

  const handleNav = (id: Section) => {
    setActive(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerBg: Record<Section, string> = {
    software: scrolled ? 'bg-[#0a0f1a]/90 border-slate-800' : 'bg-transparent border-transparent',
    photography: scrolled ? 'bg-[#fafaf9]/90 border-stone-200' : 'bg-transparent border-transparent',
    pastry: scrolled ? 'bg-[#fdf6f0]/90 border-amber-200' : 'bg-transparent border-transparent',
  };

  const headerText: Record<Section, string> = {
    software: 'text-slate-200',
    photography: 'text-stone-700',
    pastry: 'text-stone-700',
  };

  const activeColor: Record<Section, string> = {
    software: 'text-blue-400',
    photography: 'text-stone-900',
    pastry: 'text-amber-600',
  };

  const contactBtn: Record<Section, string> = {
    software: 'bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20',
    photography: 'bg-stone-900 text-white hover:bg-stone-800',
    pastry: 'bg-amber-500 text-white hover:bg-amber-400',
  };

  return (
    <div className="min-h-screen">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${headerBg[active]} ${headerText[active]}`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNav('software')}
              className={`font-semibold text-lg tracking-tight ${headerText[active]}`}
            >
              Studio<span className={activeColor[active]}>.</span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    active === id
                      ? `${activeColor[active]} ${active === 'software' ? 'bg-blue-500/10' : active === 'photography' ? 'bg-stone-200/60' : 'bg-amber-100'}`
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
              <button
                onClick={openContact}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ml-2 ${contactBtn[active]}`}
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={openContact}
                className={`p-2 rounded-lg text-sm font-medium ${contactBtn[active]}`}
                aria-label="Contact"
              >
                <Mail className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg hover:bg-black/5"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className={`md:hidden border-t ${active === 'software' ? 'border-slate-800 bg-[#0a0f1a]' : active === 'photography' ? 'border-stone-200 bg-[#fafaf9]' : 'border-amber-200 bg-[#fdf6f0]'}`}>
            <div className="px-6 py-4 space-y-1">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active === id ? activeColor[active] : 'opacity-60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {active === 'software' && <SoftwareDev onContact={openContact} />}
        {active === 'photography' && <Photography onContact={openContact} />}
        {active === 'pastry' && <Pastry onContact={openContact} />}
      </main>

      <footer className={`py-8 px-6 text-center text-sm ${
        active === 'software' ? 'bg-[#0a0f1a] text-slate-600 border-t border-slate-800'
        : active === 'photography' ? 'bg-[#fafaf9] text-stone-400 border-t border-stone-200'
        : 'bg-[#fdf6f0] text-stone-400 border-t border-amber-100'
      }`}>
        <p>Studio — Software, Photography & Pastry</p>
      </footer>

      <ContactPanel open={contactOpen} onClose={() => setContactOpen(false)} section={active} />
    </div>
  );
}
