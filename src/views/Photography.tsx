import { ArrowRight, Mail } from 'lucide-react';

const galleryPhotos = [
  {
    src: 'https://images.pexels.com/photos/37853793/pexels-photo-37853793.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Vintage camera on a white minimalist surface',
  },
  {
    src: 'https://images.pexels.com/photos/18651903/pexels-photo-18651903.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Black and white misty forest',
  },
  {
    src: 'https://images.pexels.com/photos/9296245/pexels-photo-9296245.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Mist-covered mountains at dusk',
  },
];

interface PhotographyProps {
  onContact: () => void;
}

export default function Photography({ onContact }: PhotographyProps) {
  return (
    <section className="min-h-screen bg-[#fafaf9] text-stone-800 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-600 text-xs font-medium tracking-[0.2em] uppercase mb-6">
            Photography
          </div>
          <h1 className="text-4xl sm:text-6xl font-light text-stone-900 leading-tight mb-6 tracking-tight">
            Light, framed<br />
            <span className="italic font-extralight">with intention</span>
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed max-w-xl mx-auto">
            I do photography and filming — capturing moments, moods, and stories
            through the lens. If you'd like to work together, get in touch.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {galleryPhotos.map((photo, i) => (
            <div key={i} className="group relative overflow-hidden rounded-sm aspect-[3/4]">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onContact}
            className="group inline-flex items-center gap-2 text-stone-700 font-medium hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-1"
          >
            <Mail className="w-4 h-4" />
            Get in touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
