import { motion } from 'framer-motion';
import { Zap, Volume2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import styles from '../styles/Hero.module.css';
import bgImage from '../assets/dager.png';

function Hero() {
  const handleScrollToRelease = () => {
    const section = document.getElementById('ultimo-lanzamiento');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.hero}>
      {/* Fondo con imagen + efectos */}
      <div className={styles.bgLayer} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles.asphaltOverlay}></div>
        <div className={styles.burnMark}></div>
      </div>

      {/* Contenido principal */}
      <div className={styles.container}>
        {/* Cinta superior estilo "advertencia" */}
        <div className={styles.topTape}>
          <span> LIMITED CASSETTE EDITION </span>
          <span className={styles.blink}>⚡ LIVE ⚡</span>
        </div>

        {/* Logo con efecto de cuchilla */}
        <motion.h1
          initial={{ y: -100, opacity: 0, rotateX: 90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
          className={styles.logo}
        >
          D.A.G.E.R.
          <div className={styles.knifeSlice}></div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "4px" }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={styles.tagline}
        >
          PURE EVIL SPEED ROCK 'N' ROLL
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, type: "spring" }}
          className={styles.buttonWrapper}
        >
          <button className={styles.cassetteButton} onClick={handleScrollToRelease}>
            <span className={styles.buttonTape}></span>
            <Zap size={22} className={styles.buttonIcon} />
            <span>ESCUCHAR "WILD IN THE STREETS"</span>
            <Volume2 size={18} />
          </button>
        </motion.div>

        {/* indicador de "velocidad" */}
        <div className={styles.speedometer}>
          <div className={styles.needle}></div>
          <div className={styles.speedText}>180 BPM</div>
        </div>
      </div>

      {/* Partículas de chispa (simulación con CSS) */}
      <div className={styles.sparks}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className={styles.spark} style={{ '--i': i, left: `${Math.random() * 100}%` }}></div>
        ))}
      </div>
    </header>
  );
}

export default Hero;