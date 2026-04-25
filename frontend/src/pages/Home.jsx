import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Leaf, Heart, Sun, Star } from 'lucide-react';
import { DotPattern } from '../components/DotPattern';
import { SERVICES, HERO_IMAGES, GALLERY_IMAGES, TESTIMONIALS } from '../data/services';

/* ── Scroll reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('revealed'); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Hero Marquee ── */
function HeroMarquee() {
  const items = [
    'Fisioterapia', '✦', 'Masaje Terapéutico', '✦',
    'Crioterapia', '✦', 'Yoga', '✦',
    'Respiración Wim Hof', '✦', 'Rehabilitación', '✦',
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-texto/10 bg-arena/70 backdrop-blur-sm overflow-hidden">
      <div className="marquee-track py-3.5 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="px-8 text-[11px] uppercase tracking-[0.35em] text-texto/50 font-sans">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Hero Image Column ── */
function HeroImageColumn({ active }) {
  return (
    <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 rise rise-3">
      {/* Decorative gold ring */}
      <div
        className="absolute -inset-3 rounded-t-[140px] rounded-bl-[140px] rounded-br-lg border border-dorado/40 pointer-events-none"
        style={{ transform: 'rotate(-2deg)' }}
        aria-hidden="true"
      />

      {/* Image frame */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[140px] rounded-bl-[140px] rounded-br-lg bg-arena2">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={i}
            className="hero-slide absolute inset-0"
            style={{ opacity: i === active ? 1 : 0, backgroundColor: img.fallback }}
          >
            <img
              src={img.url}
              alt={img.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
        ))}
        {/* Inner vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-oscuro/30 via-transparent to-transparent" />
      </div>

      {/* Floating badge — bottom left */}
      <div className="absolute -left-4 md:-left-6 bottom-12 bg-blanco/85 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(44,36,22,0.22)] px-4 py-3 flex items-center gap-3 rise rise-5 z-10">
        <div className="w-8 h-8 rounded-full bg-dorado/15 flex items-center justify-center text-dorado">
          <Leaf size={16} strokeWidth={1.5} />
        </div>
        <div className="leading-tight">
          <div className="text-[9px] uppercase tracking-[0.25em] text-texto/50 font-sans">Método</div>
          <div className="text-xs font-sans text-texto font-medium">Enfoque Holístico</div>
        </div>
      </div>

      {/* Stat badge — top right */}
      <div className="absolute -right-3 md:-right-4 top-10 bg-oscuro text-blanco px-4 py-3 flex items-center gap-3 rise rise-4 z-10 shadow-[0_8px_30px_-12px_rgba(44,36,22,0.5)]">
        <div className="leading-tight">
          <div className="text-[9px] uppercase tracking-[0.25em] text-blanco/50 font-sans">Desde</div>
          <div className="font-serif text-xl">2014</div>
        </div>
        <div className="w-px h-7 bg-blanco/20" />
        <div className="leading-tight">
          <div className="text-[9px] uppercase tracking-[0.25em] text-blanco/50 font-sans">Sesiones</div>
          <div className="font-serif text-xl">12k+</div>
        </div>
      </div>

      {/* Vertical caption */}
      <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 items-center gap-3 vertical-rl text-[10px] uppercase tracking-[0.4em] text-texto/35 font-sans">
        <span>Est. MMXIV</span>
        <span className="block w-8 h-px bg-texto/25 rotate-180" />
      </div>

      {/* Slide dots */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {HERO_IMAGES.map((_, i) => (
          <div
            key={i}
            className={`h-[1px] transition-all duration-500 ${
              i === active ? 'w-6 bg-dorado' : 'w-4 bg-texto/25'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Hero Copy Column ── */
function HeroCopyColumn() {
  return (
    <div className="relative z-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6 rise rise-1">
        <span className="block w-10 h-px bg-dorado" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-dorado font-sans">
          Terapia Física y Espiritual
        </span>
      </div>

      {/* H1 */}
      <h1
        className="font-serif font-light leading-[0.85] tracking-tight text-texto rise rise-2"
        style={{ fontSize: 'clamp(72px, 14vw, 148px)', marginBottom: '1.5rem' }}
      >
        Astra
      </h1>

      {/* Subtitle */}
      <p className="font-serif italic font-light text-2xl lg:text-[28px] text-texto/75 max-w-md leading-snug mb-4 rise rise-3">
        Donde el cuerpo encuentra
        <br />
        su equilibrio.
      </p>

      {/* Body lede */}
      <p className="font-sans text-sm text-texto/55 max-w-sm leading-relaxed rise rise-3">
        Un santuario en el corazón de la ciudad. Fisioterapia, masaje terapéutico
        y prácticas energéticas en un solo ritual.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 mt-10 rise rise-4">
        <Link
          to="/reservaciones"
          data-testid="hero-cta-agendar"
          className="group inline-flex items-center gap-3 bg-dorado text-blanco px-8 py-4 text-xs uppercase tracking-[0.25em] font-sans hover:bg-oscuro transition-colors duration-300"
        >
          Agendar Cita
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </Link>
        <Link
          to="/servicios"
          data-testid="hero-cta-servicios"
          className="inline-flex items-center gap-3 border border-texto/20 text-texto px-8 py-4 text-xs uppercase tracking-[0.25em] font-sans hover:border-dorado hover:text-dorado transition-colors duration-300"
        >
          Ver Servicios
        </Link>
      </div>

      {/* Social proof */}
      <div className="flex items-center gap-6 mt-10 pt-8 border-t border-texto/10 rise rise-5">
        <div className="flex -space-x-2.5">
          {[
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80',
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80',
          ].map((src, i) => (
            <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-arena object-cover" />
          ))}
        </div>
        <div className="leading-tight">
          <div className="flex items-center gap-0.5 text-dorado">
            {[0,1,2,3,4].map(i => <Star key={i} size={11} fill="currentColor" strokeWidth={0} />)}
            <span className="ml-2 text-xs text-texto font-medium font-sans">4.96</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-texto/50 mt-1 font-sans">
            Más de 2.400 reseñas
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <section data-testid="hero-section" className="relative min-h-screen overflow-hidden bg-arena grain">
      {/* Light beam — top left */}
      <div
        className="light-beam"
        style={{
          top: '-25%', left: '-15%',
          width: '70vw', height: '70vw',
          background: 'radial-gradient(circle at center, #FDFCFA 0%, rgba(253,252,250,0.55) 35%, rgba(253,252,250,0) 70%)',
        }}
      />
      <div
        className="light-beam"
        style={{
          top: '30%', left: '18%',
          width: '28vw', height: '28vw',
          background: 'radial-gradient(circle, rgba(201,151,74,0.13), rgba(201,151,74,0) 70%)',
          opacity: 0.9,
        }}
      />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-dorado z-30" />

      {/* Main content */}
      <div className="relative z-10 pt-36 md:pt-44 pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_1.1fr] items-center gap-16 lg:gap-20">
          <HeroCopyColumn />
          <HeroImageColumn active={active} />
        </div>
      </div>

      {/* Side rail */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-texto/35 vertical-rl font-sans">
          Scroll · Descubrir
        </span>
        <span className="block w-px h-14 bg-texto/15" />
      </div>

      {/* Corner location */}
      <div className="hidden lg:block absolute right-10 bottom-20 z-20 text-right">
        <div className="text-[10px] uppercase tracking-[0.3em] text-texto/35 mb-1 font-sans">Ubicación</div>
        <div className="font-serif text-sm text-texto/70">Zapotlán el Grande</div>
        <div className="text-xs text-texto/45 font-sans">Jalisco · México</div>
      </div>

      {/* Marquee */}
      <HeroMarquee />
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

  const sectionRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section data-testid="philosophy-section" className="py-24 md:py-32 px-6 md:px-12 bg-blanco relative overflow-hidden">
      {/* Subtle warm glow */}
      <div
        className="light-beam"
        style={{
          top: '-30%', right: '-20%',
          width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(245,240,232,0.9), rgba(245,240,232,0) 70%)',
          opacity: 0.8,
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={sectionRef} className="reveal text-center mb-16">
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4">
            Nuestra esencia
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-texto tracking-tight font-light">
            Sanación que integra
          </h2>
        </div>

        <div ref={cardsRef} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="pillar-card bg-arena border-l-2 border-dorado p-8 md:p-10"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p.icon size={22} className="text-dorado mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-texto mb-3">{p.title}</h3>
              <p className="font-sans text-medio text-[15px] font-light leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-arena2 mt-16 py-12 px-8 md:px-16 text-center relative reveal" ref={useReveal()}>
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
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section data-testid="services-preview-section" className="py-24 md:py-32 px-6 md:px-12 bg-arena relative">
      <DotPattern />
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={titleRef} className="reveal mb-16">
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4">
            Servicios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-texto tracking-tight font-light">
            Lo que ofrecemos
          </h2>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {preview.map((s, idx) => (
            <div key={s.id} className="service-card bg-blanco p-8 md:p-10 group" style={{ transitionDelay: `${idx * 0.08}s` }}>
              {/* Service image strip */}
              {s.image && (
                <div className="gallery-item relative h-40 mb-6 -mx-8 md:-mx-10 -mt-8 md:-mt-10 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blanco/30" />
                </div>
              )}
              <span className="font-serif text-5xl md:text-6xl text-dorado3 font-extralight block mb-4 leading-none">
                {s.id}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-texto mb-3">{s.name}</h3>
              <p className="font-sans text-medio text-[15px] font-light leading-relaxed mb-4">
                {s.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="font-sans text-dorado text-sm tracking-wide">
                  {s.duration} · {s.price}
                </p>
                <Link
                  to="/reservaciones"
                  className="inline-flex items-center gap-1.5 font-sans text-dorado text-[12px] tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                >
                  Reservar <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal" ref={useReveal()}>
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
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section data-testid="gallery-section" className="py-24 md:py-32 px-6 md:px-12 bg-blanco">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4">
            Nuestro espacio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-texto tracking-tight font-light">
            Un refugio de calma
          </h2>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section data-testid="testimonials-section" className="py-24 md:py-32 bg-oscuro relative overflow-hidden">
      {/* Subtle warm glow */}
      <div
        className="light-beam"
        style={{
          bottom: '-20%', right: '-10%',
          width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(201,151,74,0.07), rgba(201,151,74,0) 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div ref={titleRef} className="reveal mb-12">
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4">
            Testimonios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-arena tracking-tight font-light">
            Experiencias que transforman
          </h2>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card-hover bg-oscuro border border-[rgba(201,151,74,0.18)] p-8 md:p-10 relative"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="font-serif text-[80px] text-dorado3/20 absolute top-4 left-6 leading-none select-none">
                &ldquo;
              </span>
              <p className="font-sans text-arena text-[15px] font-light leading-relaxed mb-6 relative z-10 pt-8">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-dorado/15 flex items-center justify-center shrink-0 border border-dorado/20">
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
  const ref = useReveal();

  return (
    <section data-testid="cta-final-section" className="py-24 md:py-32 px-6 md:px-12 bg-oscuro text-center relative overflow-hidden">
      {/* Warm center glow */}
      <div
        className="light-beam"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(201,151,74,0.09), rgba(201,151,74,0) 70%)',
        }}
      />
      <div ref={ref} className="reveal max-w-2xl mx-auto relative z-10">
        <div className="gold-line mx-auto mb-10" />
        <h2 className="font-serif text-4xl md:text-5xl text-arena tracking-tight font-light mb-6">
          Comienza tu proceso de sanación
        </h2>
        <p className="font-sans text-dim italic text-base mb-10">
          Primera consulta sin costo
        </p>
        <Link
          to="/reservaciones"
          data-testid="cta-final-agendar"
          className="group inline-flex items-center gap-3 bg-dorado hover:bg-dorado2 text-blanco font-sans text-[12px]
                     tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-300"
        >
          Agendar primera cita
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
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
