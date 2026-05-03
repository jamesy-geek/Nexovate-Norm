'use client'

import { motion } from 'framer-motion'
import { Event } from '@/lib/events'
import styles from '@/styles/nexovate.module.css'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.06 },
  }),
}

interface EventCardProps {
  event: Event
  index: number
  tagColor: 'tech' | 'nontech'
}

export default function EventCard({ event, index, tagColor }: EventCardProps) {
  const tagBg = tagColor === 'tech' ? 'var(--tech-tag)' : 'var(--nontech-tag)'
  const tagText = tagColor === 'tech' ? 'var(--accent)' : 'var(--prize-gold)'

  return (
    <motion.article
      className={styles.eventCard}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={cardVariants}
      id={`event-card-${event.id}`}
    >
      {/* Top row: tag + prize */}
      <div className={styles.cardTopRow}>
        <span
          className={styles.categoryTag}
          style={{ background: tagBg, color: tagText }}
        >
          {event.category.toUpperCase()}
        </span>
        <span className={styles.prizeAmount}>{event.prizePool}</span>
      </div>

      {/* Event name */}
      <h3 className={styles.cardTitle}>{event.name}</h3>

      {/* Description */}
      <p className={styles.cardDesc}>{event.description}</p>

      {/* Team size */}
      <p className={styles.teamLine}>Team: {event.teamSize} members</p>

      {/* Divider */}
      <div className={styles.cardDivider} aria-hidden="true" />

      {/* Contact */}
      <p className={styles.leadName}>Lead: {event.lead}</p>
      {event.contact.map((phone) => (
        <p key={phone} className={styles.contactPhone}>{phone}</p>
      ))}
    </motion.article>
  )
}
