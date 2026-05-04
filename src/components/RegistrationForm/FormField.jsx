import styles from './FormField.module.css'

function normalizeOption(option) {
  if (option == null) return null
  if (typeof option === 'string') return { value: option, label: option }
  return option
}

export default function FormField({
  id,
  label,
  required,
  error,
  type = 'text',
  as = 'input',
  options,
  placeholder,
  selectPlaceholder,
  registration,
  ...rest
}) {
  const inputId = id ?? rest.name ?? registration?.name
  const className = `${styles.control} ${error ? styles.invalid : ''}`
  const errorId = error ? `${inputId}-error` : undefined

  const commonProps = {
    id: inputId,
    className,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': errorId,
    ...registration,
    ...rest,
  }

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>

      {as === 'select' ? (
        <select {...commonProps}>
          <option value="">{selectPlaceholder ?? '—'}</option>
          {options?.map((raw) => {
            const option = normalizeOption(raw)
            if (!option) return null
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </select>
      ) : as === 'textarea' ? (
        <textarea rows={3} placeholder={placeholder} {...commonProps} />
      ) : (
        <input type={type} placeholder={placeholder} {...commonProps} />
      )}

      <span
        className={styles.error}
        id={errorId}
        role={error ? 'alert' : undefined}
      >
        {error?.message ?? ''}
      </span>
    </div>
  )
}
