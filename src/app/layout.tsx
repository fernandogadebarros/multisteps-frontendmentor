import type { Metadata } from 'next'

import localFont from 'next/font/local'
import './globals.css'
import { Storage } from './Provider'

const ubuntuBold = localFont({
  src: './fonts/Ubuntu-Bold.ttf',
  variable: '--font-ubuntu-bold',
  weight: '700',
})

const ubuntuMedium = localFont({
  src: './fonts/Ubuntu-Medium.ttf',
  variable: '--font-ubuntu-medium',
  weight: '500',
})

const ubuntu = localFont({
  src: './fonts/Ubuntu-Regular.ttf',
  variable: '--font-ubuntu',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Multisteps Challenge | Frontendmentor',
  description: 'Multisteps Challenge | Frontendmentor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuBold.variable} ${ubuntuMedium.variable} ${ubuntu.variable} bg-neutral-magnolia font-ubuntu antialiased`}
      >
        <Storage>{children}</Storage>
      </body>
    </html>
  )
}
