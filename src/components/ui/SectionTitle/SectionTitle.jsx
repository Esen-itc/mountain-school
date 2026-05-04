import { motion } from 'framer-motion'
import styles from './SectionTitle.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  onDark = false,
}) {
  const classes = [
    styles.wrapper,
    align === 'center' ? styles.center : '',
    onDark ? styles.onDark : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <motion.div
      className={classes}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  )
}
