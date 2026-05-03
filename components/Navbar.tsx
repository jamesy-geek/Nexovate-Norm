'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/nexovate.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#events-technical', label: 'Events' },
    { href: '#hackathon', label: 'Hackathon' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={styles.navbar}>
      <div className={`${styles.navInner} container`}>
        {/* Wordmark */}
        <a href="#" className={styles.navWordmark} id="nav-logo">NEXOVATE</a>

        {/* Desktop links */}
        <nav className={styles.navLinks} aria-label="Main navigation">
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.navLink}>{l.label}</a>
          ))}
          <a href="#" className={styles.navCta} id="nav-register-cta">Register Now</a>
        </nav>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          id="hamburger-btn"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileDrawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            id="mobile-drawer"
          >
            <nav className={styles.drawerLinks}>
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className={styles.drawerLink}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a href="#" className={styles.navCta} id="mobile-register-cta" onClick={() => setOpen(false)}>
                Register Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
