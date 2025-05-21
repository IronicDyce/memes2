import './globals.css'

export const metadata = {
  title: 'VEEPEEN',
  description: 'The only VPN that f***s.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}