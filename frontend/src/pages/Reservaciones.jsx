import { useState } from 'react';
import { Check, AlertCircle, Clock, Shield, Gift } from 'lucide-react';
import { DotPattern } from '../components/DotPattern';
import { SERVICES } from '../data/services';

const WA_NUMBER = '523411159610';

/* ── Page Header ── */
function PageHeader() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-arena overflow-hidden">
      <DotPattern />
      <div className="relative z-10 text-center px-6">
        <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-dim mb-2">
          <a href="/" className="hover:text-dorado transition-colors">Inicio</a>
          {' / '}
          <span className="text-texto">Reservaciones</span>
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-texto tracking-tight font-light">
          Reserva tu sesión
        </h1>
      </div>
    </section>
  );
}

/* ── Info Panel ── */
function InfoPanel() {
  const benefits = [
    { icon: Gift, title: 'Primera consulta gratuita', text: 'Tu primera orientación es sin costo para conocernos.' },
    { icon: Clock, title: 'Horarios flexibles', text: 'Lun–Vie 9:00–19:00, Sáb 9:00–14:00.' },
    { icon: Shield, title: 'Cancelación sin costo', text: 'Cancela con 24h de anticipación sin penalización.' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-dorado mb-3">
          Agenda con nosotros
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-texto font-light mb-4">
          Comienza tu camino hacia el bienestar
        </h2>
        <p className="font-sans text-medio text-[15px] font-light leading-relaxed">
          Completa el formulario y te confirmaremos tu cita por WhatsApp.
          Tu información se envía directamente a nuestro equipo.
        </p>
      </div>

      <div className="space-y-6">
        {benefits.map((b, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-10 h-10 bg-arena2 flex items-center justify-center shrink-0">
              <b.icon size={18} className="text-dorado" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-sans text-texto text-sm font-medium mb-1">{b.title}</h4>
              <p className="font-sans text-dim text-[13px] font-light">{b.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Policy */}
      <div className="bg-arena p-6 border-l-2 border-dorado">
        <h4 className="font-sans text-[11px] tracking-[0.16em] uppercase text-medio mb-2">
          Política de cancelación
        </h4>
        <p className="font-sans text-dim text-[13px] font-light leading-relaxed">
          Puedes cancelar o reprogramar tu cita sin costo con un mínimo de 24 horas de anticipación.
          Cancelaciones tardías pueden generar un cargo del 50% del servicio.
        </p>
      </div>
    </div>
  );
}

/* ── Form ── */
function ReservationForm() {
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', servicio: '', fecha: '', horario: '', notas: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const horarios = ['Mañana', 'Tarde', 'Sin preferencia'];

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = 'Requerido';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido';
    if (!form.telefono.trim()) e.telefono = 'Requerido';
    if (!form.servicio) e.servicio = 'Selecciona un servicio';
    if (!form.fecha) e.fecha = 'Selecciona una fecha';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const selectedService = SERVICES.find(s => s.name === form.servicio);
    const price = selectedService ? ` (${selectedService.price})` : '';
    const msg = [
      `Hola, me gustaría agendar una cita en Astra.`,
      ``,
      `*Nombre:* ${form.nombre}`,
      `*Email:* ${form.email}`,
      `*Teléfono:* ${form.telefono}`,
      `*Servicio:* ${form.servicio}${price}`,
      `*Fecha preferida:* ${form.fecha}`,
      `*Horario:* ${form.horario || 'Sin preferencia'}`,
      form.notas ? `*Notas:* ${form.notas}` : '',
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  const update = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <div data-testid="reservation-success" className="bg-arena p-10 text-center">
        <div className="w-16 h-16 bg-dorado/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={28} className="text-dorado" />
        </div>
        <h3 className="font-serif text-2xl text-texto mb-3">¡Solicitud enviada!</h3>
        <p className="font-sans text-medio text-[15px] font-light mb-6">
          Tu solicitud se abrió en WhatsApp. Envía el mensaje para que nuestro equipo confirme tu cita.
        </p>
        <button
          data-testid="reservation-reset-btn"
          onClick={() => { setSubmitted(false); setForm({ nombre: '', email: '', telefono: '', servicio: '', fecha: '', horario: '', notas: '' }); }}
          className="font-sans text-dorado text-sm tracking-[0.12em] uppercase hover:text-dorado2 transition-colors"
        >
          Hacer otra reservación
        </button>
      </div>
    );
  }

  return (
    <form data-testid="reservation-form" onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Nombre */}
      <div>
        <label className="font-sans text-[11px] tracking-[0.16em] uppercase text-medio block mb-2 font-medium">
          Nombre completo *
        </label>
        <input
          data-testid="input-nombre"
          type="text"
          value={form.nombre}
          onChange={e => update('nombre', e.target.value)}
          className={`astra-input w-full ${errors.nombre ? 'border-[#C4694A]' : ''}`}
          placeholder="Tu nombre"
        />
        {errors.nombre && <p className="text-[#C4694A] text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.nombre}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="font-sans text-[11px] tracking-[0.16em] uppercase text-medio block mb-2 font-medium">
          Correo electrónico *
        </label>
        <input
          data-testid="input-email"
          type="email"
          value={form.email}
          onChange={e => update('email', e.target.value)}
          className={`astra-input w-full ${errors.email ? 'border-[#C4694A]' : ''}`}
          placeholder="tu@email.com"
        />
        {errors.email && <p className="text-[#C4694A] text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
      </div>

      {/* Teléfono */}
      <div>
        <label className="font-sans text-[11px] tracking-[0.16em] uppercase text-medio block mb-2 font-medium">
          Teléfono (WhatsApp) *
        </label>
        <input
          data-testid="input-telefono"
          type="tel"
          value={form.telefono}
          onChange={e => update('telefono', e.target.value)}
          className={`astra-input w-full ${errors.telefono ? 'border-[#C4694A]' : ''}`}
          placeholder="+52 33 0000 0000"
        />
        {errors.telefono && <p className="text-[#C4694A] text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.telefono}</p>}
      </div>

      {/* Servicio */}
      <div>
        <label className="font-sans text-[11px] tracking-[0.16em] uppercase text-medio block mb-2 font-medium">
          Servicio de interés *
        </label>
        <select
          data-testid="input-servicio"
          value={form.servicio}
          onChange={e => update('servicio', e.target.value)}
          className={`astra-input w-full appearance-none ${errors.servicio ? 'border-[#C4694A]' : ''} ${!form.servicio ? 'text-dim' : ''}`}
        >
          <option value="">Selecciona un servicio</option>
          {SERVICES.map(s => (
            <option key={s.id} value={s.name}>{`${s.name} — ${s.price}`}</option>
          ))}
        </select>
        {errors.servicio && <p className="text-[#C4694A] text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.servicio}</p>}
      </div>

      {/* Fecha */}
      <div>
        <label className="font-sans text-[11px] tracking-[0.16em] uppercase text-medio block mb-2 font-medium">
          Fecha preferida *
        </label>
        <input
          data-testid="input-fecha"
          type="date"
          value={form.fecha}
          onChange={e => update('fecha', e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          className={`astra-input w-full ${errors.fecha ? 'border-[#C4694A]' : ''}`}
        />
        {errors.fecha && <p className="text-[#C4694A] text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.fecha}</p>}
      </div>

      {/* Horario */}
      <div>
        <label className="font-sans text-[11px] tracking-[0.16em] uppercase text-medio block mb-2 font-medium">
          Horario preferido
        </label>
        <div className="flex gap-3" data-testid="input-horario-group">
          {horarios.map(h => (
            <button
              key={h}
              type="button"
              data-testid={`horario-${h.toLowerCase().replace(/\s/g, '-')}`}
              onClick={() => update('horario', h)}
              className={`flex-1 py-3 font-sans text-[13px] tracking-wide transition-all duration-200 border
                ${form.horario === h
                  ? 'bg-dorado text-blanco border-dorado'
                  : 'bg-blanco text-medio border-arena3 hover:border-dorado'
                }`}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      {/* Notas */}
      <div>
        <label className="font-sans text-[11px] tracking-[0.16em] uppercase text-medio block mb-2 font-medium">
          Notas adicionales
        </label>
        <textarea
          data-testid="input-notas"
          value={form.notas}
          onChange={e => update('notas', e.target.value)}
          rows={3}
          className="astra-input w-full resize-none"
          placeholder="Cuéntanos si tienes alguna condición o preferencia especial..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        data-testid="reserve-submit-btn"
        className="w-full bg-dorado hover:bg-dorado2 text-blanco font-sans text-[13px]
                   tracking-[0.2em] uppercase py-4 transition-colors duration-300 mt-4"
      >
        Confirmar reservación
      </button>
    </form>
  );
}

export default function Reservaciones() {
  return (
    <>
      <PageHeader />
      <section className="py-16 md:py-24 px-6 md:px-12 bg-blanco">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <InfoPanel />
          </div>
          <div className="lg:col-span-3">
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  );
}
