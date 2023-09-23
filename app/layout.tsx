// eslint-disable-next-line camelcase
import { Fira_Code } from 'next/font/google'

import Container from '@/components/Container'
import ContextProvider from '@/components/ContextProvider'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import NavBar from '@/components/NavBar'
import '@/styles/global.css'
import { getPageRoutes } from '@/utils/pageUtils'

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
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
  const pageRoutes = await getPageRoutes()

  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} relative flex min-h-[100dvh] flex-col bg-raisin-black-200 font-mono`}
      >
        <ContextProvider>
          <Container>
            <NavBar routes={pageRoutes} />
            <div className="mt-[100px]">{children}</div>
          </Container>
          <Menu routes={pageRoutes} />
          <Footer />
        </ContextProvider>
      </body>
    </html>
  )
}
