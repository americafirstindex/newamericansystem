import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer({ joinLink = '#join', homeLink = '/' }) {
  return (
    <footer className="ft">
      <p>&copy; 2026 New American System &middot; 501(c)(4)</p>
      <p style={{ marginTop: '.2rem' }}>
        {joinLink.startsWith('#') ? (
          <a href={joinLink}>Join the Fight</a>
        ) : (
          <Link to={joinLink}>Join the Fight</Link>
        )}
      </p>
    </footer>
  );
}
