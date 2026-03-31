import ScrollReveal from '../components/ScrollReveal'
import styles from './Registration.module.css'

const APPLY_URL = 'https://docs.google.com/forms/d/1t9VzDlyOfpvct2aLa08ByhmYjNYsgh4R3j8XLteQB3c/edit'
const PAYMENT_URL = 'https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm'
const VIDEO_URL = 'https://www.youtube.com/embed/xUA0_Qpu4e4'

const feeIncludes = [
  'Accommodation on campus',
  'All meals during the program',
  'Campus facility access',
  'Lecture sessions with industry leaders',
  'Hands-on lab sessions',
  'Certificate of participation',
]

export default function Registration() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <div className="section-eyebrow" style={{ color: 'var(--gold)' }}>Join YEB 2026</div>
            <h1 className={styles.heroTitle}>Registration</h1>
            <div className="gold-line" />
            <p className={styles.heroDesc}>
              Register for the 13th edition of the Young Entrepreneurs' BootCamp at BITS Pilani, Goa Campus.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* REGISTRATION — SINGLE STEP */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">How to Register</div>
              <h2>Registration Process</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>

          <div className={styles.regCard}>
            <ScrollReveal>
              <div className={styles.regCardInner}>
                <div className={styles.regLeft}>
                  <div className={styles.regFee}>
                    <span className={styles.regCurrency}>&#8377;</span>
                    <span className={styles.regAmount}>500</span>
                  </div>
                  <div className={styles.regFeeLabel}>Registration Fee</div>
                </div>

                <div className={styles.regRight}>
                  <h3 className={styles.regTitle}>Apply for YEB 2026</h3>
                  <ul className={styles.regSteps}>
                    <li>
                      <span className={styles.stepNum}>1</span>
                      <span>Fill the online application form</span>
                    </li>
                    <li>
                      <span className={styles.stepNum}>2</span>
                      <span>Write your essay (100&ndash;150 words)</span>
                    </li>
                    <li>
                      <span className={styles.stepNum}>3</span>
                      <span>Pay &#8377;500 registration fee via SBI Collect</span>
                    </li>
                    <li>
                      <span className={styles.stepNum}>4</span>
                      <span>Submit and await selection results</span>
                    </li>
                  </ul>

                  <div className={styles.regBtns}>
                    <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
                      Apply Now &rarr;
                    </a>
                    <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-navy">
                      Pay Registration Fee &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Program fee note */}
            <ScrollReveal>
              <div className={styles.programNote}>
                <div className={styles.noteIcon}>&#9432;</div>
                <div>
                  <strong>After Selection:</strong> Selected students will be invited to join the 6-day residential program at &#8377;22,000 (covers accommodation, meals, campus facilities, all sessions, and certificate). This fee is only applicable after selection.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY & SELECTION */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className={styles.infoGrid}>
            <ScrollReveal>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>&#127891;</div>
                <h3>Eligibility</h3>
                <div className="gold-line" />
                <p>
                  Students currently enrolled in <strong>Grades 9 through 12</strong> from any recognized school board in India are eligible to apply.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>&#128221;</div>
                <h3>Selection Process</h3>
                <div className="gold-line" />
                <div className={styles.rounds}>
                  <div className={styles.round}>
                    <strong>Round 1 &mdash; Essay</strong>
                    <p>Write a 100&ndash;150 word essay. Two prompts to choose from in the application form.</p>
                  </div>
                  <div className={styles.round}>
                    <strong>Round 2 &mdash; Group Discussion</strong>
                    <p>Shortlisted applicants participate in a group discussion round conducted online.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT THE PROGRAM INCLUDES */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">For Selected Students</div>
              <h2>Program Includes</h2>
              <div className="gold-line" />
              <p>The &#8377;22,000 program fee (for selected candidates) covers the entire 6-day residential experience.</p>
            </div>
          </ScrollReveal>

          <div className={styles.includesGrid}>
            {feeIncludes.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={styles.includeCard}>
                  <div className={styles.includeCheck}>&#10003;</div>
                  <span>{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT GUIDE VIDEO */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-head center">
              <div className="section-eyebrow">Need Help?</div>
              <h2>Payment Guide</h2>
              <div className="gold-line" />
              <p>Watch this step-by-step guide to complete your payment via SBI Collect.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.videoWrap}>
              <iframe
                src={VIDEO_URL}
                title="YEB Payment Guide"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ color: '#fff', marginBottom: 16 }}>Ready to Apply?</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto 32px', fontSize: '1.05rem' }}>
              Register with &#8377;500. Selected candidates will be invited to join the 6-day residential program at BITS Pilani, Goa.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
                Apply Now &rarr;
              </a>
              <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white">
                Pay Registration Fee
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
