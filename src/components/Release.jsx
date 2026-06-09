import React from 'react';
import { Disc, ExternalLink } from 'lucide-react';
import styles from '../styles/Release.module.css';

function Release() {
  return (
    <section id="ultimo-lanzamiento" className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Último Lanzamiento</h2>
      
      <div className={styles.grid}>
        {/* Lado A: Portada con estética de Vinilo/Cassette */}
        <div className={styles.coverContainer}>
          <div className={styles.vinylBorder}>
            <div className={styles.epCover}>
              <span className={styles.coverTitle}>WILD IN THE STREETS</span>
              <span className={styles.coverSubtitle}>D.A.G.E.R.</span>
              <div className={styles.vinylExplosion}></div>
            </div>
          </div>
        </div>

        {/* Lado B: Información del EP */}
        <div className={styles.infoBlock}>
          <h3 className={styles.epTitle}>Wild In The Streets [EP]</h3>
          <span className={styles.releaseYear}>Lanzamiento: Finales de 2025</span>
          
          <p className={styles.description}>
            Cuatro ráfagas de puro <strong>Speed Metal</strong> grabadas a cinta abierta con el sonido más crudo y directo de la calle. Capitaneado por <em>"Ossex"</em> en voces e instrumentos, este EP debut es una declaración de guerra sonora para la nueva generación del Metal Tradicional.
          </p>

          <div className={styles.buttonGroup}>
            <button 
              className={styles.btnSpotify}
              onClick={() => window.open('https://open.spotify.com/intl-es/artist/4wEReTVACuDe0JHK0ZdAmk?si=3Dqp1ILzT72Eoy_XW3chHQ', '_blank')}
            >
              <Disc size={18} /> SPOTIFY
            </button>
            <button 
              className={styles.btnBandcamp}
              onClick={() => console.log('Link a Bandcamp')}
            >
              BANDCAMP <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Release;