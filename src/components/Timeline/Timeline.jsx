import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Timeline.module.css'

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Timeline() {
  const { t } = useTranslation()
  const list = t('timeline.list', [])

  return (
    <section id="timeline" className={`section section--alt ${styles.timeline}`}>
      <div className="container">
        <SectionTitle
          eyebrow={t('timeline.eyebrow')}
          title={t('timeline.title')}
          subtitle={t('timeline.subtitle')}
        />

        <div className={styles.list}>
          {list.map((step, index) => (
            <motion.article
              key={step.title}
              className={styles.item}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div>
                <span className={styles.period}>{step.period}</span>
                <h3 className={styles.title}>{step.title}</h3>
              </div>
              <p className={styles.text}>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
