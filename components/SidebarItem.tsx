import Link from 'next/link'

export type SidebarItemType = {
  text: string
  url: string
}

const SidebarItem = ({ text, url }: SidebarItemType) => {
  return (
    <Link href={url}>
      <p className='rounded-3xl truncate hover:bg-red-500'>{text}</p>
    </Link>
  )
}

export default SidebarItem
