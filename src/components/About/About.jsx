import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { aboutItems } from '../../data/about'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './About.module.css'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionTitle eyebrow={t('about.eyebrow')} title={t('about.title')} />
            <p className={styles.lead}>{t('about.lead')}</p>
            <p className={styles.body}>{t('about.body')}</p>
          </div>

          <div className={styles.grid}>
            {aboutItems.map((item, index) => {
              const Icon = item.icon
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
                  <span className={styles.cardIcon} aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h3 className={styles.cardTitle}>
                    {t(`about.items.${item.key}.title`)}
                  </h3>
                  <p className={styles.cardText}>
                    {t(`about.items.${item.key}.text`)}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
