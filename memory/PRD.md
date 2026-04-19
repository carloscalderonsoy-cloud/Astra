# Astra Clínica de Terapia Física y Espiritual — PRD

## Problem Statement
Multi-page marketing website for a premium physical and spiritual therapy clinic in Guadalajara, Mexico. The site must convey serenity, refinement, and conscious healing.

## Architecture
- **Stack**: React + Tailwind CSS + React Router v6
- **Pages**: 4 (Home, Servicios, Reservaciones, Nosotros)
- **Backend**: Not used (frontend-only marketing site)
- **Database**: Not used
- **Reservations**: Redirect to WhatsApp with pre-filled message

## User Personas
1. **Potential patient** — Seeking therapy/wellness services, browsing from mobile
2. **Returning patient** — Looking to book a specific service
3. **Referral visitor** — Sent by a friend/doctor, wants to learn about the clinic

## Core Requirements (Static)
- Warm luxury color palette (gold, sand, cream, dark brown)
- Typography: Cormorant Garamond (headings) + Jost (body)
- Mobile-first responsive design
- WhatsApp integration for bookings
- Real services with real prices from the clinic

## What's Been Implemented (April 2026)

### Iteration 1 — MVP (April 16)
- 4 pages: Home, Servicios, Reservaciones, Nosotros
- All 8 services with real prices
- WhatsApp integration for bookings
- Stock images + real clinic assets (logo, garden, textiles)

### Iteration 2 — Refinements (April 16)
- Logo sin fondo blanco, 50% más grande (mix-blend-mode: multiply)
- Número real de WhatsApp: 523411159610 (341 115 9610)
- Equipo actualizado: Jorge Ariel Cuevas Mendoza como Director General
- Placeholders para futuros integrantes del equipo
- Menú móvil con fondo sólido (sin transparencia)
- Imágenes verdes de masaje reemplazadas por tina Wim Hof
- Contacto actualizado: Zapotlán el Grande (Ciudad Guzmán), Jalisco
- Historia de la clínica actualizada con info de Jorge Ariel

### Global Components
- Sticky navigation with logo, links, CTA button
- Mobile hamburger menu with overlay
- WhatsApp floating button (all pages)
- Footer (3 columns: brand, navigation, contact)
- Dot pattern component
- Page transitions (fade-in)
- Scroll to top on route change

### Real Assets Integrated
- Astra logo (deer/lotus/star)
- Clinic garden photo
- Branded merchandise photo (polo/towel)

## Real Services & Prices
1. Consulta de valoración en terapia física — $600
2. Sesión integral de terapia física — $900
3. Sesión simple con medios físicos — $500
4. Masaje relajante espalda, hombros y cuello — $900
5. Masaje relajante completo — $1,300
6. Crioterapia / tina con hielos — $300
7. Experiencia completa de hielo, respiración y yoga — $600
8. Yoga — $300

## Prioritized Backlog
### P0 (Done)
- [x] 4-page routing
- [x] Responsive design (mobile-first)
- [x] WhatsApp booking redirect
- [x] All 8 services with real prices
- [x] Real logo and clinic photos integrated

### P1 (Next)
- [ ] Replace WhatsApp number placeholder with real number
- [ ] Replace contact info placeholders (address, phone, email)
- [ ] Replace social media link placeholders
- [ ] SEO meta tags per page
- [ ] Replace stock images with real clinic photos

### P2 (Future)
- [ ] Google Analytics integration
- [ ] Blog/Resources section
- [ ] Online booking system (calendar integration)
- [ ] Google Maps embed in footer/contact
- [ ] Multi-language support (EN)
- [ ] Testimonials from real patients
