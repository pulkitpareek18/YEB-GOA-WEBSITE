import ScrollReveal from '../components/ScrollReveal'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <div className="section-eyebrow" style={{ color: 'var(--gold)' }}>Get in Touch</div>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <div className="gold-line" />
            <p className={styles.heroDesc}>
              Have questions about YEB 2026? Reach out and we'll get back to you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="container">
          <div className={styles.cards}>
            <ScrollReveal>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <h3>Email</h3>
                <a href="mailto:yeb@goa.bits-pilani.ac.in" className={styles.cardLink}>
                  yeb@goa.bits-pilani.ac.in
                </a>
                <p className={styles.cardNote}>Best way to reach us</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h3>Phone</h3>
                <p className={styles.cardText}>
                  <a href="tel:08322580475">0832 258 0475</a>
                </p>
                <p className={styles.cardText}>
                  <a href="tel:08322580474">0832 258 0474</a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
