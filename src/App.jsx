import Hero from './components/Hero';
import Manifiesto from './components/Manifiesto';
import Release from './components/Release';
import Tour from './components/Tour';
import { Instagram, Youtube } from 'lucide-react';
import Bio from './components/Bio';
import Social from './components/Social';
function App() {
  return (
    <div>
      <Hero />
<Bio />
<Manifiesto />
<Release />
      <Tour />
      <Social />
      

      <footer style={{ backgroundColor: '#0b0b0b', padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#b0b0b0' }}>
            <Instagram size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: '#b0b0b0' }}>
            <Youtube size={24} />
          </a>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>
          Booking & Contacto: <strong style={{ color: 'white' }}>dager.banda@gmail.com</strong>
        </p>
        <p style={{ fontSize: '0.8rem', color: '#444', marginTop: '1.5rem' }}>
          © 2026 D.A.G.E.R. All Rights Reserved. Pure Evil Rock 'N' Roll.
        </p>
        <p style={{ fontSize: '0.75rem', color: '#333', marginTop: '0.75rem' }}>
          Sitio por Matías Santelices — <a href="mailto:mati.santelicess@gmail.com" style={{ color: '#555' }}>mati.santelicess@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
