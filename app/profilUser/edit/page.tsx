'use client'

// Importowanie typu żądania dotyczącego profilu
import { getProfileRequest } from '@/app/api/profile/route'
// Importowanie typów reprezentujących profil i użytkownika z lokalnego pliku
import { getProfileType, getUserType } from '../page'
// Importowanie funkcji 'redirect' z modułu 'next/navigation'
import { redirect } from 'next/navigation'
// Importowanie komponentu 'ProfilePictureDisplay' z lokalnego pliku
import ProfilePictureDisplay from '@/components/ProfilePictureDisplay'
// Importowanie komponentu 'InputField' z lokalnego pliku
import InputField from '@/components/InputField'
// Importowanie funkcji 'getServerSession' z modułu 'next-auth'
import { getServerSession } from 'next-auth'
// Importowanie funkcji 'signOut' z modułu 'next-auth/react'
import { signOut, useSession } from 'next-auth/react'
import { FormEvent, useEffect, useState } from 'react'

// Funkcja obsługująca edycję profilu
const handleProfileEdit = (username: string, formEvent: any) => {
  // Pobieranie nowych danych z formularza
  // const newUsername = data.get('username')
  // const newDescription = data.get('description')
  // const newPlace = data.get('place')

  formEvent.preventDefault()
  console.log(username, formEvent.target.value)

  // Wysyłanie żądania POST do endpointu '/api/profile/edit' z nowymi danymi
  // const res = await fetch('http://localhost:3000/api/profile/edit', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     'username': username,
  //     'newUsername': newUsername,
  //     'newDescription': newDescription,
  //     'newPlace': newPlace,
  //   })
  // })

  // Sprawdzanie, czy żądanie zakończyło się sukcesem (kod 200)
  // if (res.status == 200 && username !== newUsername) {
  //   signOut({ callbackUrl: '/' })
  // }
}

// Funkcja asynchroniczna komponentu profilUser>edit
const ProfilEdit = () => {
  // Pobranie sesji
  const session = useSession()
  // Warunek czy jest sesja i czy użytkownik jest zalogowany
  if (!session || !session.data || !session.data.user) {
    // Jeżeli nie ma sesji, lub użytkownik nie jest zalogowany, przekieruj na stronę główną
    redirect('/')
  }

  // Pobranie z sesji danych użytkownika
  const user = session.data.user as getUserType
  // Pobieranie danych z profilu zalogowanego użytkownika
  const [profile, setProfile] = useState<getProfileType>()
  useEffect(() => {
    // Funkcja asynchroniczna do pobierania danych profilu użytkownika
    const getProfileAsync = async (username: string ) => {
      // Wysłanie żądania POST do endpointu '/api/profile'
      const res = await fetch('http://localhost:3000/api/profile', {
        method: 'POST',
        body: JSON.stringify({
          'username': username
        } as getProfileRequest)
      })

      // Pobranie danych odpowiedzi w formacie JSON
      const data = await res.json()
      // Zwrot danych profilu użytkownika
      setProfile(data as getProfileType)
    }

    getProfileAsync(user.name)
  }, [])

  if (!profile) {
    return
  }

  return (
    <div className='h-full flex flex-col justify-center items-center gap-12 text-3xl'>
      {/* <div>
        <ProfilePictureDisplay imageBuffer={profile.profilepic} />
      </div> */}
      <form onSubmit={(e) => handleProfileEdit(user.name, e)} className='w-[20%] flex flex-col justify-center items-center gap-4'>
        <InputField type='text' name='username' text='Nazwa użytkownika' value={user.name} />
        <InputField type='text' name='description' text='Opis' value={profile.description} />
        <InputField type='text' name='place' text='Miejscowość' value={profile.place} />
        <button className='border-2 border-red-500 p-2 rounded-3xl hover:bg-yellow-800 mt-4'>Zmień dane</button>
      </form>
    </div>
  )
}
// Eksport komponentu profilUser>edit
export default ProfilEdit