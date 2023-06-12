import './globals.css'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Calculator',
  description: 'Calculator by Rincko Dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  )
}
