import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Volume2 } from 'lucide-react';
import styles from '../styles/Hero.module.css';

import bgImage from '../assets/dager.png';

/* ============================================================
   Variantes de animación — orquestadas en secuencia
   ============================================================ */
const fadeDown = {
  hidden:  { y: -24, opacity: 0 },
  visible: { y: 0,   opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const logoVariants = {
  hidden:  { opacity: 0, scale: 1.08, skewX: 6 },
  visible: {
    opacity: 1,
    scale: 1,
    skewX: -2,
    transition: { type: 'spring', stiffness: 140, damping: 12, delay: 0.15 },
  },
};

const fadeUp = (delay = 0) => ({
  hidden:  { y: 22, opacity: 0 },
  visible: { y: 0,  opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  const canvasRef = useRef(null);

  /* Genera ruido analógico en canvas una sola vez al montar */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    const w = parent.offsetWidth  || 1440;
    const h = parent.offsetHeight || 900;

    canvas.width  = w;
    canvas.height = h;

    const ctx     = canvas.getContext('2d');
    const imgData = ctx.createImageData(w, h);
    const d       = imgData.data;

    for (let i = 0; i < d.length; i += 4) {
      const v    = Math.floor(Math.random() * 255);
      d[i]   = v;
      d[i+1] = v;
      d[i+2] = v;
      d[i+3] = 255;
    }

    ctx.putImageData(imgData, 0, 0);
  }, []);

  const handleScrollToRelease = () => {
    document.getElementById('ultimo-lanzamiento')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.hero}>

      {/* ── CAPAS DE FONDO ─────────────────────────────────── */}

      {/* Foto de la banda: blanco y negro, muy oscura, texturizada */}
      <div
        className={styles.bgLayer}
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />

      {/* Viñeta radial para centrar la atención en el texto */}
      <div className={styles.vignette} aria-hidden="true" />

      {/* Líneas de TV analógica / VHS */}
      <div className={styles.scanlines} aria-hidden="true" />

      {/* Ruido de grano generado en canvas */}
      <canvas
        ref={canvasRef}
        className={styles.noiseCanvas}
        aria-hidden="true"
      />

      {/* Líneas de velocidad diagonales SVG */}
      <svg
        className={styles.speedLines}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Líneas rojas horizontales muy tenues — sensación de velocidad */}
        <line x1="0" y1="280" x2="1440" y2="360" stroke="#C8000A" strokeWidth="0.5" opacity="0.10" />
        <line x1="0" y1="320" x2="1440" y2="420" stroke="#C8000A" strokeWidth="0.3" opacity="0.07" />
        <line x1="0" y1="500" x2="1440" y2="480" stroke="#C8000A" strokeWidth="0.4" opacity="0.06" />
        {/* Diagonales estructurales oscuras — como rasguños en vinilo */}
        <line x1="180"  y1="0" x2="680"  y2="900" stroke="#111" strokeWidth="1.2" opacity="0.6" />
        <line x1="520"  y1="0" x2="1020" y2="900" stroke="#111" strokeWidth="0.6" opacity="0.3" />
        <line x1="1100" y1="0" x2="1440" y2="480" stroke="#C8000A" strokeWidth="0.4" opacity="0.07" />
      </svg>

      {/* ── CONTENIDO ──────────────────────────────────────── */}
      <div className={styles.container}>

        {/* Etiqueta superior — estilo parche de mezclilla */}
        <motion.div
          className={styles.patchLabel}
          variants={fadeDown}
          initial="hidden"
          animate="visible"
        >
          <span className={styles.dot} aria-hidden="true" />
          Santiago Underground
          <span className={styles.dot} aria-hidden="true" />
        </motion.div>

        {/* ── LOGO: EFECTO SERIGRAFIA DESALINEADA ── */}
        {/*
          Tres capas del mismo texto con offsets distintos.
          Imita impresión de merch de banda con registro imperfecto —
          técnica de diseño gráfico análogo, no digital-genérico.
        */}
        <motion.div
          className={styles.logoWrap}
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Capa dorado: registro roto hacia arriba-izquierda */}
          <span className={styles.logoGhostGold} aria-hidden="true">
            DAGER
          </span>

          {/* Capa roja: desplazada hacia abajo-derecha */}
          <span className={styles.logoGhostRed} aria-hidden="true">
            DAGER
          </span>

          {/* Texto principal */}
          <h1 className={styles.logoMain}>
            DAGER
          </h1>

          {/* Grieta diagonal — SVG inline para que escale con el texto */}
          <svg
            className={styles.logoCrack}
            viewBox="0 0 700 150"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {/* Grieta principal */}
            <polyline
              points="265,0 270,28 258,52 276,88 269,115 284,150"
              fill="none"
              stroke="#C8000A"
              strokeWidth="1.8"
              opacity="0.75"
            />
            {/* Ramificaciones secundarias */}
            <polyline
              points="266,38 248,45 253,55"
              fill="none"
              stroke="#C8000A"
              strokeWidth="0.9"
              opacity="0.45"
            />
            <polyline
              points="273,90 292,96"
              fill="none"
              stroke="#C8000A"
              strokeWidth="0.7"
              opacity="0.35"
            />
          </svg>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className={styles.tagline}
          variants={fadeUp(0.45)}
          initial="hidden"
          animate="visible"
        >
          Pure Evil Speed Rock 'n' Roll
        </motion.p>

        {/* Divisor ornamental */}
        <motion.div
          className={styles.divider}
          variants={fadeUp(0.55)}
          initial="hidden"
          animate="visible"
          aria-hidden="true"
        >
          <span className={styles.dividerLine} />
          <span className={styles.dividerOrnament}>✦ ✦ ✦</span>
          <span className={`${styles.dividerLine} ${styles.right}`} />
        </motion.div>

        {/* ── BOTÓN CUCHILLA ── */}
        <motion.div
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.btnContainer}>
            <button
              className={styles.bladeBtn}
              onClick={handleScrollToRelease}
              aria-label="Escuchar Wild in the Streets"
            >
              <Zap size={18} className={styles.zapIcon} aria-hidden="true" />
              Wild in the Streets
              <Volume2 size={18} aria-hidden="true" />
            </button>
            <div className={styles.btnShadow} aria-hidden="true" />
          </div>
        </motion.div>

        {/* ── STRIP DE DATOS ── */}
        <motion.div
          className={styles.showStrip}
          variants={fadeUp(0.88)}
          initial="hidden"
          animate="visible"
          role="list"
          aria-label="Información de la banda"
        >
          <div className={styles.showItem} role="listitem">
            <span className={styles.showItemLabel}>Próximo show</span>
            <span className={`${styles.showItemValue} ${styles.accent}`}>Santiago</span>
          </div>
          <div className={styles.showItem} role="listitem">
            <span className={styles.showItemLabel}>Género</span>
            <span className={styles.showItemValue}>Speed / Hard Rock</span>
          </div>
          <div className={styles.showItem} role="listitem">
            <span className={styles.showItemLabel}>Origen</span>
            <span className={styles.showItemValue}>Chile</span>
          </div>
          <div className={styles.showItem} role="listitem">
            <span className={styles.showItemLabel}>Lanzamiento</span>
            <span className={`${styles.showItemValue} ${styles.accent}`}>2025</span>
          </div>
        </motion.div>

      </div>

      {/* Marca de esquina */}
      <div className={styles.cornerMark} aria-hidden="true">
        <span>est.</span>
        <span>Stgo — CL</span>
      </div>

    </header>
  );
}

export default Hero;
