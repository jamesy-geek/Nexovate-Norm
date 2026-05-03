'use client'

import { motion } from 'framer-motion'
import { Event } from '@/lib/events'
import EventCard from './EventCard'
import styles from '@/styles/nexovate.module.css'

interface EventsSectionProps {
  category: 'technical' | 'nontechnical'
  title: string
  events: Event[]
}

export default function EventsSection({ category, title, events }: EventsSectionProps) {
  const tagColor = category === 'technical' ? 'tech' : 'nontech'
  const sectionId = `events-${category}`

  return (
    <section className={styles.eventsSection} id={sectionId} aria-label={title}>
      <div className="container">
        {/* Section heading with rule line */}
        <motion.div
          className={styles.sectionHeadingRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className={styles.sectionHeading}>{title}</h2>
          <span className={styles.headingRule} aria-hidden="true" />
        </motion.div>

        {/* Card grid */}
        <div className={styles.cardGridWrapper}>
          <div className={styles.cardGrid}>
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} tagColor={tagColor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
