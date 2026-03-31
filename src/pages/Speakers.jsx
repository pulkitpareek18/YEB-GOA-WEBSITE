import ScrollReveal from '../components/ScrollReveal'
import { chiefGuest, speakers, speakerPosters } from '../data/speakers'
import styles from './Speakers.module.css'

export default function Speakers() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.heroContent}>
              <div className="section-eyebrow" style={{ color: 'var(--gold)' }}>Meet the Experts</div>
              <h1 className={styles.heroTitle}>Our Speakers</h1>
              <div className="gold-line" />
              <p className={styles.heroDesc}>
                Industry leaders, founders, and innovators sharing their journeys
                to inspire the next generation of entrepreneurs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CHIEF GUEST */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">Chief Guest</div>
              <h2>Guest of Honour</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.chiefCard}>
              <div className={styles.chiefPhoto}>
                <img src={chiefGuest.photo} alt={chiefGuest.name} />
              </div>
              <div className={styles.chiefInfo}>
                <h3 className={styles.chiefName}>{chiefGuest.name}</h3>
                <span className={styles.chiefRole}>{chiefGuest.role}</span>
                <p className={styles.chiefDesc}>{chiefGuest.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SPEAKER GRID */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">Speakers</div>
              <h2>Industry Leaders & Mentors</h2>
              <div className="gold-line" />
              <p>Accomplished professionals guiding young minds through entrepreneurship and innovation.</p>
            </div>
          </ScrollReveal>

          <div className={styles.speakerGrid}>
            {speakers.map((s, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={styles.speakerCard}>
                  <div className={styles.speakerPhoto}>
                    <img src={s.photo} alt={s.name} />
                  </div>
                  <div className={styles.speakerInfo}>
                    <h4 className={styles.speakerName}>{s.name}</h4>
                    <span className={styles.speakerRole}>{s.role}</span>
                    <p className={styles.speakerDesc}>{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKER POSTERS */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">Sessions</div>
              <h2>Speaker Sessions</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>

          <div className={styles.posterGrid}>
            {speakerPosters.map((src, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className={styles.posterItem}>
                  <img src={src} alt={`Speaker session ${i + 1}`} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
