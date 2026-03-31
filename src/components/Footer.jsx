import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <img
            src="https://www.bits-pilani.ac.in/wp-content/uploads/bits-k-k-birla-goa-campus-white-1-1.png"
            alt="BITS Pilani"
            className={styles.logo}
          />
          <p>An Institution Deemed to be University estd. vide Sec.3 of the UGC Act, 1956.</p>
        </div>

        <div className={styles.col}>
          <h4>Program</h4>
          <Link to="/about">About YEB</Link>
          <Link to="/about">What We Offer</Link>
          <Link to="/speakers">Speakers</Link>
          <Link to="/glimpses">Glimpses</Link>
        </div>

        <div className={styles.col}>
          <h4>Information</h4>
          <Link to="/committee">Committee</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <a href="https://docs.google.com/forms/d/1t9VzDlyOfpvct2aLa08ByhmYjNYsgh4R3j8XLteQB3c/edit" target="_blank" rel="noopener noreferrer">Apply Now</a>
          <a href="https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm" target="_blank" rel="noopener noreferrer">Payment Portal</a>
          <a href="https://www.youtube.com/watch?v=xUA0_Qpu4e4" target="_blank" rel="noopener noreferrer">Payment Guide</a>
          <a href="mailto:yeb@goa.bits-pilani.ac.in">Email Us</a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>&copy; 2026 BITS Pilani. All rights reserved.</span>
        <span>YEB &mdash; Young Entrepreneurs' BootCamp, Edition 13</span>
      </div>
    </footer>
  )
}
