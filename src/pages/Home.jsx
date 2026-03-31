import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { chiefGuest, speakers } from '../data/speakers'
import styles from './Home.module.css'

const CAMPUS = 'https://www.bits-pilani.ac.in/wp-content/uploads/Bdome-YEB.webp'

const stats = [
  { num: '13th', label: 'Edition' },
  { num: '6', label: 'Days' },
  { num: '11+', label: 'Speakers' },
  { num: '5', label: 'Labs' },
]

const featured = [chiefGuest, ...speakers.slice(0, 2)]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={CAMPUS} alt="" />
        </div>
        <div className={styles.heroGrad} />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            {/* YEB Logo — large, prominent */}
            <img src="/images/yeb-logo.png" alt="YEB" className={styles.yebLogo} />

            {/* Headline */}
            <h1 className={styles.title}>
              Young{' '}<br />
              Entrepreneurs'{' '}<br />
              <span className={styles.titleGold}>BootCamp</span>
            </h1>

            <p className={styles.subtitle}>
              A 6-day residential innovation bootcamp for school students.<br />
              Design thinking. Industry mentors. Hands-on labs.
            </p>

            {/* Date & venue — premium inline strip */}
            <div className={styles.dateStrip}>
              <div className={styles.dateBlock}>
                <span className={styles.dateNum}>18</span>
                <span className={styles.dateSep}>&#8212;</span>
                <span className={styles.dateNum}>23</span>
              </div>
              <div className={styles.dateInfo}>
                <span className={styles.dateMonth}>May 2026</span>
                <span className={styles.dateVenue}>BITS Pilani, Goa Campus</span>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctas}>
              <Link to="/registration" className={styles.ctaPrimary}>
                Register Now
              </Link>
              <Link to="/about" className={styles.ctaGhost}>
                Explore Program
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className={styles.statsBar}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map((s, i) => (
            <div className={styles.stat} key={i}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className={styles.aboutTeaser}>
              <div className={styles.aboutText}>
                <div className="section-eyebrow">About YEB</div>
                <h2>Where Young Minds Meet Innovation</h2>
                <div className="gold-line" />
                <p>
                  YEB is a 6-day residential program for Grade 9-12 students, offering exposure to
                  design thinking, entrepreneurship workshops, hands-on labs, mentorship from industry
                  leaders, and the BITS Pilani YEB Innovation Pitching Challenge.
                </p>
                <Link to="/about" className="btn btn-outline" style={{ marginTop: 24 }}>
                  Explore the Program &rarr;
                </Link>
              </div>
              <div className={styles.aboutImg}>
                <img src="https://www.bits-pilani.ac.in/wp-content/uploads/YEB-Event-Photos-1.jpg" alt="YEB event" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FEATURED SPEAKERS ===== */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">Speakers</div>
              <h2>Learn from the Best</h2>
              <div className="gold-line" />
              <p>Industry leaders, founders, and innovators who will inspire the next generation.</p>
            </div>
          </ScrollReveal>
          <div className={styles.featuredGrid}>
            {featured.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={styles.featuredCard}>
                  <div className={styles.featuredImg}>
                    <img src={s.photo} alt={s.name} />
                    {i === 0 && <span className={styles.chiefBadge}>Chief Guest</span>}
                  </div>
                  <div className={styles.featuredInfo}>
                    <h4>{s.name}</h4>
                    <span className={styles.featuredRole}>{s.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/speakers" className="btn btn-navy">View All Speakers &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ color: '#fff', marginBottom: 16 }}>Ready to Begin Your Entrepreneurial Journey?</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto 32px', fontSize: '1.05rem' }}>
              Register with &#8377;500. Selected students join the 6-day residential program at BITS Pilani, Goa.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/registration" className="btn btn-gold btn-lg">Register Now &rarr;</Link>
              <Link to="/contact" className="btn btn-white">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
