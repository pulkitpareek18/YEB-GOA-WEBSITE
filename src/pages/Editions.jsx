import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import styles from './Editions.module.css'

const photos = [
  'https://www.bits-pilani.ac.in/wp-content/uploads/YEB-Event-Photos-1.jpg',
  'https://www.bits-pilani.ac.in/wp-content/uploads/YEB-Event-Photos-2.jpg',
  'https://www.bits-pilani.ac.in/wp-content/uploads/YEB-Event-Photos-3.jpg',
  'https://www.bits-pilani.ac.in/wp-content/uploads/YEB-Event-Photos-4.jpg',
  'https://www.bits-pilani.ac.in/wp-content/uploads/YEB-Event-Photos-5.jpg',
  'https://www.bits-pilani.ac.in/wp-content/uploads/YEB-Event-Photos-6.jpg',
]

export default function Editions() {
  const [active, setActive] = useState(0)

  const next = () => setActive((active + 1) % photos.length)
  const prev = () => setActive((active - 1 + photos.length) % photos.length)

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <div className="section-eyebrow" style={{ color: 'var(--gold)' }}>12 Editions & Counting</div>
            <h1 className={styles.heroTitle}>Glimpses of YEB</h1>
            <div className="gold-line" />
            <p className={styles.heroDesc}>
              Moments captured across twelve editions of the Young Entrepreneurs' BootCamp
              at BITS Pilani, Goa Campus.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className={styles.carousel}>
              <div className={styles.carouselMain}>
                <img src={photos[active]} alt="YEB Event" className={styles.carouselImg} />
                <div className={styles.carouselOverlay}>
                  <span className={styles.carouselCount}>{active + 1} / {photos.length}</span>
                </div>
                <button className={`${styles.carouselBtn} ${styles.carouselPrev}`} onClick={prev} aria-label="Previous">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button className={`${styles.carouselBtn} ${styles.carouselNext}`} onClick={next} aria-label="Next">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>

              <div className={styles.thumbs}>
                {photos.map((src, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
                    onClick={() => setActive(i)}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GRID */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">Gallery</div>
              <h2>More Moments</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>
          <div className={styles.grid}>
            {photos.map((src, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={styles.gridItem} onClick={() => { setActive(i); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                  <img src={src} alt="YEB Event" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
