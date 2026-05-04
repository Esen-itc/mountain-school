import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { LanguageContext } from './translationContext'
import { DEFAULT_LANG, SUPPORTED_LANGS, translations } from './translations'

const STORAGE_KEY = 'mountainschool.lang'

function readStoredLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored
  } catch {
    /* ignore */
  }
  const browser = window.navigator?.language?.slice(0, 2)
  if (browser && SUPPORTED_LANGS.includes(browser)) return browser
  return DEFAULT_LANG
}

function getByPath(dict, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc == null) return undefined
    return acc[key]
  }, dict)
}

function setMeta(selector, attr, value) {
  if (!value) return
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

function syncDocumentHead(dict, lang) {
  document.documentElement.setAttribute('lang', lang)
  if (dict?.seo?.title) {
    document.title = dict.seo.title
    setMeta('meta[property="og:title"]', 'content', dict.seo.ogTitle ?? dict.seo.title)
    setMeta('meta[name="twitter:title"]', 'content', dict.seo.ogTitle ?? dict.seo.title)
  }
  if (dict?.seo?.description) {
    setMeta('meta[name="description"]', 'content', dict.seo.description)
    setMeta(
      'meta[property="og:description"]',
      'content',
      dict.seo.ogDescription ?? dict.seo.description,
    )
    setMeta(
      'meta[name="twitter:description"]',
      'content',
      dict.seo.ogDescription ?? dict.seo.description,
    )
  }
  setMeta('meta[property="og:locale"]', 'content', lang === 'ru' ? 'ru_RU' : 'en_US')
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => readStoredLang())

  useEffect(() => {
    syncDocumentHead(translations[lang], lang)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((next) => {
    if (SUPPORTED_LANGS.includes(next)) setLangState(next)
  }, [])

  const value = useMemo(() => {
    const dict = translations[lang]
    const t = (path, fallback = '') => {
      const value = getByPath(dict, path)
      return value === undefined ? fallback : value
    }
    return { lang, setLang, t, supported: SUPPORTED_LANGS }
  }, [lang, setLang])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
