'use client'

import InputField from '@/components/InputField'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Rejestracja = () => {
  const router = useRouter()
  const session = useSession()
  if (session.status === 'authenticated'){
    redirect('/')
  }

  const [failedRegistration, setFailedRegistration] = useState(false)

  useEffect(() => {
    if (failedRegistration) {
      const failedLoginTimeout = setTimeout(() => setFailedRegistration(false), 5000)
      return () => clearTimeout(failedLoginTimeout)
    }
  }, [failedRegistration])

  const registerActionAsync = async (data: FormData) => {
    const username = data.get('username')?.toString()
    const email = data.get('email')?.toString()
    const password = data.get('password')?.toString()
    const repeatedPassword = data.get('repeatedPassword')?.toString()

    if (!username || !email || !password || password != repeatedPassword) {
      setFailedRegistration(!failedRegistration)
      return
    }

    const reqBody = JSON.stringify({
      username: username,
      email: email,
      password: password,
    })

    const req = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      body: reqBody,
    })

    if (!req.ok) {
      setFailedRegistration(!failedRegistration)
      return
    }

    const signInRes = await signIn("credentials", { email: email, password: password, redirect: false })
    if (!signInRes || !signInRes.ok) {
      setFailedRegistration(!failedRegistration)
      return
    }

    router.replace('/')
    router.refresh()
  }

  return (
    <div className='h-[100%] flex justify-center items-center text-xl md:text-3xl lg:text-5xl bg-slate-700'>
      <form action={registerActionAsync} className='flex flex-col justify-center items-center gap-4'>
      <p>Rejestracja Konta</p>
        <InputField type='text' name='username' text='Nazwa użytkownika' />
        <InputField type='email' name='email' text='Email' />
        <InputField type='password' name='password' text='Hasło' />
        <InputField type='password' name='repeatedPassword' text='Powtórz hasło' />

        {
          failedRegistration &&
          <p className='bg-red-500 text-black px-4 py-1 rounded-xl text-md md:text-xl lg:text-2xl'>
            Nieudana rejestracja. Spróbuj ponownie z poprawnymi danymi
          </p>
        }

        <button type='submit' className='mt-4 p-2 md:p-4 bg-red-500 rounded-full hover:bg-yellow-500'>Zarejestruj się</button>
        <Link href='/logowanie' className='hover:text-black'>Masz już konto? kliknij tutaj</Link>
      </form>
    </div>
  )
}

export default Rejestracja