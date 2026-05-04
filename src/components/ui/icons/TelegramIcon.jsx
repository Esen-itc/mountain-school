export default function TelegramIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21.5 3.5 2.5 11l6 2.5 2 6.5 3.5-4 5 4 2.5-16.5z" />
      <path d="M8.5 13.5 17 6" />
    </svg>
  )
}
