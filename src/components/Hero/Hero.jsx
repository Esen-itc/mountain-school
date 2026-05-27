import { motion } from 'framer-motion'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Hero.module.css'

export default function Hero() {
  const { t, lang } = useTranslation()

  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        className={styles.bg}
        aria-hidden="true"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <motion.div
        key={`hero-card-${lang}`}
        className={styles.card}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.eyebrow}>{t('hero.card.eyebrow')}</span>

        <h1 className={styles.title}>{t('hero.card.title')}</h1>

        <p className={styles.subtitle}>{t('hero.card.subtitle')}</p>

        <div className={styles.prize}>
          <span className={styles.prizeLabel}>
            {t('hero.card.prizeLabel')}
          </span>
          <span className={styles.prizeAmount}>
            {t('hero.card.prizeAmount')}
          </span>
        </div>

        <p className={styles.deadline}>
          <span className={styles.deadlineLabel}>
            {t('hero.card.deadlineLabel')}
          </span>{' '}
          <span className={styles.deadlineDate}>
            {t('hero.card.deadlineDate')}
          </span>
        </p>

        <a href="#register" className={styles.cta}>
          {t('hero.card.cta')}
        </a>
      </motion.div>
    </section>
  )
}
