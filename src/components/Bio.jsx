import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Bio.module.css';

import bioPhoto from '../assets/foto dager.png';
import diegoPhoto from '../assets/diego.png';
import ossexPhoto from '../assets/ossex.png';
import ignacioPhoto from '../assets/ignacio.png';

/* ============================================================
   Variantes — misma biblioteca de animaciones del resto del sitio
   ============================================================ */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const slideRight = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideLeft = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

/* Datos de integrantes — fácil de mantener en un solo lugar */
const MEMBERS = [
  {
    name: 'Diego',
    role: 'Batería',
    photo: diegoPhoto,
    leader: false,
  },
  {
    name: 'Ossex',
    role: 'Guitarra / Voz',
    photo: ossexPhoto,
    leader: true,
  },
  {
    name: 'Ignacio',
    role: 'Bajo',
    photo: ignacioPhoto,
    leader: false,
  },
];

/* ============================================================
   BIO
   ============================================================ */
function Bio() {
  return (
    <section id="quienes-somos" className={styles.wrapper}>
      <div className={styles.inner}>

        {/* ── ENCABEZADO DE SECCIÓN ──────────────────────── */}
        <motion.div
          className={styles.sectionHeader}
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className={styles.sectionNumber} aria-hidden="true">00 — ORIGEN</span>
          <span className={styles.sectionLine} aria-hidden="true" />
        </motion.div>

        {/* ============================================================
            BLOQUE BIO
            ============================================================ */}
        <div className={styles.bioGrid}>

          {/* Foto grupal */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className={styles.bioPhotoFrame}>
              <img
                src={bioPhoto}
                alt="D.A.G.E.R. — banda completa"
                className={styles.bioPhoto}
              />
            </div>
          </motion.div>

          {/* Texto bio */}
          <motion.div
            className={styles.bioTextBlock}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2 className={styles.title}>¿Quién es<br />D.A.G.E.R.?</h2>

            <p className={styles.paragraph}>
              <strong className={styles.highlight}>D.A.G.E.R.</strong> es una
              propuesta independiente de Rock n' Roll y Metal de la vieja
              escuela, nacida en 2025 en Melipilla, Chile. El proyecto es la
              creación y visión solista de{' '}
              <strong className={styles.highlight}>Ossex</strong>, quien se
              encarga de componer y grabar.
            </p>

            <p className={styles.paragraph}>
              Somos la nueva sangre del Rock n' Roll, con una estética
              fuertemente influenciada por la escena del Hard Rock y el
              Glam Metal de los años 80.
            </p>

            <div className={styles.soloBadge}>
              <span className={styles.soloBadgeDot} aria-hidden="true" />
              Proyecto solista de Ossex
            </div>
          </motion.div>

        </div>

        {/* ============================================================
            BLOQUE INTEGRANTES
            ============================================================ */}
        <motion.div
          className={styles.membersHeader}
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h2 className={styles.membersTitle}>Integrantes</h2>
        </motion.div>

        <div className={styles.membersGrid}>
          {MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              className={styles.memberCard}
              variants={fadeUp(0.12 * i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className={styles.memberPhotoWrap}>
                <img
                  src={member.photo}
                  alt={`${member.name} — ${member.role} de D.A.G.E.R.`}
                  className={styles.memberPhoto}
                />
              </div>

              <div className={styles.memberInfo}>
                <span className={styles.memberRole}>{member.role}</span>
                <span className={styles.memberName}>{member.name}</span>
                {member.leader && (
                  <span className={styles.leaderTag}>Líder / Compositor</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Bio;
