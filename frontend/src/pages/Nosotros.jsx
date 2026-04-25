import { Link } from 'react-router-dom';
import { DotPattern } from '../components/DotPattern';
import { TEAM } from '../data/services';

/* ── Hero ── */
function HeroNosotros() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-arena3 overflow-hidden">
      <DotPattern />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-arena3/80" />
      <div className="relative z-10 text-center px-6">
        <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-dim mb-2">
          <Link to="/" className="hover:text-dorado transition-colors">Inicio</Link>
          {' / '}
          <span className="text-texto">Nosotros</span>
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-texto tracking-tight font-light italic">
          El alma de Astra
        </h1>
        <p className="font-sans text-medio text-base md:text-lg font-light mt-4 max-w-lg mx-auto">
          Un espacio donde la ciencia del cuerpo y la sabiduría del espíritu se encuentran.
        </p>
      </div>
    </section>
  );
}

/* ── Story ── */
function Story() {
  return (
    <section data-testid="story-section" className="py-24 md:py-32 px-6 md:px-12 bg-blanco">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4">
            Nuestra historia
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-texto tracking-tight font-light mb-6">
            Un sueño hecho espacio
          </h2>
          <div className="space-y-4 font-sans text-medio text-[15px] font-light leading-[1.8]">
            <p>
              Astra nació con un propósito claro: brindar atención integral a las personas mediante terapias
              físicas y espirituales que favorezcan la recuperación del cuerpo, el equilibrio emocional
              y la armonía interior.
            </p>
            <p>
              Bajo la dirección de Jorge Ariel Cuevas Mendoza —especialista en terapia física,
              facilitador certificado del Método Wim Hof y guía de terapias espirituales— Astra combina
              la excelencia técnica con la calidez humana que cada persona merece en su proceso de sanación.
            </p>
            <p>
              Cada detalle de nuestro espacio en Zapotlán el Grande fue pensado para transmitir calma desde
              el momento en que cruzas la puerta: materiales naturales, luz cálida, y un entorno que invita
              a la reconexión con uno mismo.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] bg-arena2 overflow-hidden">
            <img
              src="/jardin.jpeg"
              alt="Jardín de Astra Clínica"
              loading="lazy"
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-dorado/30" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

/* ── Team ── */
function TeamSection() {
  return (
    <section data-testid="team-section" className="py-24 md:py-32 px-6 md:px-12 bg-arena">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4">
          Equipo
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-texto tracking-tight font-light mb-16">
          Quienes te acompañan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <div key={i} data-testid={`team-member-${i}`} className="text-center">
              <div className="w-[120px] h-[120px] rounded-full mx-auto mb-6 overflow-hidden bg-arena2 border border-arena3">
                {member.image ? (
                  <img src={member.image} alt={member.name} loading="lazy"
                       className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-serif text-dorado text-2xl">{member.initials}</span>
                  </div>
                )}
              </div>
              <h3 className="font-serif text-xl text-texto font-medium mb-1">{member.name}</h3>
              <p className="font-sans text-dorado text-[13px] tracking-wide mb-3">{member.role}</p>
              <p className="font-sans text-medio text-[14px] font-light leading-relaxed max-w-xs mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Values ── */
function Values() {
  const values = [
    { num: 'I', title: 'Presencia consciente', text: 'Cada interacción con nuestros pacientes parte de una escucha activa y una atención plena. Estamos completamente presentes en cada sesión.' },
    { num: 'II', title: 'Integralidad', text: 'No tratamos síntomas aislados. Abordamos a cada persona como un sistema completo donde cuerpo, mente y espíritu se influyen mutuamente.' },
    { num: 'III', title: 'Transformación sostenible', text: 'Buscamos cambios profundos y duraderos, no soluciones temporales. Cada plan de tratamiento está diseñado para empoderar al paciente en su propio proceso.' },
  ];

  return (
    <section data-testid="values-section" className="py-24 md:py-32 px-6 md:px-12 bg-blanco">
      <div className="max-w-4xl mx-auto">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-4 text-center">
          Filosofía
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-texto tracking-tight font-light text-center mb-16">
          Lo que nos guía
        </h2>

        <div className="space-y-16">
          {values.map((v, i) => (
            <div key={i} className="text-center">
              <span className="font-serif text-4xl md:text-6xl text-dorado3 font-extralight block mb-4">
                {v.num}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-texto mb-4">{v.title}</h3>
              <p className="font-sans text-medio text-[15px] font-light leading-relaxed max-w-xl mx-auto">
                {v.text}
              </p>
              {i < values.length - 1 && (
                <div className="gold-line mx-auto mt-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTANosotros() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-oscuro text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-arena tracking-tight font-light mb-6">
          Comienza tu proceso de sanación
        </h2>
        <p className="font-sans text-dim italic text-base mb-10">
          Primera consulta sin costo
        </p>
        <Link
          to="/reservaciones"
          data-testid="nosotros-cta-agendar"
          className="inline-block bg-dorado hover:bg-dorado2 text-blanco font-sans text-[12px]
                     tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-300"
        >
          Agendar primera cita
        </Link>
      </div>
    </section>
  );
}

export default function Nosotros() {
  return (
    <>
      <HeroNosotros />
      <Story />
      <TeamSection />
      <Values />
      <CTANosotros />
    </>
  );
}
