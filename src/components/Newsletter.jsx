import { useState } from 'react';
import { Mail } from 'lucide-react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Te has unido al club callejero de D.A.G.E.R.! Pronto recibiras noticias.');
    setEmail('');
  };

  return (
    <section style={{
      padding: '4rem 2rem',
      textAlign: 'center',
      backgroundColor: '#111',
      borderTop: '1px solid #d30000',
      borderBottom: '1px solid #d30000'
    }}>
      <h2 style={{ fontSize: '2rem', color: '#d30000' }}>Unete al Club Callejero</h2>
      <p style={{ color: '#b0b0b0', marginTop: '0.5rem', marginBottom: '2rem' }}>
        Recibe material inedito, alertas de merch y preventas exclusivas directo en tu correo.
      </p>
      <form onSubmit={handleSubscribe} style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <input
          type="email"
          placeholder="Tu Email de Metalero..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            flex: '1',
            padding: '0.75rem 1rem',
            backgroundColor: '#222',
            border: '1px solid #444',
            color: 'white',
            fontSize: '1rem'
          }}
        />
        <button type="submit" style={{
          backgroundColor: '#d30000',
          border: 'none',
          color: 'white',
          padding: '0.75rem 1.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          boxShadow: '5px 5px 0px #000'
        }}>
          <Mail size={16} /> UNIRME
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
