import { Code2, Sparkles, Rocket, Brain, ArrowRight } from 'lucide-react';

const services = [
  { icon: Rocket, title: 'Delivery', desc: 'From first line of code to production — I handle the full lifecycle and ship software that works.' },
  { icon: Brain, title: 'AI-Powered', desc: 'I leverage AI tools throughout development to move faster, catch issues earlier, and deliver higher quality.' },
  { icon: Code2, title: 'Full-Stack', desc: 'Frontend, backend, databases, and infrastructure — every layer built with intention.' },
  { icon: Sparkles, title: 'Craft', desc: 'Clean code, thoughtful architecture, and an obsessive eye for detail in every project.' },
];

interface SoftwareDevProps {
  onContact: () => void;
}

export default function SoftwareDev({ onContact }: SoftwareDevProps) {
  return (
    <section className="min-h-screen bg-[#0a0f1a] text-slate-200 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Software Development
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              I deliver software,<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">powered by AI</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              I build and ship complete software products — from concept to deployment.
              By integrating AI into my workflow, I move faster, write better code, and
              deliver results that would take traditional teams twice the time.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AI / LLMs', 'AWS'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-md bg-slate-800/60 border border-slate-700 text-sm text-slate-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
            <button onClick={onContact} className="group inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors">
              Let's build something
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-cyan-500/10 rounded-2xl blur-2xl" />
              <img
                src="https://images.pexels.com/photos/34803969/pexels-photo-34803969.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Laptop displaying code in a dimly lit room"
                className="relative rounded-2xl shadow-2xl shadow-blue-950/50 w-full h-[420px] sm:h-[500px] object-cover border border-slate-800"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4 font-mono text-sm">
                <div className="flex gap-1.5 mb-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <p className="text-slate-400">$ <span className="text-cyan-400">git</span> commit -m <span className="text-green-400">"ship it"</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900/70 transition-all">
              <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
