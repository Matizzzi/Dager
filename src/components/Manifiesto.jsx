import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Activity } from 'lucide-react';
import styles from '../styles/Manifiesto.module.css';

function Manifiesto() {
  return (
    <section className={styles.wrapper}>
      {/* Patrón de fondo sutil para conectar con el Hero */}
      <div className={styles.grungeOverlay}></div>

      <div className={styles.grid}>
        
        {/* BLOQUE DE TEXTO CON ANIMACIÓN DE ENTRADA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={styles.textBlock}
        >
          <div className={styles.tapeDeco}></div>
          <h2 className={styles.title}>DECLARACIÓN DE RUIDO</h2>
          <p className={styles.paragraph}>
            Guitarras afiladas, tachas, cuero y velocidad analógica pura. Nacidos en las entrañas de la escena underground chilena, <strong className={styles.highlight}>D.A.G.E.R.</strong> rescata el espíritu más violento y crudo de la Nueva Ola de Heavy Metal Tradicional (NWOTHM). No hacemos prisioneros.
          </p>
        </motion.div>

        {/* PANEL DEL REPRODUCTOR CON SPOTIFY INTEGRADO */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.playerContainer}
        >
          <div className={styles.playerHeader}>
            <div className={styles.headerTitle}>
              <Volume2 size={20} className={styles.redIcon} />
              <h3>TAPE DECK // SINGLE DESTACADO</h3>
            </div>
            {/* LED de actividad parpadeante */}
            <div className={styles.ledIndicator}>
              <Activity size={16} color="#d30000" />
              <span className={styles.ledLight}></span>
            </div>
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/track/4p4zw3bbVjDptDk9sqCyhC?utm_source=generator" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Manifiesto;