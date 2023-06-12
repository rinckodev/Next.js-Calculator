import { Metadata } from 'next';
import './globals.css'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calculator',
  description: 'Calculator by Rincko Dev',
  icons: {
    icon: '/favicon.ico'
  }
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
