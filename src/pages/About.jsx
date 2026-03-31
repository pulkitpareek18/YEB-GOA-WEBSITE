import ScrollReveal from '../components/ScrollReveal'
import { programOffers, handsOn, eventPhotos } from '../data/program'
import styles from './About.module.css'

const UNICORNS_IMG = 'https://www.bits-pilani.ac.in/wp-content/uploads/BITSIAN_Unicorns.png'

const unicorns = [
  'Swiggy', 'bigbasket', 'Postman', 'Netskope', 'Groww',
  'Zeta', 'Eruditus', 'FalconX', 'MPL Sports', 'Oxyzo',
  'ofBusiness', 'AlphaSense', 'Molbio', 'Maser Group', 'Akamai',
  'Zenoti', 'Hippocratic AI',
]

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.heroContent}>
              <div className="section-eyebrow" style={{ color: 'var(--gold)' }}>About the Program</div>
              <h1 className={styles.heroTitle}>About YEB</h1>
              <div className="gold-line" />
              <p className={styles.heroDesc}>
                A transformative 6-day residential bootcamp at BITS Pilani, K K Birla Goa Campus,
                nurturing the next generation of innovators and entrepreneurs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROGRAM OFFERS */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">What We Offer</div>
              <h2>The YEB Experience</h2>
              <div className="gold-line" />
              <p>Seven pillars of experiential learning designed to spark innovation in young minds.</p>
            </div>
          </ScrollReveal>

          <div className={styles.programGrid}>
            {programOffers.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={styles.programCard}>
                  <span className={styles.programIndex}>0{i + 1}</span>
                  <h4 className={styles.programTitle}>{item.title}</h4>
                  <p className={styles.programDesc}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HANDS-ON */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">Labs & Workshops</div>
              <h2>Hands-On Learning</h2>
              <div className="gold-line" />
              <p>Interactive sessions that bring theory to life through practical exploration.</p>
            </div>
          </ScrollReveal>

          <div className={styles.handsOnGrid}>
            {handsOn.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={styles.handsOnCard}>
                  <span className={styles.handsOnIcon}>{item.icon}</span>
                  <h4 className={styles.handsOnTitle}>{item.title}</h4>
                  <p className={styles.handsOnDesc}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BITS LEGACY */}
      <section className={styles.legacy}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.legacyInner}>
              <div className={styles.legacyText}>
                <div className="section-eyebrow" style={{ color: 'var(--gold)' }}>The BITS Advantage</div>
                <h2 className={styles.legacyTitle}>A Legacy of Entrepreneurial Excellence</h2>
                <div className="gold-line" />
                <p className={styles.legacyDesc}>
                  With 111 BITSian startups in India, 17 BITSian unicorns, and over $21 Billion
                  raised by 126 alumni startups in the last 2 years alone, BITS Pilani has one of
                  the strongest entrepreneurial ecosystems in the world. Total valuation exceeds $52 Billion.
                </p>
                <div className={styles.unicornTags}>
                  {unicorns.map((name, i) => (
                    <span key={i} className={styles.unicornTag}>{name}</span>
                  ))}
                </div>
              </div>
              <div className={styles.legacyImg}>
                <img src={UNICORNS_IMG} alt="BITSIAN Unicorns" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">Gallery</div>
              <h2>Moments from YEB</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>

          <div className={styles.gallery}>
            {eventPhotos.map((src, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={styles.galleryItem}>
                  <img src={src} alt={`YEB Event ${i + 1}`} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
