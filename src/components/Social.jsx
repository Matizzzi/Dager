import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, MessageCircle } from 'lucide-react';
import styles from '../styles/Social.module.css';

/* ============================================================
   Variantes — misma biblioteca de animaciones del sitio
   ============================================================ */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

/* ============================================================
   Datos reales — extraídos del dossier oficial
   ============================================================ */
const SOCIALS = [
  {
    platform: 'Instagram',
    handle: '@dager.band',
    href: 'https://instagram.com/dager.band',
    color: '#E1306C',
    Icon: Instagram,
  },
  {
    platform: 'YouTube',
    handle: 'D.A.G.E.R BAND',
    href: 'https://youtube.com/@dagerband',
    color: '#FF0000',
    Icon: Youtube,
  },
  {
    platform: 'TikTok',
    handle: 'Dager_band',
    href: 'https://tiktok.com/@dager_band',
    color: '#E8E2D9',
    // TikTok no tiene icono dedicado en lucide-react; se usa un glifo propio abajo
    Icon: null,
  },
  {
    platform: 'Spotify',
    handle: 'D.A.G.E.R.',
    href: 'https://open.spotify.com/artist/4wEReTVACuDe0JHK0ZdAmk',
    color: '#1DB954',
    Icon: null,
  },
];

/* Glifo simple para plataformas sin ícono en lucide-react */
function TikTokGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}

function SpotifyGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.32-1.32 9.719-.659 13.439 1.621.361.181.54.78.301 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

const CONTACT = [
  {
    label: 'WhatsApp',
    value: '+56 9 3595 0141',
    href: 'https://wa.me/56935950141',
    Icon: MessageCircle,
  },
  {
    label: 'Email',
    value: 'dager.banda@gmail.com',
    href: 'mailto:dager.banda@gmail.com',
    Icon: Mail,
  },
];

/* ============================================================
   SOCIAL HUB
   ============================================================ */
function Social() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.warningTapeTop} aria-hidden="true" />
      <div className={styles.warningTapeBottom} aria-hidden="true" />

      <div className={styles.container}>

        {/* ── ENCABEZADO ────────────────────────────────────── */}
        <motion.div
          className={styles.header}
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className={styles.sectionNumber} aria-hidden="true">
            03 — CONECTA
          </span>
          <h2 className={styles.title}>Síguenos en la Calle</h2>
          <p className={styles.subtitle}>
            Material inédito, fechas de shows y todo el ruido de D.A.G.E.R.
            está en nuestras redes. Sin intermediarios, directo del garage.
          </p>
        </motion.div>

        {/* ── GRID DE REDES ─────────────────────────────────── */}
        <motion.div
          className={styles.socialGrid}
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SOCIALS.map((s) => (
            <a
              key={s.platform}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              style={{ '--accent-color': s.color }}
              aria-label={`${s.platform}: ${s.handle}`}
            >
              <span className={styles.socialIconWrap}>
                {s.Icon ? (
                  <s.Icon size={22} aria-hidden="true" />
                ) : s.platform === 'TikTok' ? (
                  <TikTokGlyph />
                ) : (
                  <SpotifyGlyph />
                )}
              </span>
              <span className={styles.socialPlatform}>{s.platform}</span>
              <span className={styles.socialHandle}>{s.handle}</span>
            </a>
          ))}
        </motion.div>

        {/* ── CONTACTO DIRECTO ──────────────────────────────── */}
        <motion.div
          className={styles.contactStrip}
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CONTACT.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
              aria-label={`${c.label}: ${c.value}`}
            >
              <c.Icon size={18} className={styles.contactIcon} aria-hidden="true" />
              <span className={styles.contactText}>
                <span className={styles.contactLabel}>{c.label}</span>
                <span className={styles.contactValue}>{c.value}</span>
              </span>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Social;
