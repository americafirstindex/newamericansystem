import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../assets/logo.jpg';
import './TopNav.css';

export default function TopNav({ mastheadRef }) {
  const navRef = useRef(null);

  useEffect(() => {
    if (!mastheadRef?.current || !navRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        navRef.current.classList.toggle('on', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    obs.observe(mastheadRef.current);
    return () => obs.disconnect();
  }, [mastheadRef]);

  return (
    <nav className="topnav" ref={navRef}>
      <Link to="/" className="tn-l">
        <img src={logoSrc} alt="NAS" />
        <span>New American System</span>
      </Link>
      <div className="tn-r">
        <a href="#mis">Mission</a>
        <a href="#end">Endorsed</a>
        <a href="#nws">News</a>
        <a href="#join" className="tn-cta">Join</a>
      </div>
    </nav>
  );
}
