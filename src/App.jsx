import Hero from './components/Hero';
import Manifiesto from './components/Manifiesto';
import Release from './components/Release';
import Tour from './components/Tour';
import Newsletter from './components/Newsletter';
import { Instagram, Youtube } from 'lucide-react';

function App() {
  return (
    <div>
      <Hero />
      <Manifiesto />      {/* ← sin la 'a' extra */}
      <Release />
      <Tour />
      <Newsletter />

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
          Booking & Contacto: <strong style={{ color: 'white' }}>management@bandadager.com</strong>
        </p>
        <p style={{ fontSize: '0.8rem', color: '#444', marginTop: '1.5rem' }}>
          © 2026 D.A.G.E.R. All Rights Reserved. Pure Evil Rock 'N' Roll.
        </p>
      </footer>
    </div>
  );
}

export default App;