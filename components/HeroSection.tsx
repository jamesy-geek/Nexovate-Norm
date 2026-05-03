'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/nexovate.module.css'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
})

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      <div className={`${styles.heroContent} container`}>
        <motion.p className={styles.heroTag} {...fadeUp(0.05)} id="hero-tag">
          INTERCOLLEGIATE TECHNICAL FEST
        </motion.p>

        <motion.div className={styles.heroTitleRow} {...fadeUp(0.13)}>
          <h1 className={styles.heroTitle}>NEXOVATE</h1>
          <span className={styles.heroYear}>2026</span>
        </motion.div>

        <motion.p className={styles.heroSubline} {...fadeUp(0.21)} id="hero-subline">
          Powered by Club Ennovate · PESCE Mandya
        </motion.p>

        <motion.p className={styles.heroDates} {...fadeUp(0.29)} id="hero-dates">
          MAY 4–5, 2026
        </motion.p>

        <motion.div className={styles.heroCtas} {...fadeUp(0.37)}>
          <a href="#events-technical" className={styles.ctaPrimary} id="cta-explore">
            Explore Events ↓
          </a>
          <a href="#" className={styles.ctaOutline} id="cta-register">
            Register Now
          </a>
        </motion.div>
      </div>
      <div className={styles.heroRule} aria-hidden="true" />
    </section>
  )
}
