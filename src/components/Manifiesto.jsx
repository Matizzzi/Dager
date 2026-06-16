import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Activity } from 'lucide-react';
import styles from '../styles/Manifiesto.module.css';

/* ============================================================
   Variantes — misma librería de animaciones que Hero
   ============================================================ */
const slideLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 },
  },
};

/* ============================================================
   MANIFIESTO
   ============================================================ */
function Manifiesto() {
  return (
    <section className={styles.wrapper}>

      {/* Textura de fondo: rejilla diagonal + resplandor rojo lateral */}
      <div className={styles.grungeOverlay} aria-hidden="true" />

      <div className={styles.grid}>

        {/* ── BLOQUE DE TEXTO ────────────────────────────────── */}
        <motion.div
          className={styles.textBlock}
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Número de sección — estilo tracklist, mismo idioma que el strip del Hero */}
          <span className={styles.sectionNumber} aria-hidden="true">
            01 — MANIFIESTO
          </span>

          <h2 className={styles.title}>
            Declaración<br />de Ruido
          </h2>

          <p className={styles.paragraph}>
            Guitarras afiladas, tachas, cuero y velocidad analógica pura.
            Nacidos en las entrañas de la escena underground chilena,{' '}
            <strong className={styles.highlight}>D.A.G.E.R.</strong>{' '}
            rescata el espíritu más violento y crudo de la Nueva Ola
            de Heavy Metal Tradicional (NWOTHM). No hacemos prisioneros.
          </p>
        </motion.div>

        {/* ── REPRODUCTOR — ESTÉTICA AMPLIFICADOR ────────────── */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className={styles.playerContainer}>

            {/* Header: nombre del deck + LED de actividad */}
            <div className={styles.playerHeader}>
              <div className={styles.headerTitle}>
                <Volume2 size={16} className={styles.redIcon} aria-hidden="true" />
                <h3>Tape Deck // Single destacado</h3>
              </div>

              <div className={styles.ledIndicator} aria-label="Reproduciendo">
                <Activity size={14} color="#C8000A" aria-hidden="true" />
                <span className={styles.ledLight} aria-hidden="true" />
              </div>
            </div>

            {/* Spotify embed envuelto en contenedor oscuro */}
            <div className={styles.spotifyWrap}>
              <iframe
                style={{ borderRadius: '10px' }}
                src="https://open.spotify.com/embed/track/4p4zw3bbVjDptDk9sqCyhC?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="DAGER — Single destacado en Spotify"
              />
            </div>

            {/* Pie: modelo y serial estilo equipo de audio analógico */}
            <div className={styles.playerFooter} aria-hidden="true">
              <span className={styles.playerModel}>DAGER // Tape Deck MK-I</span>
              <span className={styles.playerSerial}>STG-001</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Manifiesto;
