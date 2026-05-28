import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Jury.module.css'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

const initialsOf = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

export default function Jury() {
  const { t } = useTranslation()
  const list = t('jury.list', [])

  return (
    <section id="jury" className={`section ${styles.jury}`}>
      <div className="container">
        <SectionTitle
          eyebrow={t('jury.eyebrow')}
          title={t('jury.title')}
          subtitle={t('jury.subtitle')}
        />

        <div className={styles.grid}>
          {list.map((member, index) => (
            <motion.article
              key={member.name}
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <span className={styles.photo} aria-hidden="true">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  initialsOf(member.name)
                )}
              </span>
              <span className={styles.role}>{member.role}</span>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.meta}>{member.meta}</p>
              <span className={styles.city}>{member.city}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
