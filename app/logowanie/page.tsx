'use client'

import Link from 'next/link'
import InputField from '@/components/InputField'
import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'

const Logowanie = () => {
  const router = useRouter()
  const session = useSession()
  if (session.status === 'authenticated'){
    redirect('/')
  }

  const [failedLogin, setFailedLogin] = useState(false)

  useEffect(() => {
    if (failedLogin) {
      const failedLoginTimeout = setTimeout(() => setFailedLogin(false), 5000)
      return () => clearTimeout(failedLoginTimeout)
    }
  }, [failedLogin])

  const loginActionAsync = async (data: FormData) => {
    const email = data.get('email')?.toString()
    const password = data.get('password')?.toString()

    if (!email || !password) {
      return
    }

    const signInRes = await signIn("credentials", { email: email, password: password, redirect: false })
    if (!signInRes || !signInRes.ok) {
      setFailedLogin(true)
      return
    }

    router.replace('/')
    router.refresh()
  }

  return (
    <div className='h-[100%] flex justify-center items-center text-xl md:text-3xl lg:text-5xl bg-slate-700'>
      <form action={loginActionAsync} className='flex flex-col justify-center items-center gap-4'>
        <p>Logowanie</p>
          <InputField type='email' name='email' text='Email' />
          <InputField type='password' name='password' text='Hasło' />

          {/* Jeżeli email lub hasło jest nieprawidłowe, wyświetl poniższy komunikat */}
          {
            failedLogin ?
            <p className='bg-red-500 text-black px-4 rounded-xl text-md md:text-xl lg:text-2xl'>
              Nieudane logowanie: podałeś błędny mail lub hasło
            </p> :
            <></>
          }

          <button type='submit' className='mt-4 p-2 md:p-4 bg-red-500 rounded-full hover:bg-yellow-500'>
            Zaloguj się
          </button>
          <Link href='/wyslijHaslo' className='hover:text-black'>Nie pamiętasz hasła? Kliknij tutaj</Link>
          <Link href='/rejestracja' className='hover:text-black'>Zarejestruj się</Link>
      </form>
    </div>
)}

export default Logowanie