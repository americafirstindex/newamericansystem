import { Link } from 'react-router-dom';
import logoSrc from '../assets/logo.jpg';
import './Header.css';

export default function Header({ backLink, backLabel = '← Home', navLinks }) {
  return (
    <header className="hdr">
      <Link to="/" className="hdr-l">
        <img src={logoSrc} alt="NAS" />
        <span>New American System</span>
      </Link>
      <div className="hdr-r">
        {navLinks && navLinks.map(({ href, label }) => (
          <a key={href} href={href}>{label}</a>
        ))}
        {backLink && (
          <Link to={backLink} className="hdr-back">{backLabel}</Link>
        )}
      </div>
    </header>
  );
}
