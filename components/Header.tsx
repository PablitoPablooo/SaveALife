import Link from 'next/link'
import { PiFirstAid } from 'react-icons/pi'
import HeaderItem, { HeaderItemType } from './HeaderItem'
import { getServerSession } from 'next-auth'
import SignOut from './SignOut'

const Header = async () => {
  const session = await getServerSession()

  const HeaderItems: HeaderItemType[] = [
    {text: 'Zaloguj się', url: '/logowanie' },
    {text: 'Rejestracja', url: '/rejestracja' }
  ]

  return (
    <header className='fixed top-0 min-w-full h-[7.5%] flex items-center justify-between bg-red-500 p-2 border-white border-b-2 z-50'>
      <div className='flex flex-row gap-4 items-center justify-center text-2xl md:text-3xl lg:text-5xl'>
        <Link href='/' className='text-white'>
          <PiFirstAid />
        </Link>
        <Link href='/'>
          <p>save-a-life.com</p>
        </Link>
      </div>
      <div className='p-4 text-2xl md:text-2xl lg:text-3xl flex flex-row gap-4 rounded text-center'>
        {session ?
        <div className='flex gap-4'>
          <Link href='/profilUser' className='hover:underline'>Hello, {session.user?.name}</Link>
          <SignOut />
        </div> :
        HeaderItems.map(item => <HeaderItem key={item.url} text={item.text} url={item.url} />)}
      </div>
    </header>
  )
}

export default Header