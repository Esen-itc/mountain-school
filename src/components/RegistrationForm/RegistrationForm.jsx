import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Mail, Send } from 'lucide-react'
import InstagramIcon from '../ui/icons/InstagramIcon'
import Button from '../ui/Button/Button'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import FormField from './FormField'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './RegistrationForm.module.css'

const emailPattern = /^[\w.!#$%&'*+/=?^`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/
const TEAM_FORMAT = 'team'
const CONTACT_EMAIL = 'hello@mountainschool.kg'
const CONTACT_INSTAGRAM = 'mountainschool.kg'

const easeOut = [0.22, 1, 0.36, 1]

const getOptionLabel = (options, value) =>
  options.find((option) => option.value === value)?.label ?? value

function createMailtoUrl({ to, subject, body }) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function RegistrationForm() {
  const { t, lang } = useTranslation()
  const [status, setStatus] = useState('idle') // idle | success

  const form = t('register.form')
  const errors_t = form.errors
  const countries = t('register.countries', [])
  const courses = t('register.courses', [])
  const formats = t('register.formats', [])
  const selectPlaceholder = form.selectPlaceholder

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      email: '',
      university: '',
      country: '',
      course: '',
      contact: '',
      format: '',
      teamMembers: '',
    },
  })

  const isTeam = useWatch({ control, name: 'format' }) === TEAM_FORMAT

  const onSubmit = (data) => {
    const isRussian = lang === 'ru'
    const submittedAt = new Intl.DateTimeFormat(isRussian ? 'ru-RU' : 'en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date())

    const rows = [
      [form.fullName.label, data.fullName.trim()],
      [form.email.label, data.email.trim()],
      [form.contact.label, data.contact.trim()],
      [form.university.label, data.university.trim()],
      [form.country.label, getOptionLabel(countries, data.country)],
      [form.course.label, getOptionLabel(courses, data.course)],
      [form.format.label, getOptionLabel(formats, data.format)],
    ]

    if (data.format === TEAM_FORMAT) {
      rows.push([form.teamMembers.label, data.teamMembers.trim()])
    }

    rows.push(
      [isRussian ? 'Язык формы' : 'Form language', lang.toUpperCase()],
      [isRussian ? 'Дата' : 'Date', submittedAt],
    )

    const body = [
      isRussian
        ? 'Здравствуйте! Хочу подать заявку на конкурс «Горная школа 2026».'
        : 'Hello! I would like to submit an application for the Mountain School 2026 contest.',
      '',
      ...rows.map(([label, value]) => `${label}: ${value}`),
    ].join('\n')

    window.location.assign(createMailtoUrl({
      to: CONTACT_EMAIL,
      subject: t('register.mailSubject'),
      body,
    }))

    setStatus('success')
    reset()
  }

  const resetToForm = () => {
    setStatus('idle')
  }

  const submitDisabled = isSubmitting

  return (
    <section id="register" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionTitle
              eyebrow={t('register.eyebrow')}
              title={t('register.title')}
              subtitle={t('register.subtitle')}
              onDark
            />
            <p className={styles.note}>{t('register.note')}</p>
            <div className={styles.contacts}>
              <span>{t('register.contactsLabel')}</span>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail size={16} aria-hidden="true" />
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
            </div>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                className={styles.success}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: easeOut }}
              >
                <span className={styles.successIcon} aria-hidden="true">
                  <Check size={28} strokeWidth={2.5} />
                </span>
                <h3 className={styles.successTitle}>
                  {t('register.success.title')}
                </h3>
                <p className={styles.successText}>{t('register.success.text')}</p>
                <Button type="button" variant="ghost" onClick={resetToForm}>
                  {t('register.success.again')}
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: easeOut }}
              >
                <FormField
                  label={form.fullName.label}
                  placeholder={form.fullName.placeholder}
                  required
                  autoComplete="name"
                  error={errors.fullName}
                  registration={register('fullName', {
                    required: errors_t.fullName,
                    minLength: { value: 2, message: errors_t.fullNameMin },
                  })}
                />

                <div className={styles.row}>
                  <FormField
                    label={form.email.label}
                    placeholder={form.email.placeholder}
                    required
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    error={errors.email}
                    registration={register('email', {
                      required: errors_t.email,
                      pattern: { value: emailPattern, message: errors_t.emailFormat },
                    })}
                  />
                  <FormField
                    label={form.contact.label}
                    placeholder={form.contact.placeholder}
                    required
                    autoComplete="tel"
                    error={errors.contact}
                    registration={register('contact', {
                      required: errors_t.contact,
                      minLength: { value: 4, message: errors_t.contactMin },
                    })}
                  />
                </div>

                <FormField
                  label={form.university.label}
                  placeholder={form.university.placeholder}
                  required
                  autoComplete="organization"
                  error={errors.university}
                  registration={register('university', {
                    required: errors_t.university,
                  })}
                />

                <div className={styles.row}>
                  <FormField
                    label={form.country.label}
                    as="select"
                    required
                    options={countries}
                    selectPlaceholder={selectPlaceholder}
                    error={errors.country}
                    registration={register('country', {
                      required: errors_t.country,
                    })}
                  />
                  <FormField
                    label={form.course.label}
                    as="select"
                    required
                    options={courses}
                    selectPlaceholder={selectPlaceholder}
                    error={errors.course}
                    registration={register('course', {
                      required: errors_t.course,
                    })}
                  />
                </div>

                <FormField
                  label={form.format.label}
                  as="select"
                  required
                  options={formats}
                  selectPlaceholder={selectPlaceholder}
                  error={errors.format}
                  registration={register('format', {
                    required: errors_t.format,
                  })}
                />

                <AnimatePresence initial={false}>
                  {isTeam && (
                    <motion.div
                      key="team"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: easeOut }}
                    >
                      <FormField
                        label={form.teamMembers.label}
                        placeholder={form.teamMembers.placeholder}
                        as="textarea"
                        required
                        error={errors.teamMembers}
                        registration={register('teamMembers', {
                          validate: (value) => {
                            if (!isTeam) return true
                            return (
                              (value && value.trim().length > 0) || errors_t.team
                            )
                          },
                        })}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={styles.actions}>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={submitDisabled}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting
                      ? form.submitting
                      : form.submit}
                    {!isSubmitting && <Send size={16} aria-hidden="true" />}
                  </Button>
                  <p className={styles.disclaimer}>{form.disclaimer}</p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}