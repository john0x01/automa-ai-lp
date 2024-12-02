// eslint-disable-next-line camelcase
import { Instrument_Sans } from 'next/font/google'
import './globals.css'

const font = Instrument_Sans({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
