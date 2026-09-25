import { ArrowRight } from 'lucide-react';

const galleryPhotos = [
  {
    src: 'https://images.pexels.com/photos/38920688/pexels-photo-38920688.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Slice of Basque burnt cheesecake on a white plate',
  },
  {
    src: 'https://images.pexels.com/photos/38648017/pexels-photo-38648017.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Basque burnt cheesecake freshly baked on parchment paper',
  },
  {
    src: 'https://images.pexels.com/photos/36934942/pexels-photo-36934942.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Burnt Basque cheesecake in a ceramic dish on a wooden table',
  },
];

interface PastryProps {
  onContact: () => void;
}

export default function Pastry({ onContact }: PastryProps) {
  return (
    <section className="min-h-screen bg-[#fdf6f0] text-stone-700 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium tracking-wide uppercase mb-6">
            Pastry
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 leading-tight mb-6">
            Burnt cheesecake,<br />
            <span className="text-amber-600">done right</span>
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-xl mx-auto">
            I specialize in burnt cheesecakes — that irresistible contrast of
            caramelized top and creamy, almost custard-like center. Baked in
            small batches, always fresh, never rushed.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {galleryPhotos.map((photo, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg shadow-amber-100/50 aspect-square">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/5 transition-colors duration-500" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Burnt Basque', 'Classic Cheesecake', 'Small Batches', 'Made to Order'].map((item) => (
            <span key={item} className="px-3 py-1.5 rounded-full bg-white/70 border border-amber-200 text-sm text-amber-700 font-medium">
              {item}
            </span>
          ))}
        </div>

        <div className="text-center">
          <button onClick={onContact} className="group inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors">
            Place an order
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
