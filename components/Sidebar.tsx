'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { IconType } from 'react-icons'
import { GoSidebarExpand, GoSidebarCollapse } from 'react-icons/go'
import SidebarItem, { SidebarItemType } from './SidebarItem'
import { useSession } from 'next-auth/react'

type isHiddenStateType = {
  value: boolean
  dispatch: Dispatch<SetStateAction<boolean>>
}

const sidebarItems: SidebarItemType[] = [
  {text: 'Strona Główna', url: '/' },
  {text: 'Cel projektu', url: '/celProjektu' },
  {text: 'Baza Pytań', url: '/bazaPytan?questionID=1'},
  {text: 'Filmy edukacyjne', url: '/filmy'},
  {text: 'Infografiki', url: '/infografiki?infographicId=0'},
  {text: 'Pierwsza Pomoc', url: '/pierwszaPomoc'},
  {text: 'Kursy', url: 'kursy'},
  {text: 'Egzamin', url: '/egzamin'},

]

const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(true)

  const session = useSession()
  if (session.status !== 'authenticated') {
    return <></>
  }

  return (
    <div>
      <SidebarButton Icon={isHidden ? GoSidebarCollapse : GoSidebarExpand } value={isHidden} dispatch={setIsHidden} />
      <SidebarElement value={isHidden} dispatch={setIsHidden}/>
    </div>
  )
}

const SidebarElement = ({ value, dispatch }: isHiddenStateType) => {
  return (
    <div className={`fixed z-40 h-full bg-gray-500 ${value ? 'w-[0%] text-transparent collapse' : 'w-[80%] md:w-[50%] lg:w-[20%]'} transition-all ease-in-out duration-200`}>
      <div className='h-12 bg-red-500'></div>
      <div className='p-4 text-3xl text-center'>
        {sidebarItems.map(item =>
          <div key={item.url} onClick={() => dispatch(!value)}>
            <SidebarItem text={item.text} url={item.url} />
          </div>
        )}
      </div>
    </div>
  )
}

const SidebarButton = ({ Icon, value, dispatch }: { Icon: IconType } & isHiddenStateType) => {
  return (
    <button className='fixed ml-1 top-[8%] text-5xl z-50' onClick={() => dispatch(!value)}><Icon /></button>
  )
}

export default Sidebar