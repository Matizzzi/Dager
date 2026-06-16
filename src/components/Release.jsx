import React from 'react';
import { motion } from 'framer-motion';
import { Disc, ExternalLink, Flame } from 'lucide-react';
import styles from '../styles/Release.module.css';

function Release() {
  return (
    <section id="ultimo-lanzamiento" className={styles.wrapper}>
      {/* Elemento decorativo superior */}
      <div className={styles.topBorder}></div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={styles.sectionTitle}
      >
        <Flame size={32} className={styles.titleIcon} />
        ÚLTIMO LANZAMIENTO
      </motion.h2>
      
      <div className={styles.grid}>
        {/* Lado A: Portada con animación de impacto */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className={styles.coverContainer}
        >
          <div className={styles.vinylBorder}>
            <div className={styles.epCover}>
              <div className={styles.grungeTexture}></div>
              <span className={styles.coverSubtitle}>D.A.G.E.R.</span>
              <span className={styles.coverTitle}>WILD IN THE<br/>STREETS</span>
              <div className={styles.vinylExplosion}></div>
            </div>
          </div>
        </motion.div>

        {/* Lado B: Información del EP con entrada secuencial */}
        <div className={styles.infoBlock}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className={styles.epTitle}>WILD IN THE STREETS <span className={styles.epTag}>[EP]</span></h3>
            <span className={styles.releaseYear}>EDICIÓN LIMITADA: 2025</span>
            
            <p className={styles.description}>
              Cuatro ráfagas de puro <strong className={styles.whiteText}>Speed Metal</strong> grabadas a cinta abierta con el sonido más crudo y directo de la calle. Capitaneado por <em className={styles.redText}>"Ossex"</em> en voces e instrumentos, este material es una declaración de guerra sonora para la nueva generación.
            </p>
          </motion.div>

          {/* Botones de acción principal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={styles.buttonGroup}
          >
            <button 
              className={`${styles.slantedButton} ${styles.spotifyBtn}`}
              onClick={() => window.open('https://open.spotify.com/embed/album/1ui2U8M7vHYAHuWr3C8ElD?utm_source=generator', '_blank')}
            >
              <span className={styles.btnContent}>
                <Disc size={20} className={styles.spinHover} /> 
                SPOTIFY
              </span>
            </button>
            
            <button 
              className={`${styles.slantedButton} ${styles.bandcampBtn}`}
              onClick={() => console.log('Link a Bandcamp')}
            >
              <span className={styles.btnContent}>
                BANDCAMP 
                <ExternalLink size={18} />
              </span>
            </button>
          </motion.div>

          {/* Reproductor Embebido de Spotify para el EP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{ marginTop: '3rem', filter: 'drop-shadow(8px 8px 0px rgba(0,0,0,0.8))' }}
          >
             <iframe 
               style={{ borderRadius: '12px' }} 
               src="https://open.spotify.com/embed/album/1ui2U8M7vHYAHuWr3C8ElD?utm_source=generator" 
               width="100%" 
               height="352" 
               frameBorder="0" 
               allowFullScreen="" 
               allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
               loading="lazy"
             ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Release;