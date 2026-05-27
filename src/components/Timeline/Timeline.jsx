import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ClipboardList, Gavel, Lightbulb, Send, Trophy } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Timeline.module.css'

const STEPS_META = [
  { icon: ClipboardList, start: '2026-05-01', end: '2026-05-15' },
  { icon: Lightbulb, start: '2026-05-15', end: '2026-06-30' },
  { icon: Send, start: '2026-07-01', end: '2026-07-31' },
  { icon: Gavel, start: '2026-08-01', end: '2026-08-20' },
  { icon: Trophy, start: '2026-09-05', end: '2026-09-05' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function findCurrentIndex(meta) {
  const today = new Date().toISOString().slice(0, 10)
  for (let i = 0; i < meta.length; i += 1) {
    if (today >= meta[i].start && today <= meta[i].end) return i
  }
  if (today < meta[0].start) return -1
  return meta.length - 1
}

export default function Timeline() {
  const { t } = useTranslation()
  const list = t('timeline.list', [])
  const currentIndex = useMemo(() => findCurrentIndex(STEPS_META), [])

  return (
    <section id="timeline" className={`section section--alt ${styles.timeline}`}>
      <div className="container">
        <SectionTitle
          eyebrow={t('timeline.eyebrow')}
          title={t('timeline.title')}
          subtitle={t('timeline.subtitle')}
          align="center"
        />

        <div className={styles.row}>
          {list.map((step, index) => {
            const meta = STEPS_META[index]
            const Icon = meta?.icon ?? Trophy
            const isCurrent = index === currentIndex
            return (
              <motion.div
                key={step.title}
                className={`${styles.step} ${isCurrent ? styles.stepCurrent : ''}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <span className={styles.period}>{step.period}</span>
                <span
                  className={`${styles.iconCircle} ${isCurrent ? styles.iconCurrent : ''}`}
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.description}>{step.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
