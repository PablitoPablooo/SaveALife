'use client'

import { signOut } from 'next-auth/react'

const SignOut = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: '/' })} className='bg-red-500 rounded-full hover:bg-yellow-500'>
      Wyloguj
    </button>
  )
}

export default SignOut