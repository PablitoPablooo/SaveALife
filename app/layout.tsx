import type { Metadata } from 'next'
import { Smooch_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { getServerSession } from 'next-auth'
import SessionProvider from '../components/SessionProvider'

const font = Smooch_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Save a Life.com',
  description: 'Opis',
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider session={session}>
          <Header />
          <Sidebar />
          <div className='h-full mt-10 md:mt-14 lg:mt-16'>
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}

export default RootLayout