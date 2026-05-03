import styles from '@/styles/nexovate.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer" aria-label="Footer">
      <div className={`${styles.footerInner} container`}>
        <p className={styles.footerCopy}>
          © 2026 Club Ennovate, PESCE Mandya. All rights reserved.
        </p>
        <p className={styles.footerWordmark}>NEXOVATE</p>
      </div>
    </footer>
  )
}
