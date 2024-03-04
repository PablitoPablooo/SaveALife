import Link from 'next/link'

export type HeaderItemType = {
  text: string
  url: string
}

const HeaderItem = ({ text, url }: HeaderItemType) => {
  return (
    <Link href={url}>
      <p className='truncate border-1 border-black p-1 rounded-full bg-black text-white hover:bg-yellow-500'>{text}</p>
    </Link>
  )
}

export default HeaderItem
