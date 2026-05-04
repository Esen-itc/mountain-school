import { useTranslation } from '../../i18n/useTranslation'
import styles from './LanguageSwitcher.module.css'

const LANGS = [
  { code: 'ru', label: 'RU', aria: 'Русский' },
  { code: 'en', label: 'EN', aria: 'English' },
]

export default function LanguageSwitcher({ variant = 'dark', className = '' }) {
  const { lang, setLang } = useTranslation()

  const classes = [
    styles.switcher,
    variant === 'light' ? styles.light : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} data-active={lang} role="group" aria-label="Language">
      <span className={styles.pill} aria-hidden="true" />
      {LANGS.map((item) => {
        const active = item.code === lang
        return (
          <button
            key={item.code}
            type="button"
            className={`${styles.option} ${active ? styles.active : ''}`}
            onClick={() => setLang(item.code)}
            aria-pressed={active}
            aria-label={item.aria}
          >
            <span className={styles.label}>{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}
