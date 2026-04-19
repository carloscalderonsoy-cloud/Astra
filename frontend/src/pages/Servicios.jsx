import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, Activity, Zap, Hand, Sparkles, Snowflake, Wind, Leaf } from 'lucide-react';
import { DotPattern } from '../components/DotPattern';
import { SERVICES } from '../data/services';

const ICON_MAP = {
  ClipboardCheck, Activity, Zap, Hand, Sparkles, Snowflake, Wind, Leaf,
};

const WA_NUMBER = '523411159610';

/* ── Page Header ── */
function PageHeader() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-arena overflow-hidden">
      <DotPattern />
      <div className="relative z-10 text-center px-6">
        <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-dim mb-2">
          <Link to="/" className="hover:text-dorado transition-colors">Inicio</Link>
          {' / '}
          <span className="text-texto">Servicios</span>
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-texto tracking-tight font-light">
          Nuestros Servicios
        </h1>
      </div>
    </section>
  );
}

/* ── Services Grid ── */
function ServicesGrid() {
  return (
    <section data-testid="services-grid" className="py-24 md:py-32 px-6 md:px-12 bg-blanco">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {SERVICES.map(s => {
          const Icon = ICON_MAP[s.icon] || Leaf;
          const waMsg = encodeURIComponent(
            `Hola, me gustaría reservar: ${s.name} (${s.price})`
          );
          return (
            <div key={s.id} data-testid={`service-card-${s.id}`}
                 className="service-card bg-arena2 border border-arena3 p-8 md:p-10 group
                            flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <span className="font-serif text-5xl md:text-6xl text-dorado3 font-extralight leading-none">
                    {s.id}
                  </span>
                  <Icon size={22} className="text-dorado mt-2" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl md:text-[22px] text-texto mb-3 leading-snug">
                  {s.name}
                </h3>
                <p className="font-sans text-medio text-[15px] font-light leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-sans text-dim text-sm">
                  {s.duration} · <span className="text-texto font-medium">{s.price}</span>
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`service-reserve-${s.id}`}
                  className="inline-flex items-center gap-1.5 font-sans text-dorado text-[13px]
                             tracking-[0.08em] hover:gap-2.5 transition-all duration-300"
                >
                  Reservar <ArrowRight size={14} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Consulta inicial', text: 'Evaluamos tu estado actual y escuchamos tus necesidades para entender el camino hacia tu bienestar.' },
    { num: '02', title: 'Programa personalizado', text: 'Diseñamos un plan de tratamiento único, combinando las modalidades más adecuadas para ti.' },
    { num: '03', title: 'Seguimiento continuo', text: 'Acompañamos tu proceso con ajustes y apoyo constante para asegurar resultados duraderos.' },
  ];

  return (
    <section data-testid="how-it-works-section" className="py-24 md:py-32 px-6 md:px-12 bg-arena2">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4">
          Proceso
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-texto tracking-tight mb-16 font-light">
          ¿Cómo funciona?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px border-t border-dashed border-dorado/40" />

          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              <span className="font-serif text-5xl md:text-6xl text-dorado3 font-extralight block mb-4 relative z-10">
                {s.num}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-texto mb-3">{s.title}</h3>
              <p className="font-sans text-medio text-[15px] font-light leading-relaxed max-w-xs mx-auto">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            to="/reservaciones"
            data-testid="how-it-works-cta"
            className="inline-block bg-dorado hover:bg-dorado2 text-blanco font-sans text-[12px]
                       tracking-[0.2em] uppercase px-10 py-3.5 transition-colors duration-300"
          >
            Comenzar ahora
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Servicios() {
  return (
    <>
      <PageHeader />
      <ServicesGrid />
      <HowItWorks />
    </>
  );
}
