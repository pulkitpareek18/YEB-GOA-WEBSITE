import ScrollReveal from '../components/ScrollReveal'
import { leadership, coordinators, programHeads, coreTeam } from '../data/committee'
import styles from './Committee.module.css'

const groups = [
  { label: 'Leadership Team', data: leadership },
  { label: 'Coordinator & Advisor', data: coordinators },
  { label: 'Program Head', data: programHeads },
  { label: 'Core Team', data: coreTeam },
]

export default function Committee() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.heroContent}>
              <div className="section-eyebrow" style={{ color: 'var(--gold)' }}>The People Behind YEB</div>
              <h1 className={styles.heroTitle}>The Committee</h1>
              <div className="gold-line" />
              <p className={styles.heroDesc}>
                Distinguished faculty and staff members of BITS Pilani who
                bring the Young Entrepreneurs' BootCamp to life.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COMMITTEE GROUPS */}
      {groups.map((group, gi) => (
        <section
          key={gi}
          className="section"
          style={{ background: gi % 2 === 1 ? 'var(--gray-50)' : undefined }}
        >
          <div className="container">
            <ScrollReveal>
              <div className={styles.groupHeader}>
                <div className="section-eyebrow">{`0${gi + 1}`}</div>
                <h2>{group.label}</h2>
                <div className="gold-line" />
              </div>
            </ScrollReveal>

            <div className={styles.memberGrid}>
              {group.data.map((member, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className={styles.memberCard}>
                    <div className={styles.memberPhoto}>
                      <img src={member.photo} alt={member.name} />
                    </div>
                    <h4 className={styles.memberName}>{member.name}</h4>
                    <span className={styles.memberRole}>{member.role}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
