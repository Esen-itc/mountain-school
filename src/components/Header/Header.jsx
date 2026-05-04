import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button/Button'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { navLinks } from '../../data/navigation'
import { useTranslation } from '../../i18n/useTranslation'
import useScrollLock from '../../hooks/useScrollLock'
import styles from './Header.module.css'

export default function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useScrollLock(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <a
            href="#hero"
            className={styles.brand}
            aria-label={t('common.brandName')}
          >
            <span className={styles.brandMark}>{t('common.brandName')}</span>
            <span className={styles.brandSub}>{t('common.brandSub')}</span>
          </a>

          <nav className={styles.nav} aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                <span className={styles.navLabel}>{t(link.tKey)}</span>
              </a>
            ))}
          </nav>

          <div className={styles.tools}>
            <LanguageSwitcher className={styles.desktopLang} />
            <Button
              as="a"
              href="#register"
              variant="primary"
              className={styles.cta}
            >
              {t('common.apply')}
            </Button>
            <button
              type="button"
              className={styles.toggle}
              onClick={() => setOpen(true)}
              aria-label={t('common.openMenu')}
              aria-expanded={open}
              aria-controls="mobile-nav-panel"
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-panel"
            className={styles.mobilePanel}
            role="dialog"
            aria-modal="true"
            aria-label={t('common.brandName')}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mobileTop}>
              <span className={styles.brand}>
                <span className={styles.brandMark}>{t('common.brandName')}</span>
                <span className={styles.brandSub}>{t('common.brandSub')}</span>
              </span>
              <button
                type="button"
                className={styles.toggle}
                onClick={close}
                aria-label={t('common.closeMenu')}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <nav className={styles.mobileNav} aria-label="Mobile">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={close}>
                  {t(link.tKey)}
                </a>
              ))}
            </nav>
            <div className={styles.mobileFooter}>
              <LanguageSwitcher className={styles.mobileLang} />
              <Button
                as="a"
                href="#register"
                variant="primary"
                fullWidth
                onClick={close}
              >
                {t('common.apply')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
