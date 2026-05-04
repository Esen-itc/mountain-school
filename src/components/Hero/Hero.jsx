import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button/Button'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Hero.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { t, lang } = useTranslation()
  const meta = t('hero.meta', [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <motion.div
          key={`meta-${lang}`}
          className={styles.meta}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {meta.map((entry) => (
            <span key={entry} className={styles.metaItem}>
              {entry}
            </span>
          ))}
        </motion.div>

        <motion.h1
          key={`title-${lang}`}
          className={styles.title}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          dangerouslySetInnerHTML={{ __html: t('hero.title') }}
        />

        <div className={styles.bottom}>
          <motion.p
            key={`lead-${lang}`}
            className={styles.lead}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {t('hero.lead')}
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Button as="a" href="#register" variant="primary">
              {t('common.apply')}
              <ArrowRight size={18} />
            </Button>
            <Button as="a" href="#about" variant="ghost">
              {t('common.learnMore')}
            </Button>
          </motion.div>
        </div>

        <span className={styles.scroll} aria-hidden="true">
          Scroll
        </span>
      </div>
    </section>
  )
}
