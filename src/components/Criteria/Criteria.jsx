import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Criteria.module.css'

const cellVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Criteria() {
  const { t } = useTranslation()
  const list = t('criteria.list', [])

  return (
    <section id="criteria" className={`section ${styles.criteria}`}>
      <div className="container">
        <SectionTitle
          eyebrow={t('criteria.eyebrow')}
          title={t('criteria.title')}
          subtitle={t('criteria.subtitle')}
        />

        <div className={styles.grid}>
          {list.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.cell}
              variants={cellVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <span className={styles.score}>{item.score}</span>
              <span className={styles.title}>{item.title}</span>
            </motion.div>
          ))}
        </div>

        <p className={styles.caption}>{t('criteria.caption')}</p>
      </div>
    </section>
  )
}
