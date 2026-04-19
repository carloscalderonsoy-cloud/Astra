import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

const WA_NUMBER = '523411159610';
const WA_MSG = encodeURIComponent('Hola Astra, quiero reservar una sesión');

/* ── ScrollToTop ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* ── WhatsApp FAB ── */
function WhatsAppButton() {
  return (
    <a
      data-testid="whatsapp-fab"
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn fixed bottom-5 right-4 z-50 w-14 h-14 md:w-14 md:h-14
                 rounded-full bg-[#25D366] flex items-center justify-center
                 shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <span className="whatsapp-tooltip absolute right-16 bg-oscuro text-arena text-xs
                        font-sans px-3 py-1.5 whitespace-nowrap hidden md:block">
        Escríbenos
      </span>
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.907 15.907 0 0016.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.302 22.602c-.388 1.094-1.938 2.002-3.168 2.268-.844.178-1.944.32-5.652-1.216-4.746-1.964-7.8-6.78-8.036-7.094-.226-.314-1.9-2.53-1.9-4.826s1.2-3.424 1.628-3.892c.35-.382.924-.568 1.472-.568.178 0 .338.008.482.016.428.018.642.044.924.714.354.838 1.216 2.962 1.322 3.178.108.216.216.502.072.788-.134.294-.252.424-.468.672-.216.248-.422.438-.638.706-.198.232-.42.48-.178.934.242.45 1.076 1.774 2.31 2.874 1.59 1.416 2.928 1.854 3.344 2.06.314.158.69.128.942-.138.318-.338.712-.894 1.112-1.444.284-.394.644-.444.99-.296.35.144 2.216 1.046 2.596 1.236.38.192.632.286.726.45.092.164.092.944-.296 2.038z"/>
      </svg>
    </a>
  );
}

/* ── Nav ── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const links = [
    { to: '/servicios', label: 'Servicios' },
    { to: '/reservaciones', label: 'Reservaciones' },
    { to: '/nosotros', label: 'Nosotros' },
  ];

  return (
    <>
      <nav
        data-testid="main-nav"
        className={`fixed top-0 w-full z-40 transition-all duration-300
          ${scrolled ? 'nav-glass shadow-sm' : 'bg-blanco'}
          border-b border-arena3/40`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" data-testid="nav-logo" className="flex items-center gap-2">
            <img
              src="/logo.jpeg"
              alt="Astra Logo"
              className="h-[72px] w-auto"
              style={{ mixBlendMode: 'multiply' }}
            />
          </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}-link`}
              className={`font-sans text-[13px] tracking-[0.18em] uppercase transition-colors duration-200
                ${location.pathname === l.to ? 'text-dorado' : 'text-medio hover:text-dorado'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/reservaciones"
          data-testid="nav-cta-agendar"
          className="hidden md:inline-block bg-dorado hover:bg-dorado2 text-blanco
                     font-sans text-[12px] tracking-[0.2em] uppercase px-6 py-2.5
                     transition-colors duration-300"
        >
          Agendar cita
        </Link>

        {/* Mobile hamburger */}
        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden w-11 h-11 flex items-center justify-center text-texto"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </nav>

      {/* Mobile overlay — rendered OUTSIDE nav to avoid stacking context issues */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-white flex flex-col">
          <div className="flex items-center justify-between px-5 h-20 border-b border-arena3/40 shrink-0">
            <Link to="/" data-testid="nav-mobile-logo" onClick={() => setOpen(false)}>
              <img
                src="/logo.jpeg"
                alt="Astra Logo"
                className="h-[48px] w-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
            </Link>
            <button
              data-testid="nav-mobile-close"
              onClick={() => setOpen(false)}
              className="w-11 h-11 flex items-center justify-center text-texto"
              aria-label="Cerrar menú"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`nav-mobile-${l.label.toLowerCase()}-link`}
                className="font-serif text-[28px] text-texto tracking-wide py-3"
                onClick={() => setOpen(false)}
              >
                {l.label}
                <div className="gold-line mx-auto mt-3" />
              </Link>
            ))}
            <Link
              to="/reservaciones"
              data-testid="nav-mobile-cta"
              className="mt-8 bg-dorado text-blanco font-sans text-sm tracking-[0.2em]
                         uppercase px-10 py-3.5 transition-colors hover:bg-dorado2"
              onClick={() => setOpen(false)}
            >
              Agendar cita
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer data-testid="footer" className="bg-oscuro border-t border-[rgba(201,151,74,0.35)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-serif text-dorado text-2xl tracking-[0.12em] font-semibold">ASTRA</span>
            </Link>
            <p className="font-sans text-dim text-sm font-light leading-relaxed mb-6 max-w-xs">
              Clínica de terapia física y espiritual. Un espacio de sanación íntimo, refinado y consciente.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 data-testid="footer-instagram"
                 className="text-dim hover:text-dorado transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 data-testid="footer-facebook"
                 className="text-dim hover:text-dorado transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                 data-testid="footer-whatsapp"
                 className="text-dim hover:text-dorado transition-colors" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 — Links */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-dorado mb-6">
              Navegación
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/servicios', label: 'Servicios' },
                { to: '/reservaciones', label: 'Reservaciones' },
                { to: '/nosotros', label: 'Nosotros' },
              ].map(l => (
                <Link key={l.to} to={l.to}
                      className="font-sans text-dim text-sm font-light hover:text-dorado transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-dorado mb-6">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-dim text-sm font-light">
              <span className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                Zapotlán el Grande (Ciudad Guzmán), Jalisco, México
              </span>
              <span className="flex items-center gap-2">
                <Phone size={15} className="shrink-0" />
                <a href="tel:+523411159610" className="hover:text-dorado transition-colors">341 115 9610</a>
              </span>
              <span className="flex items-center gap-2">
                <Mail size={15} className="shrink-0" />
                contacto@astra-clinica.com
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} className="shrink-0" />
                Lada 341 · Jalisco
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(201,151,74,0.18)] mt-12 pt-6 text-center">
          <p className="font-sans text-dim text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} Astra Clínica de Terapia Física y Espiritual. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── Layout ── */
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main className="page-enter">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
