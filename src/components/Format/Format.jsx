import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { formatItems } from '../../data/format'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Format.module.css'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Format() {
  const { t } = useTranslation()

  return (
    <section id="format" className={`section section--alt ${styles.format}`}>
      <div className="container">
        <SectionTitle
          eyebrow={t('format.eyebrow')}
          title={t('format.title')}
          subtitle={t('format.subtitle')}
        />

        <div className={styles.grid}>
          {formatItems.map((item, index) => {
            const Icon = item.icon
            const data = t(`format.items.${item.key}`)
            return (
              <motion.article
                key={item.key}
                className={styles.card}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <div className={styles.head}>
                  <span className={styles.label}>{data.label}</span>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon size={22} />
                  </span>
                </div>
                <h3 className={styles.title}>{data.title}</h3>
                <p className={styles.text}>{data.text}</p>
                <ul className={styles.bullets}>
                  {data.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
