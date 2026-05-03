'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutStrip from '@/components/AboutStrip'
import EventsSection from '@/components/EventsSection'
import HackathonSection from '@/components/HackathonSection'
import Footer from '@/components/Footer'
import { technicalEvents, nonTechnicalEvents, hackathon } from '@/lib/events'
import { motion } from 'framer-motion'
import styles from '@/styles/nexovate.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <HeroSection />
      <AboutStrip />

      <EventsSection
        category="technical"
        title="TECHNICAL EVENTS"
        events={technicalEvents}
      />

      <EventsSection
        category="nontechnical"
        title="NON-TECHNICAL EVENTS"
        events={nonTechnicalEvents}
      />

      <HackathonSection />

      {/* Contact Section — inline per spec */}
      <section className={styles.contactSection} id="contact" aria-label="Contact">
        <div className="container">
          <motion.h2
            className={styles.contactHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Have questions?
          </motion.h2>
          <motion.p
            className={styles.contactSubline}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            Club Ennovate · PESCE Mandya
          </motion.p>

          <motion.div
            className={styles.contactGrid}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            id="contact-grid"
          >
            {/* General enquiries */}
            <div className={styles.contactColumn}>
              <h3 className={styles.contactColumnTitle}>General Enquiries</h3>
              {[...technicalEvents, ...nonTechnicalEvents].map((e) => (
                <div key={e.id} className={styles.contactItem}>
                  <span className={styles.contactItemEvent}>{e.name}</span>
                  <span className={styles.contactItemName}>{e.lead}</span>
                  {e.contact.map((phone) => (
                    <span key={phone} className={styles.contactItemPhone}>{phone}</span>
                  ))}
                </div>
              ))}
            </div>

            {/* Hackathon enquiries */}
            <div className={styles.contactColumn}>
              <h3 className={styles.contactColumnTitle}>Hackathon Enquiries</h3>
              <div className={styles.contactItem}>
                <span className={styles.contactItemEvent}>{hackathon.name}</span>
                <span className={styles.contactItemName}>{hackathon.lead}</span>
                {hackathon.contact.map((phone) => (
                  <span key={phone} className={styles.contactItemPhone}>{phone}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
