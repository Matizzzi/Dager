import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Skull } from 'lucide-react';
import styles from '../styles/Tour.module.css';

// Importamos el flyer que tienes guardado
import flyerImg from '../assets/evento.png';

function Tour() {
  return (
    <section className={styles.blackoutBg}>
      <div className={styles.wrapper}>
        
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.sectionTitle}
        >
          <Skull size={32} className={styles.titleIcon} />
          LIVE ASSAULTS
        </motion.h2>
        
        <div className={styles.contentGrid}>
          
          {/* LADO A: ESTADO "PRÓXIMAMENTE" */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.emptyState}
          >
            <Calendar size={40} className={styles.alertIcon} />
            <h3 className={styles.statusTitle}>PRÓXIMAMENTE DESTRUYENDO ESCENARIOS</h3>
            <p className={styles.statusText}>
              La maquinaria de Speed Rock 'N' Roll está aceitando los motores. Déjanos tu correo más abajo en la lista oficial para enterarte de los próximos shows ilegales y festivales antes que el resto.
            </p>
            <div className={styles.stencilText}>CHILE UNDERGROUND</div>
          </motion.div>

          {/* LADO B: EVIDENCIA DEL EVENTO PASADO (Tu Foto) */}
          <motion.div 
            initial={{ opacity: 0, rotate: 8, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            className={styles.pastGig}
          >
            {/* Cintas adhesivas simuladas */}
            <div className={styles.tapeTop}></div>
            <span className={styles.pastGigTag}>EVIDENCIA ANTERIOR</span>
            
            <img 
              src={flyerImg} 
              alt="D.A.G.E.R. en Vivo" 
              className={styles.flyerImage} 
            />
            
            <div className={styles.tapeBottom}></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Tour;