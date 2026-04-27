import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Mission.css';

export default function Mission() {
  const pageRef = useRef(null);
  useReveal(pageRef);

  return (
    <div ref={pageRef}>
      <Header backLink="/" backLabel="← Home" />

      <div className="mission-page">

        {/* Hero */}
        <div className="page-hero rv">
          <p className="lbl" style={{ textAlign: 'center' }}>Our Mission</p>
          <h1 className="ph-title">
            <span className="ph-line1">Politics Is a Numbers Game.</span>
            <span className="ph-divider"></span>
            <span className="ph-line3">We Make the Numbers Add Up.</span>
          </h1>
        </div>

        {/* The Problem */}
        <div className="prose prose-b rv">
          <h2>The Problem Is Not Ideas. It&rsquo;s Math.</h2>
          <p>
            <span className="dc">E</span>very election cycle, Americans hear the same promises from the same
            politicians. Secure the border. Reshore manufacturing. Cut spending. Stand up to China. And every
            cycle, nothing changes. Not because these ideas are unpopular &mdash; they&rsquo;re wildly popular
            &mdash; but because the political math doesn&rsquo;t demand action.
          </p>
          <p>
            Members of Congress respond to <strong>organized pressure</strong>, not public opinion polls. A
            congressman who gets 2,000 calls in a week about healthcare will vote differently than one who sees
            a poll saying 70% of Americans want lower drug prices. The calls are a threat. The poll is a
            statistic. Washington runs on threats.
          </p>
          <p>
            The America First agenda has the ideas. It has the voters. What it has lacked is the{' '}
            <strong>organized infrastructure</strong> to turn those voters into the kind of sustained,
            district-level pressure that actually moves legislation. That&rsquo;s what we build.
          </p>
        </div>

        {/* Numbers */}
        <div className="prose prose-b rv">
          <h2>The Numbers That Matter</h2>
          <p>
            Understanding how politics actually works means understanding the numbers that drive outcomes. Not
            polling numbers. Not Twitter followers. The numbers that determine whether a congressman votes your
            way or sells you out.
          </p>

          <div className="num-row rv">
            <div className="num-card rv-d1">
              <div className="nv">3%</div>
              <div className="nl">Primary Turnout</div>
              <p>In most congressional districts, only 3-8% of registered voters show up for the primary. That&rsquo;s the entire electorate that picks your congressman.</p>
            </div>
            <div className="num-card rv-d2">
              <div className="nv">218</div>
              <div className="nl">Votes to Pass a Bill</div>
              <p>You only need 218 House votes to pass legislation. Right now, most America First bills can&rsquo;t get there. We&rsquo;re working to change the roster.</p>
            </div>
            <div className="num-card rv-d3">
              <div className="nv">$0</div>
              <div className="nl">Cost of a Phone Call</div>
              <p>A coordinated phone campaign from 500 constituents costs nothing and is more effective than a $50,000 ad buy. Organization beats money.</p>
            </div>
          </div>

          <p>
            This is why we exist. Not to publish another white paper. Not to host another panel discussion.
            But to build the organized, on-the-ground infrastructure that turns America First support into{' '}
            <strong>America First votes</strong> in the chambers that matter.
          </p>
        </div>

        {/* How We Fight */}
        <div className="prose prose-b rv">
          <h2>How We Fight</h2>

          <div className="pillar-grid">
            <div className="pillar rv rv-d1">
              <div className="pillar-num">01</div>
              <h3>Accountability Through Data</h3>
              <p>
                The America First Index is our flagship tool: every Republican in Congress rated 1 to 100 on
                whether they actually deliver on the promises they made to get elected. Trade policy. Domestic
                manufacturing. Immigration enforcement. Financial accountability. Too many so-called
                conservatives campaign as fighters and govern as rubber stamps.{' '}
                <strong>We publish the scores so primary voters know exactly who is fighting for them and who
                is hoping you won&rsquo;t notice.</strong>
              </p>
            </div>

            <div className="pillar rv rv-d2">
              <div className="pillar-num">02</div>
              <h3>Grassroots Pressure</h3>
              <p>
                We organize at the district level. Events, content, and community organizing that transforms
                ideas into political power. We show up at conventions, in districts, and at the ballot box. We
                endorse candidates, deploy volunteers, and run the kind of{' '}
                <strong>ground game</strong> that Washington consultants tell you doesn&rsquo;t matter anymore
                (it does).
              </p>
            </div>

            <div className="pillar rv rv-d3">
              <div className="pillar-num">03</div>
              <h3>Policy Building</h3>
              <p>
                We work with experts throughout sectors to find the{' '}
                <strong>best and most realistic paths forward on policy</strong>. Not wishful thinking. Not
                campaign slogans. Real, actionable policy frameworks developed by people who understand the
                industries, the regulations, and the politics &mdash; then translated into language that voters
                can rally behind and legislators can actually pass.
              </p>
            </div>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="pull-quote rv">
          <p>&ldquo;We&rsquo;re not a think tank. We&rsquo;re a do-tank. The difference is that think tanks tell you what&rsquo;s wrong. We go fix it.&rdquo;</p>
          <cite>&mdash; New American System</cite>
        </div>

        {/* What We're Not */}
        <div className="prose prose-b rv">
          <h2>What We&rsquo;re Not</h2>
          <p>
            We are not a PAC. We don&rsquo;t cut checks to politicians and hope they remember us. We are not a
            media company, although we produce content. We are not a lobbying firm, although we apply pressure.
          </p>
          <p>
            We are a <strong>501(c)(4) advocacy organization</strong> &mdash; a do-tank built to do one thing:
            make the political math work for the America First agenda. We identify the races that matter,
            endorse the candidates who will fight, deploy the volunteers who will win, and publish the data that
            holds everyone accountable after they&rsquo;re in office.
          </p>
          <p>
            Washington has spent decades building infrastructure to protect the status quo. We are building the
            infrastructure to <strong>tear it down</strong>.
          </p>
        </div>

        {/* CTA */}
        <div className="page-cta rv">
          <h2>Ready to Change the Math?</h2>
          <p>Join the coalition. Get the data. Hold them accountable.</p>
          <Link to="/#join" className="btn btn-gold">Join the Fight &rarr;</Link>
        </div>

      </div>

      <Footer homeLink="/" joinLink="/#join" />
    </div>
  );
}
