'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/nexovate.module.css'

const stats = [
  { value: '₹2,10,000+', label: 'Prize Pool' },
  { value: '10 Events', label: 'Categories' },
  { value: '2 Days', label: 'May 4–5' },
]

export default function AboutStrip() {
  return (
    <section className={styles.aboutStrip} id="about" aria-label="Key stats">
      <div className={`${styles.aboutInner} container`}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.statPill}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
            id={`stat-${i}`}
          >
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
