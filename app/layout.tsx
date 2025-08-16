import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: '3dimli Hero Clone',
  description: 'Clone of 3dimli hero section',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
