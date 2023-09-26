// eslint-disable-next-line camelcase
import { Fira_Code, Space_Mono } from 'next/font/google'

import Container from '@/components/Container'
import ContextProvider from '@/components/ContextProvider'
import Drawer from '@/components/Drawer'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/global.css'
import { getAllPages } from '@/utils/pageUtils'

const firaMono = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-mono',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata = {
  title: 'Mika Reich',
  description:
    'Explore the digital portfolio of Mika Reich, an 18-year-old web developer from Germany. Dive into projects, learn about his skills, and get in touch.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageRoutes = (await getAllPages()).map(({ frontMatter }) => frontMatter)

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${firaMono.variable} ${spaceMono.variable} font-mono relative flex min-h-[100dvh] flex-col bg-raisin-black-300 font-body`}
      >
        <ContextProvider>
          <Container>
            <NavBar routes={pageRoutes} />
            <div className="mt-[50px] xs:mt-[100px]">{children}</div>
          </Container>
          <Drawer routes={pageRoutes} />
          <Footer />
        </ContextProvider>
      </body>
    </html>
  )
}
