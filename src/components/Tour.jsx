import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import styles from '../styles/Tour.module.css';

function Tour() {
  // Simulamos un arreglo vacío para aplicar el estado underground de "Próximamente"
  const shows = [];

  return (
    <section className={styles.blackoutBg}>
      <div className={styles.wrapper}>
        <h2 className={styles.sectionTitle}>Fechas del Tour</h2>
        
        {shows.length > 0 ? (
          <div className={styles.gigList}>
            {/* Aquí irían mapeados los conciertos cuando tengan fechas */}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <Calendar size={40} className={styles.alertIcon} />
            <h3 className={styles.statusTitle}>PRÓXIMAMENTE DESTRUYENDO ESCENARIOS</h3>
            <p className={styles.statusText}>
              La maquinaria de Speed Rock 'N' Roll está aceitando los motores[cite: 5, 42]. Déjanos tu correo más abajo en la lista oficial para enterarte de los próximos shows ilegales y festivales antes que el resto.
            </p>
            <div className={styles.stencilText}>CHILE UNDERGROUND</div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tour;