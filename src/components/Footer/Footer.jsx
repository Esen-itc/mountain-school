import { Mail } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import InstagramIcon from '../ui/icons/InstagramIcon'
import TelegramIcon from '../ui/icons/TelegramIcon'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Footer.module.css'

const CONTACT_EMAIL = 'hello@mountainschool.kg'
const CONTACT_INSTAGRAM = 'mountainschool.kg'
const CONTACT_TELEGRAM = 'mountainschool_kg'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandName}>{t('common.brandName')}</span>
            <p className={styles.brandText}>{t('footer.tagline')}</p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={styles.colTitle}>{t('footer.navTitle')}</span>
              <div className={styles.navGrid}>
                <div className={styles.navColumn}>
                  {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
                    <a key={link.id} href={`#${link.id}`}>
                      {t(link.tKey)}
                    </a>
                  ))}
                </div>
                <div className={styles.navColumn}>
                  {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
                    <a key={link.id} href={`#${link.id}`}>
                      {t(link.tKey)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <span className={styles.colTitle}>{t('footer.contactsTitle')}</span>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail size={14} aria-hidden="true" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <a
                href={`https://instagram.com/${CONTACT_INSTAGRAM}`}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon aria-hidden="true" />
                <span>@{CONTACT_INSTAGRAM}</span>
              </a>
              <a
                href={`https://t.me/${CONTACT_TELEGRAM}`}
                target="_blank"
                rel="noreferrer"
              >
                <TelegramIcon aria-hidden="true" />
                <span>@{CONTACT_TELEGRAM}</span>
              </a>
              <a href="#register">{t('common.apply')}</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.city')}</span>
        </div>
      </div>
    </footer>
  )
}
