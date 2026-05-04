import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Prizes.module.css'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Prizes() {
  const { t } = useTranslation()
  const list = t('prizes.list', [])

  return (
    <section id="prizes" className={`section section--dark ${styles.prizes}`}>
      <div className="container">
        <SectionTitle
          eyebrow={t('prizes.eyebrow')}
          title={t('prizes.title')}
          subtitle={t('prizes.subtitle')}
          onDark
        />

        <div className={styles.fundLine}>
          <span className={styles.fundLabel}>{t('prizes.fundLabel')}</span>
          <span className={styles.fundAmount}>{t('prizes.fundAmount')}</span>
          <span className={styles.fundNote}>{t('prizes.fundNote')}</span>
        </div>

        <div className={styles.grid}>
          {list.map((prize, index) => (
            <motion.article
              key={prize.title}
              className={`${styles.card} ${index === 0 ? styles.featured : ''}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <h3 className={styles.title}>{prize.title}</h3>
              <span className={styles.amount}>{prize.amount}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
