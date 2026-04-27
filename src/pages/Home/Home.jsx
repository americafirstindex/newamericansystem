import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import TopNav from '../../components/TopNav';
import CongressCanvas from './CongressCanvas';
import './Home.css';

const ENDORSED = [
  { initials: 'JY', name: 'Jace Yarbrough',   dist: 'TX-32', desc: 'Air Force veteran. Stanford Law. Trump-endorsed.',           status: 'won',    classes: 'ec wc rv rv-d1' },
  { initials: 'JS', name: 'Jackson Stallings', dist: 'OK-01', desc: 'Navy JAG. Yale. America First fighter for Oklahoma.',         status: 'active', classes: 'ec ac rv rv-d2' },
  { initials: 'BH', name: 'Brandon Herrera',   dist: 'TX-23', desc: 'The AK Guy. 2A champion. Trump-endorsed nominee.',            status: 'won',    classes: 'ec wc rv rv-d3' },
  { initials: 'KG', name: 'Keith Gross',       dist: 'FL-02', desc: 'Army Guard veteran. Businessman. Panhandle fighter.',         status: 'active', classes: 'ec ac rv rv-d4' },
  { initials: 'BM', name: 'Blake Miguez',      dist: 'LA-05', desc: 'State Senator. World champion marksman. Trump-endorsed.',    status: 'active', classes: 'ec ac rv rv-d1' },
];

const SIDEBAR_ITEMS = [
  { head: 'TX-32: Yarbrough Wins Primary', text: 'Trump-endorsed Jace Yarbrough secures the nomination for the newly redrawn 32nd District.' },
  { head: 'Stallings Enters OK-01 Race',   text: 'Navy JAG veteran announces his America First candidacy for the open Tulsa-area seat.' },
  { head: 'Miguez Earns Trump Endorsement in LA-05', text: "World champion marksman and state senator picks up the president's backing in wide-open race." },
  { head: 'The Case for Economic Nationalism', text: 'Why the America First economic agenda is more relevant than ever as midterms heat up.' },
];

