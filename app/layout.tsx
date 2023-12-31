import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'De-Marlu',
  description: 'unlock your travel & destination experience ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
