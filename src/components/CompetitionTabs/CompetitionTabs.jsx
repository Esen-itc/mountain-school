import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import About from '../About/About'
import Brief from '../Brief/Brief'
import Prizes from '../Prizes/Prizes'
import Timeline from '../Timeline/Timeline'
import Criteria from '../Criteria/Criteria'
import Jury from '../Jury/Jury'
import Format from '../Format/Format'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './CompetitionTabs.module.css'

const TABS = [
  { id: 'about', labelKey: 'nav.about', Component: About },
  { id: 'brief', labelKey: 'nav.brief', Component: Brief },
  { id: 'prizes', labelKey: 'nav.prizes', Component: Prizes },
  { id: 'timeline', labelKey: 'nav.timeline', Component: Timeline },
  { id: 'criteria', labelKey: 'nav.criteria', Component: Criteria },
  { id: 'jury', labelKey: 'nav.jury', Component: Jury },
  { id: 'format', labelKey: 'nav.format', Component: Format },
]

export default function CompetitionTabs() {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState(TABS[0].id)

  useEffect(() => {
    const syncFromHash = (smooth) => {
      const id = window.location.hash.slice(1)
      if (TABS.some((tab) => tab.id === id)) {
        setActiveId(id)
        requestAnimationFrame(() => {
          document.getElementById('competition')?.scrollIntoView({
            behavior: smooth ? 'smooth' : 'auto',
            block: 'start',
          })
        })
      }
    }
    syncFromHash(false)
    const onHashChange = () => syncFromHash(true)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const Active = TABS.find((tab) => tab.id === activeId)?.Component

  return (
    <section id="competition" className={styles.section}>
      <div className={`container ${styles.bar}`}>
        <div className={styles.tabs} role="tablist" aria-label="Competition sections">
          {TABS.map((tab) => {
            const isActive = tab.id === activeId
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                onClick={() => setActiveId(tab.id)}
              >
                <span className={styles.tabLabel}>{t(tab.labelKey)}</span>
                {isActive && (
                  <motion.span
                    layoutId="competition-tab-indicator"
                    className={styles.indicator}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          className={styles.panel}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {Active && <Active />}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