export default function Home() {
  const pageRef = useRef(null);
  const mastheadRef = useRef(null);
  useReveal(pageRef);

  // Won-card green trace
  useEffect(() => {
    if (!pageRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('traced'), 400);
          }
        });
      },
      { threshold: 0.5 }
    );
    pageRef.current.querySelectorAll('.wc').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Signup form
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [btnText, setBtnText] = useState('Join the Fight →');
  const [btnStyle, setBtnStyle] = useState({});

  function handleSignup(e) {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    setBtnText("YOU'RE IN!");
    setBtnStyle({ background: '#5CC840' });
    setFirstName('');
    setEmail('');
    setTimeout(() => {
      setBtnText('Join the Fight →');
      setBtnStyle({});
    }, 3000);
  }

  return (
    <div ref={pageRef}>
      <TopNav mastheadRef={mastheadRef} />

      {/* Masthead */}
      <header className="masthead" ref={mastheadRef}>
        <h1 className="mast-title">New American System</h1>
        <div className="mast-bar"></div>
        <nav className="mast-nav">
          <a href="#mis">Mission</a>
          <a href="#idx">The Index</a>
          <a href="#end">Endorsed</a>
          <a href="#nws">News</a>
          <a href="#join">Subscribe</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero rv">
        <h1>Our Future Is<br />Worth<br /><em>Fighting For</em></h1>
        <p className="hero-sub">
          We&rsquo;re not a think tank &mdash; we&rsquo;re a <strong>do-tank</strong>, and we are building the coalition to save America.
        </p>
        <a href="#join" className="btn btn-gold">Join the Fight</a>
      </section>

      <div className="cta-s rv">
        <p>Tired of Congressional inaction?</p>
        <a href="#join" className="cta-s-btn">Sign up for the Gazette &rarr;</a>
      </div>

      {/* Mission */}
      <section className="sec sec-b" id="mis">
        <div className="sec-in rv">
          <div className="sec-lbl">Our Mission</div>
          <h2 className="sec-h">We Are Done Waiting<br />on Washington</h2>
          <p className="bt">
            <span className="dc">A</span>mericans are tired. Tired of a Congress that talks and never acts.
            Tired of leaders who campaign on promises and govern by inertia. The real, material problems facing
            working families &mdash; stagnant wages, hollowed-out industries, a rigged economy &mdash; go
            ignored cycle after cycle.
          </p>
          <p className="bt">
            The New American System is not another think tank. <strong>We are a do-tank.</strong> We exist to
            build the coalition that will finally force Washington to confront the issues it has spent decades
            dodging. We are outsiders &mdash; and that is our greatest strength.
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }} className="rv">
          <Link to="/mission" className="btn btn-gold" style={{ fontSize: '.9rem', padding: '.8rem 2.5rem' }}>
            See How We Fight &rarr;
          </Link>
        </div>
      </section>

      {/* Congress */}
      <section className="sec sec-b congress" id="con">
        <div className="sec-in rv">
          <div className="sec-lbl">The Problem</div>
          <h2 className="sec-h" style={{ textAlign: 'center' }}>
            535 Congressmen.<br /><span className="red">Not All Fight for You.</span>
          </h2>
          <p className="csub">The America First Index holds every one accountable.</p>
          <CongressCanvas />
          <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
            <a href="https://americafirstindex.us" target="_blank" rel="noreferrer" className="btn btn-line">
              Explore the Index &rarr;
            </a>
          </div>
        </div>
      </section>

      <div className="cta-s rv">
        <p>Know the score before you vote.</p>
        <a href="#join" className="cta-s-btn">Get Index Updates &rarr;</a>
      </div>

      {/* AFI */}
      <section className="sec sec-b" id="idx">
        <div className="sec-in rv">
          <div className="sec-lbl">Data &amp; Accountability</div>
          <h2 className="sec-h" style={{ textAlign: 'center' }}>The America First Index</h2>
          <p className="bt" style={{ textAlign: 'center' }}>
            Every Republican in Congress rated <strong>1 to 100</strong> on whether they actually deliver on
            the America First promises they campaigned on. Trade. Manufacturing. Immigration. Financial
            accountability. <strong>No spin. No party loyalty. Just the data.</strong>
          </p>
          <div className="afi-row">
            {[['535', 'Members'], ['1–100', 'Scale'], ['30+', 'Key Votes'], ['100%', 'Transparent']].map(([val, lbl]) => (
              <div key={lbl} style={{ textAlign: 'center' }}>
                <div className="afi-v">{val}</div>
                <div className="afi-l">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsed */}
      <section className="sec sec-b" id="end">
        <div className="sec-in rv">
          <div className="sec-lbl">Endorsed Candidates</div>
          <h2 className="sec-h" style={{ textAlign: 'center' }}>Fighters We Stand Behind</h2>
          <div className="end-row">
            {ENDORSED.map((c) => (
              <div key={c.dist} className={c.classes}>
                <div className="ep"><span>{c.initials}</span></div>
                <h3>{c.name}</h3>
                <p className="er">{c.dist}</p>
                <p className="ed">{c.desc}</p>
                <div className={`eb ${c.status === 'won' ? 'won' : 'act'}`}>
                  {c.status === 'won' ? '✓ Won Primary' : '● Active Race'}
                </div>
              </div>
            ))}
          </div>
          <div className="map-link rv">
            <Link to="/endorsed-map" className="btn btn-line" style={{ fontSize: '.75rem' }}>
              View Endorsed Candidates Map &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* News / Gazette */}
      <section className="sec sec-b news-bg" id="nws">
        <div className="sec-in">
          <div className="rv">
            <div className="gazette-rule-thin"></div>
            <div className="gazette-rule"></div>
            <div className="gazette-masthead">The Gazette</div>
            <div className="gazette-rule"></div>
            <div className="gazette-date">
              Vol. I &middot; No. 1 &emsp; &#9830; &emsp; April 2026 &emsp; &#9830; &emsp; Published by the New American System
            </div>
            <div className="gazette-rule"></div>
            <div className="gazette-rule-thin"></div>
          </div>

          <article className="feat-article rv">
            <div className="feat-body">
              <span className="nf-tag">Featured</span>
              <h3 className="feat-head">The End of Racial Redistricting in America</h3>
              <p className="feat-byline">By Toby Blair</p>
              <p className="feat-deck">
                The Supreme Court is poised to fundamentally reshape how America draws its congressional maps.
                What the end of race-based redistricting means for representation, for the South, and for the
                future of the Republic.
              </p>
              <p className="nf-meta">April 2026 &middot; 12 Min Read</p>
            </div>
          </article>

          <div className="nf-continued">Continued &mdash; Page 2, Col. 1</div>
          <div className="news-rule-h rv"></div>

          <div className="news-grid rv">
            <div className="news-main">
              <div className="col-marker">Top Stories</div>
              <article>
                <h3 className="ns-head">The Midterm Convention: What It Means for America First</h3>
                <p className="ns-text">
                  The RNC is planning an unprecedented midterm convention in Dallas this fall. We break down
                  what it means and how NAS is positioning to make an impact.
                </p>
                <p className="nf-meta">April 2026 &middot; 8 Min Read</p>
                <div className="nf-rule"></div>
              </article>
              <article>
                <h3 className="ns-head">America First Index: Methodology Preview</h3>
                <p className="ns-text">
                  We are building the most transparent congressional scorecard in the country. A first look at
                  how we rate all 535 members.
                </p>
                <p className="nf-meta">March 2026 &middot; 5 Min Read</p>
              </article>
            </div>
            <div className="news-r"></div>
            <div className="news-side">
              <h3 className="sb-head">Briefings</h3>
              {SIDEBAR_ITEMS.map((item) => (
                <div key={item.head} className="sb-item">
                  <h4>{item.head}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section className="sec" id="join">
        <div className="signup rv">
          <div className="sec-lbl" style={{ textAlign: 'center' }}>Subscribe</div>
          <h2>Sign Up for the Gazette</h2>
          <p>Policy updates. Index scores. Event invitations. All the news that matters, delivered straight to you.</p>
          <form className="sf" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" style={btnStyle}>{btnText}</button>
          </form>
          <p style={{ fontSize: '.4rem', color: 'var(--text-ghost)', marginTop: '.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <footer className="ft">
        <p>&copy; 2026 New American System &middot; 501(c)(4)</p>
        <p style={{ marginTop: '.2rem' }}><a href="#join">Join the Fight</a></p>
      </footer>
    </div>
  );
}
