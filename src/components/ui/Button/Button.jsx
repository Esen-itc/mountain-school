import styles from './Button.module.css'

const variantClass = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    styles.button,
    variantClass[variant] ?? variantClass.primary,
    fullWidth ? styles.full : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  )
}
