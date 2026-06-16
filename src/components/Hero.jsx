import { motion } from 'framer-motion';
import { Zap, Volume2, Skull } from 'lucide-react';
import styles from '../styles/Hero.module.css';

// Importando las imágenes locales que mencionaste
import bgImage from '../assets/dager.png';
import flyerImage from '../assets/evento.png';

function Hero() {
  const handleScrollToRelease = () => {
    const section = document.getElementById('ultimo-lanzamiento');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.hero}>
      {/* CAPA DE FONDO: Foto de la banda oscurecida y texturizada */}
      <div 
        className={styles.bgLayer} 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className={styles.vignette}></div>
      <div className={styles.scanlines}></div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className={styles.container}>
        
        {/* Etiqueta superior estilo parche de mezclilla */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.patchLabel}
        >
          <Skull size={16} /> <span>SANTIAGO UNDERGROUND</span> <Skull size={16} />
        </motion.div>

        {/* Logo Principal con impacto */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0, skewX: 10 }}
          animate={{ scale: 1, opacity: 1, skewX: -5 }}
          transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
          className={styles.logo}
        >
          D.A.G.E.R.
        </motion.h1>

        {/* Subtítulo sangriento/ochentero */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className={styles.tagline}
        >
          PURE EVIL SPEED ROCK 'N' ROLL
        </motion.h2>

        {/* Botón de Acción Afilado */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className={styles.actionArea}
        >
          <button className={styles.slantedButton} onClick={handleScrollToRelease}>
            <span className={styles.buttonContent}>
              <Zap size={20} className={styles.pulseIcon} />
              WILD IN THE STREETS
              <Volume2 size={20} />
            </span>
          </button>
        </motion.div>

      </div>

      {/* DETALLE EXTRA: Flyer pegado en la esquina inferior */}
      <motion.div 
        initial={{ opacity: 0, rotate: -20, x: -100 }}
        animate={{ opacity: 0.8, rotate: -10, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className={styles.flyerDeco}
      >
        <img src={flyerImage} alt="Próximo evento de DAGER" />
        <div className={styles.tape}></div>
      </motion.div>
      
    </header>
  );
}

export default Hero;