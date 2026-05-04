import { motion } from 'framer-motion'
import {
  AlignLeft,
  BookOpen,
  Briefcase,
  FileText,
  Image as ImageIcon,
  Map,
  Trees,
  Users,
} from 'lucide-react'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Brief.module.css'

const programIcons = [BookOpen, Users, Briefcase, Trees]
const submitIcons = [FileText, Map, ImageIcon, AlignLeft]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Brief() {
  const { t } = useTranslation()
  const program = t('brief.program', [])
  const submit = t('brief.submit', [])

  return (
    <section id="brief" className={`section ${styles.brief}`}>
      <div className="container">
        <SectionTitle
          eyebrow={t('brief.eyebrow')}
          title={t('brief.title')}
        />

        <div className={styles.layout}>
          <motion.blockquote
            className={styles.quote}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {t('brief.quote')}
          </motion.blockquote>

          <div className={styles.lists}>
            <div className={styles.column}>
              <div className={styles.columnHead}>
                <span className={styles.columnTitle}>
                  {t('brief.programTitle')}
                </span>
              </div>
              <ul className={styles.list}>
                {program.map((item, index) => {
                  const Icon = programIcons[index] ?? BookOpen
                  return (
                    <li key={item}>
                      <span className={styles.iconWrap} aria-hidden="true">
                        <Icon size={16} />
                      </span>
                      <span className={styles.itemText}>{item}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className={styles.column}>
              <div className={styles.columnHead}>
                <span className={styles.columnTitle}>
                  {t('brief.submitTitle')}
                </span>
              </div>
              <ul className={styles.list}>
                {submit.map((item, index) => {
                  const Icon = submitIcons[index] ?? FileText
                  return (
                    <li key={item}>
                      <span className={styles.iconWrap} aria-hidden="true">
                        <Icon size={16} />
                      </span>
                      <span className={styles.itemText}>{item}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
