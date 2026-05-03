'use client'

import { motion } from 'framer-motion'
import { hackathon } from '@/lib/events'
import styles from '@/styles/nexovate.module.css'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' as const },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

export default function HackathonSection() {
  return (
    <section className={styles.hackathonSection} id="hackathon" aria-label="Hackathon">
      <div className="container">
        {/* Section heading */}
        <motion.div
          className={styles.sectionHeadingRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className={styles.sectionHeading}>HACKATHON</h2>
          <span className={styles.headingRule} aria-hidden="true" />
        </motion.div>

        {/* Feature card */}
        <motion.div className={styles.hackCard} {...fadeUp(0.1)} id="hack-card">
          {/* Header row */}
          <div className={styles.hackHeader}>
            <div>
              <h3 className={styles.hackTitle}>{hackathon.name}</h3>
              <p className={styles.hackSubtitle}>Intensive Multi-Domain Hackathon</p>
            </div>
            <div className={styles.hackBadge}>
              <span className={styles.hackBadgeLg}>24 HR</span>
              <span className={styles.hackBadgeSm}>HACKATHON</span>
            </div>
          </div>

          {/* Description */}
          <p className={styles.hackDesc}>{hackathon.description}</p>

          {/* Domains */}
          <div className={styles.hackDomains}>
            <p className={styles.hackDomainsLabel}>Domains:</p>
            <ul className={styles.hackDomainList}>
              {hackathon.domains.map((d) => (
                <li key={d} className={styles.hackDomainItem}>
                  <span className={styles.hackBullet}>●</span> {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Meta */}
          <div className={styles.hackMeta}>
            <span className={styles.hackMetaItem}>Team: {hackathon.teamSize} members</span>
            <span className={styles.hackMetaItem}>Prize: {hackathon.prizePool}</span>
          </div>

          {/* Contact */}
          <div className={styles.hackContact}>
            <p className={styles.leadName}>Lead: {hackathon.lead}</p>
            <p className={styles.contactPhone}>
              {hackathon.contact.join(', ')}
            </p>
          </div>

          {/* CTA */}
          <a href="#" className={styles.hackCta} id="hack-register-cta">
            Register for Hackathon →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
