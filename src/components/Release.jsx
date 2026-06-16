import React from 'react';
import { motion } from 'framer-motion';
import { Disc, ExternalLink, Flame } from 'lucide-react';
import styles from '../styles/Release.module.css';

import teaserVideo from '../assets/teaser.mp4';

/* ============================================================
   Variantes — misma biblioteca de animaciones que Hero/Manifiesto
   ============================================================ */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const springPop = {
  hidden:  { opacity: 0, scale: 0.88, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: -2,
    transition: { type: 'spring', stiffness: 110, damping: 12, delay: 0.1 },
  },
};

/* ============================================================
   RELEASE
   ============================================================ */
function Release() {
  return (
    <section id="ultimo-lanzamiento" className={styles.wrapper}>

      {/* Borde superior — cinta de peligro diagonal */}
      <div className={styles.topBorder} aria-hidden="true" />

      {/* ── TÍTULO DE SECCIÓN ─────────────────────────────── */}
      <motion.div
        className={styles.sectionHeader}
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <span className={styles.sectionNumber} aria-hidden="true">02 — LANZAMIENTO</span>
        <span className={styles.sectionLine} aria-hidden="true" />
        <Flame size={24} className={styles.titleIcon} aria-hidden="true" />
        <h2 className={styles.sectionTitle}>Último Lanzamiento</h2>
      </motion.div>

      {/* ── GRID: PORTADA + INFO ──────────────────────────── */}
      <div className={styles.grid}>

        {/* PORTADA EP */}
        <motion.div
          className={styles.coverContainer}
          variants={springPop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className={styles.vinylBorder}>
            <div className={styles.epCover}>
              <div className={styles.grungeTexture} aria-hidden="true" />
              <div className={styles.vinylExplosion} aria-hidden="true" />
              <span className={styles.coverSubtitle}>D.A.G.E.R.</span>
              <span className={styles.coverTitle}>Wild in the<br />Streets</span>
            </div>
          </div>
        </motion.div>

        {/* INFO DEL EP */}
        <div className={styles.infoBlock}>

          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className={styles.epTitle}>
              Wild in the Streets
              <span className={styles.epTag}>EP</span>
            </h3>
            <span className={styles.releaseYear}>Edición Limitada — 2025</span>
            <p className={styles.description}>
              Cuatro ráfagas de puro{' '}
              <strong className={styles.whiteText}>Speed Metal</strong>{' '}
              grabadas a cinta abierta con el sonido más crudo y directo
              de la calle. Capitaneado por{' '}
              <em className={styles.redText}>"Ossex"</em>{' '}
              en voces e instrumentos, este material es una declaración
              de guerra sonora para la nueva generación.
            </p>
          </motion.div>

          {/* Botones de plataformas */}
          <motion.div
            className={styles.buttonGroup}
            variants={fadeUp(0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className={styles.btnOuter}>
              <button
                className={styles.btnContent + ' ' + styles.spotifyBtn}
                onClick={() => window.open('https://open.spotify.com/album/1ui2U8M7vHYAHuWr3C8ElD', '_blank')}
                aria-label="Escuchar en Spotify"
              >
                <Disc size={18} className={styles.spinHover} aria-hidden="true" />
                Spotify
              </button>
              <div className={styles.btnShadow} aria-hidden="true" />
            </div>

            <div className={styles.btnOuter}>
              <button
                className={styles.btnContent + ' ' + styles.bandcampBtn}
                onClick={() => console.log('Link a Bandcamp')}
                aria-label="Escuchar en Bandcamp"
              >
                Bandcamp
                <ExternalLink size={16} aria-hidden="true" />
              </button>
              <div className={styles.btnShadow} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Spotify embed del álbum */}
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className={styles.spotifyWrap}>
              <iframe
                style={{ borderRadius: '10px' }}
                src="https://open.spotify.com/embed/album/1ui2U8M7vHYAHuWr3C8ElD?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="DAGER — Wild in the Streets EP en Spotify"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ============================================================
          TEASER — PRÓXIMO SINGLE
          ============================================================ */}
      <motion.div
        className={styles.teaserSection}
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >

        {/* Encabezado del teaser */}
        <div className={styles.teaserHeader}>
          <div className={styles.teaserLabel}>
            <span className={styles.teaserLabelDot} aria-hidden="true" />
            Próximamente
          </div>
          <h2 className={styles.teaserTitle}>Nuevo Single</h2>
        </div>

        {/* Frame de video estilo VHS/amplificador */}
        <div className={styles.videoFrame}>

          {/* Badge de grabación */}
          <div className={styles.vhsBadge} aria-hidden="true">
            <span className={styles.vhsDot} />
            REC
          </div>

          {/* Scanlines sobre el video */}
          <div className={styles.videoScanlines} aria-hidden="true" />

          {/* Video MP4 local */}
          <video
            className={styles.teaserVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Teaser del próximo single de DAGER"
          >
            <source src={teaserVideo} type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>

          {/* Pie del frame */}
          <div className={styles.teaserCaption} aria-hidden="true">
            <span className={styles.captionText}>
              D.A.G.E.R. — <span>Próximo Single // 2025</span>
            </span>
            <span className={styles.captionText}>STG-002</span>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Release;
