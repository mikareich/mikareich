import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code, Space_Mono } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import Footer from './Footer'
import NavBar from './NavBar'

const headingFont = Fira_Code({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: 'variable',
})

const bodyFont = Space_Mono({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
})

const FONTS = [bodyFont.variable, headingFont.variable].join(' ')

export const metadata: Metadata = {
  icons: {
    icon: '/icons/favicon.ico',
  },
  title: 'Mika Reich',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${FONTS} bg-gray-400`}>
          <div className="container mx-auto flex min-h-dvh flex-col gap-5 font-body text-gray-200 sm:gap-10">
            <NavBar />

            {children}

            <Footer />
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
