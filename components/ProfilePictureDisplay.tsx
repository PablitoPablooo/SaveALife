// Wykonanie kodu po stronie klienta
'use client'

// Import typu zdjęcia profilowego
import { profilePictureType } from '@/app/profilUser/page'

// Komponent odpowiedzialny za wyświetlenie zdjęcia profilowego użytkownika
const ProfilePictureDisplay = ({ imageBuffer }: { imageBuffer: profilePictureType }) => {
  // Zwrot placeholdera zdjecia profilowego
  if (!imageBuffer || !imageBuffer.data)
  {
    return <img className='aspect-square rounded-full' src='placeholder-profile-pic.jpg' alt='placeholder profile picture' />
  }

  // Konwersja danych obrazu na format base64
  const buff = Buffer.from(imageBuffer.data).toString('base64')

  // Zwrot elementu img w którym jest zdjęcie profilowe lub jego placeholder
  return <img className='aspect-square rounded-full' src={`data:image/png;base64, ${buff}`} alt='profile picture' />
}

// Eksport komponentu
export default ProfilePictureDisplay