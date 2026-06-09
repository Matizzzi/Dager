import { Volume2, Disc } from 'lucide-react';
import styles from '../styles/Manifiesto.module.css';

function Manifiesto() {
  // Lista de canciones obtenida directamente de tus datos populares de Spotify
  const tracks = [
    { id: 1, title: "Evil Speed Rock 'N' Roll", duration: "4:53" },
    { id: 2, title: "Strangers", duration: "4:58" },
    { id: 3, title: "Out of love - Demo version", duration: "5:11" },
    { id: 4, title: "Wild Child", duration: "5:00" }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        
        {/* Texto de actitud de la banda */}
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Declaración de Ruido</h2>
          <p className={styles.paragraph}>
            Guitarras afiladas, tachas, cuero y velocidad analógica pura[cite: 69]. Nacidos en las entrañas de la escena underground chilena, <strong>D.A.G.E.R.</strong> rescata el espíritu más violento y crudo de la Nueva Ola de Heavy Metal Tradicional (NWOTHM)[cite: 37, 39, 69]. No hacemos prisioneros.
          </p>
        </div>

        {/* Panel del Reproductor */}
        <div className={styles.playerContainer}>
          <div className={styles.playerHeader}>
            <Volume2 size={20} className={styles.redIcon} />
            <h3>Singles Populares</h3>
          </div>
          
          <div className={styles.trackList}>
            {tracks.map((track) => (
              <div key={track.id} className={styles.trackRow}>
                <div className={styles.trackInfo}>
                  <Disc size={16} className={styles.discIcon} />
                  <span className={styles.trackTitle}>{track.title}</span>
                </div>
                <span className={styles.trackDuration}>{track.duration}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Manifiesto;