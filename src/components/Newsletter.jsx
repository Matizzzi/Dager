import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Zap } from 'lucide-react';
import styles from '../styles/Newsletter.module.css';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('¡Te has unido al club callejero de D.A.G.E.R.! Pronto recibirás noticias de destrucción masiva.');
    setEmail('');
  };

  return (
    <section className={styles.wrapper}>
      {/* Cintas de peligro superior e inferior */}
      <div className={styles.warningTapeTop}></div>
      <div className={styles.warningTapeBottom}></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={styles.container}
      >
        <h2 className={styles.title}>ÚNETE AL CLUB CALLEJERO</h2>
        <p className={styles.subtitle}>
          Recibe material inédito, alertas de merch y preventas exclusivas directo en tu correo. Sin spam corporativo, solo puro Speed Rock 'N' Roll.
        </p>

        <form onSubmit={handleSubscribe} className={styles.formGroup}>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Tu Email de Metalero..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
          
          <button type="submit" className={styles.submitBtn}>
            <span className={styles.btnContent}>
              <Mail size={18} /> UNIRME <Zap size={18} />
            </span>
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Newsletter;