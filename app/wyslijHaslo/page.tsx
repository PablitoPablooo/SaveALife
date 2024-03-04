'use client'

import InputField from '@/components/InputField'
import { useEffect, useState } from 'react'

export type DbSendPasswordType = { email: string }

const WyslijHaslo = () => {
  const [failedEmail, setFailedEmail] = useState(false)
  const [passwordSent, setPasswordSent] = useState(false)

  useEffect(() => {
    if (failedEmail) {
      const failedEmailTimeout = setTimeout(() => setFailedEmail(false), 5000)
      return () => clearTimeout(failedEmailTimeout)
    }
  }, [failedEmail])


  const resetPasswordActionAsync = async (data: FormData) => {
    const email = data.get('email')?.toString()
    if (!email) {
      setFailedEmail(!failedEmail)
      return
    }

    const req = await fetch('http://localhost:3000/api/sendPass', { method: 'POST', body: JSON.stringify({ email: email }) })
    console.log(req.status)
    if (req.status >= 200 && req.status < 300) {
      setPasswordSent(true)
      return
    }

    setFailedEmail(true)
  }

  return (
    <div className='h-[100%] flex justify-center items-center text-xl md:text-3xl lg:text-5xl bg-slate-700'>
      <form action={resetPasswordActionAsync} className='flex flex-col justify-center items-center gap-4'>
      <p>Przypomnienie hasła</p>
        <InputField type='email' name='email' text='Email' />
         {/* Jeżeli email jest nieprawidłowy, wyświetl poniższy komunikat */}
         {
            failedEmail &&
            <p className='bg-red-500 text-black px-4 rounded-xl text-md md:text-xl lg:text-2xl'>
              Podany mail nie znajduje się w bazie danych.
            </p>
          }
          {
            passwordSent &&
            <p className='bg-green-500 text-black px-4 rounded-xl text-md md:text-xl lg:text-2xl'>
              Poprawnie wysłano hasło na podany adres email
            </p>
          }

        <button type='submit' className='mt-4 p-2 md:p-4 bg-red-500 rounded-full hover:bg-yellow-500'>Wyślij</button>
      </form>
    </div>
  )
}

export default WyslijHaslo