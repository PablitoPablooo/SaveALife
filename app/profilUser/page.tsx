// Importowanie funkcji 'redirect' z modułu 'next/navigation'
import { redirect } from 'next/navigation'
// Importowanie typów żądania i odpowiedzi z modułu dotyczącego profilu
import { getProfileRequest } from '../api/profile/route'
// Importowanie funkcji 'getServerSession' z modułu 'next-auth'
import { getServerSession } from 'next-auth'
// Importowanie komponentu 'ProfilePictureDisplay' z lokalnego pliku
import ProfilePictureDisplay from '@/components/ProfilePictureDisplay'
// Importowanie komponentu 'Link' z modułu 'next/link'
import Link from 'next/link'

// Definicja typu reprezentującego dane z tabeli users
export type getUserType = {
  name: string
  email: string
}

// Definicja typu reprezentującego dane z tabeli profiles
export type getProfileType = {
  place: string
  description: string
  profilepic: profilePictureType
  examstatus: boolean
}

// Typ zdjęcia profilowego z tabeli profiles
export type profilePictureType = {
  type: string
  data: Uint8Array
}

// Funkcja asynchroniczna do pobierania danych profilu użytkownika
const getProfile = async (username: string ) => {
  //  żądanie POST do endpointu '/api/profile'
  const res = await fetch('http://localhost:3000/api/profile', {
    method: 'POST',
    body: JSON.stringify({
      'username': username
    } as getProfileRequest)
  })

  // Pobieranie danych odpowiedzi w formacie JSON i przypisanie do stałej data
  const data = await res.json()
  //Zwrot danych data
  return data
}

// Funkcja asynchroniczna reprezentująca komponent profilUser
const profilUser = async () => {
  // Pobranie sesji serwera
  const session = await getServerSession()
  // Warunek czy jest sesja i czy użytkownik jest zalogowany
  if (!session || !session.user) {
    // Jeżeli nie ma sesji, lub użytkownik nie jest zalogowany, przekieruj na stronę główną
    redirect('/')
  }

  // Pobranie z sesji danych użytkownika
  const user = session.user as getUserType
  // Pobieranie danych z profilu zalogowanego użytkownika
  const profile = await getProfile(user.name) as getProfileType

  return (
    // Główny kontener
    <div className='h-full text-md sm:text-xl md:text-3xl lg:text-5xl bg-slate-700'>

      {/* Nazwa Użytkownika */}
      <div className='text-center pt-10'>
        <p className=' text-5xl text-rose-700 underline'>{user.name}</p>
      </div>

      {/* Kontener na całą zawartość strony */}
      <div>
        {/*lewy div - Informacje*/}
        <div className='justify-between flex my-4'>
          <div className='ml-4 bg-slate-500 rounded-lg w-[30%] '>
            <p className='text-center underline text-rose-700'>Informacje</p>
            <p className='pt-4 px-4'>Miejscowość: {profile.place}</p>
            <p className='pt-4 px-4'>E-mail: {user.email}</p>
          </div>

          {/*środkowy div - Zdjęcie profilowe użytkownika*/}
          <div className='aspect-square flex items-center justify-center text-center bg-red-500 p-2 rounded-full'>
            <ProfilePictureDisplay imageBuffer={profile.profilepic} />
          </div>

          {/*prawy div - Informacje o zdanym egzaminie i symulacjach*/}
          <p className={`mr-4 flex items-center justify-center ${profile.examstatus ? 'bg-green-500' : 'bg-red-500'} rounded-lg w-[30%]`}>
            Egzamin: {profile.examstatus ? 'Zdany' : 'Niezdany'}
          </p>
        </div>

        {/* Opis użytkownika */}
        <div className='text-center bg-slate-500 mt-12 m-4 mb-12 rounded-lg'>
          <p className='text-center underline text-rose-700'>Twój Opis:</p>
          <p className='p-6'>{profile.description}</p>
        </div>

        {/* Edycja profilu */}
        <div className='text-center'>
          <Link href={'/profilUser/edit'}  className='bg-rose-700 p-4 mt-4 rounded-full hover:bg-yellow-600'>
            Edytuj profil
          </Link>
        </div>
      </div>
    </div>
  )
}

//Eksport komponentu profilUser
export default profilUser