import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Sun } from 'lucide-react';
import { DotPattern } from '../components/DotPattern';
import { SERVICES, HERO_IMAGES, GALLERY_IMAGES, TESTIMONIALS } from '../data/services';

/* ── Hero Gallery ── */
function HeroGallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section data-testid="hero-section" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background images */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={i}
          className="hero-slide absolute inset-0"
          style={{
            opacity: i === active ? 1 : 0,
            backgroundColor: img.fallback,
          }}
        >
          <img
            src={img.url}
            alt={img.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(44,36,22,0.15)] to-[rgba(44,36,22,0.50)]" />

      {/* Dot pattern */}
      <DotPattern className="z-[1] opacity-[0.04]" />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-dorado z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <p className="font-sans font-medium text-[10px] md:text-[11px] tracking-[0.26em] uppercase text-white/80 mb-6">
          Terapia Física y Espiritual
        </p>
        <h1 className="font-serif font-extralight text-white tracking-[0.32em] uppercase leading-none"
            style={{ fontSize: 'clamp(56px, 16vw, 100px)' }}>
          ASTRA
        </h1>
        <p className="font-serif font-light italic text-white/85 mt-4 mb-8"
           style={{ fontSize: 'clamp(16px, 4vw, 22px)' }}>
          Donde el cuerpo encuentra su equilibrio
        </p>
        <div className="gold-line mx-auto mb-8" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/reservaciones"
            data-testid="hero-cta-agendar"
            className="bg-dorado hover:bg-dorado2 text-blanco font-sans text-[12px] tracking-[0.2em]
                       uppercase px-8 py-3.5 transition-colors duration-300 inline-block"
          >
            Agendar cita
          </Link>
          <Link
            to="/servicios"
            data-testid="hero-cta-servicios"
            className="border border-white/50 hover:border-white text-white font-sans text-[12px]
                       tracking-[0.2em] uppercase px-8 py-3.5 transition-colors duration-300 inline-block"
          >
            Conocer servicios
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            data-testid={`hero-indicator-${i}`}
            onClick={() => setActive(i)}
            className={`h-[1px] transition-all duration-500 ${
              i === active ? 'w-8 bg-dorado' : 'w-5 bg-white/35'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Philosophy ── */
function Philosophy() {
  const pillars = [
    { icon: Leaf, title: 'Cuerpo', text: 'Restauramos el movimiento y la vitalidad a través de terapias físicas basadas en evidencia.' },
    { icon: Heart, title: 'Mente', text: 'Cultivamos la presencia y la calma interior con técnicas de respiración y meditación guiada.' },
    { icon: Sun, title: 'Espíritu', text: 'Reconectamos con la energía vital para alcanzar un estado de equilibrio y bienestar profundo.' },
  ];

  return (
    <section data-testid="philosophy-section" className="py-24 md:py-32 px-6 md:px-12 bg-blanco">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4 text-center">
          Nuestra esencia
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-texto tracking-tight text-center mb-16 font-light">
          Sanación que integra
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div key={i} className="bg-arena border-l-2 border-dorado p-8 md:p-10">
              <p.icon size={24} className="text-dorado mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-texto mb-3">{p.title}</h3>
              <p className="font-sans text-medio text-[15px] font-light leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-arena2 mt-16 py-12 px-8 md:px-16 text-center relative">
          <div className="gold-line mx-auto mb-8" />
          <blockquote className="font-serif italic text-texto text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
            "Cada sesión es un paso hacia la versión más plena de ti mismo"
          </blockquote>
          <div className="gold-line mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}

/* ── Services Preview ── */
function ServicesPreview() {
  const preview = SERVICES.slice(0, 4);

  return (
    <section data-testid="services-preview-section" className="py-24 md:py-32 px-6 md:px-12 bg-arena relative">
      <DotPattern />
      <div className="max-w-6xl mx-auto relative z-10">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4">
          Servicios
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-texto tracking-tight mb-16 font-light">
          Lo que ofrecemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {preview.map(s => (
            <div key={s.id} className="service-card bg-blanco p-8 md:p-10 group">
              <span className="font-serif text-5xl md:text-6xl text-dorado3 font-extralight block mb-4 leading-none">
                {s.id}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-texto mb-3">{s.name}</h3>
              <p className="font-sans text-medio text-[15px] font-light leading-relaxed mb-4">
                {s.description}
              </p>
              <p className="font-sans text-dorado text-sm tracking-wide">
                {s.duration} · {s.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/servicios"
            data-testid="services-preview-cta"
            className="inline-flex items-center gap-2 font-sans text-dorado text-sm tracking-[0.12em] uppercase
                       hover:gap-3 transition-all duration-300"
          >
            Ver todos los servicios <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Gallery Preview ── */
function GalleryPreview() {
  return (
    <section data-testid="gallery-section" className="py-24 md:py-32 px-6 md:px-12 bg-blanco">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4 text-center">
          Nuestro espacio
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-texto tracking-tight text-center mb-16 font-light">
          Un refugio de calma
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`gallery-item relative ${img.span ? 'col-span-2 row-span-1' : ''}`}
              style={{ aspectRatio: img.span ? '2/1' : '1/1' }}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="gallery-placeholder w-full h-full object-cover object-[center_30%]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function Testimonials() {
  return (
    <section data-testid="testimonials-section" className="py-24 md:py-32 bg-oscuro">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4">
          Testimonios
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-arena tracking-tight mb-12 font-light">
          Experiencias que transforman
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-oscuro border border-[rgba(201,151,74,0.18)] p-8 md:p-10 relative">
              <span className="font-serif text-[80px] text-dorado3/20 absolute top-4 left-6 leading-none select-none">
                &ldquo;
              </span>
              <p className="font-sans text-arena text-[15px] font-light leading-relaxed mb-6 relative z-10 pt-8">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-dorado/20 flex items-center justify-center shrink-0">
                  <span className="font-serif text-dorado text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-sans text-dorado text-sm font-medium">{t.name}</p>
                  <p className="font-sans text-dim text-xs font-light">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Final ── */
function CTAFinal() {
  return (
    <section data-testid="cta-final-section" className="py-24 md:py-32 px-6 md:px-12 bg-oscuro text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-arena tracking-tight font-light mb-6">
          Comienza tu proceso de sanación
        </h2>
        <p className="font-sans text-dim italic text-base mb-10">
          Primera consulta sin costo
        </p>
        <Link
          to="/reservaciones"
          data-testid="cta-final-agendar"
          className="inline-block bg-dorado hover:bg-dorado2 text-blanco font-sans text-[12px]
                     tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-300"
        >
          Agendar primera cita
        </Link>
      </div>
    </section>
  );
}

/* ── Home Page ── */
export default function Home() {
  return (
    <>
      <HeroGallery />
      <Philosophy />
      <ServicesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTAFinal />
    </>
  );
}
