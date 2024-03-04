//Wykonanie kodu po stronie klienta
'use client'

// Import useState z modułu react
import { useState } from 'react'
//Import ikon 
import { TbLayoutNavbarExpand, TbLayoutNavbarCollapse   } from 'react-icons/tb'

// Komponent pojedyńczego elementu kursu
const CourseListItem = ({ title, text }: { title:string, text:string }) => {
  // Użycie stanu lokalnego do śledzenia stanu rozwinięcia/zwińcia elementu kursu
  const [isExpaneded, setIsExpanded] = useState(false)

  return (
    <div className='flex flex-col border-b border-white p-2'>
      <div className='flex flex-row justify-between items-center'>
        <p>{title}</p>
        {/* Przycisk do zmiany stanu rozwinięcia/zwińcia elementu kursu */}
        <button onClick={() => setIsExpanded(!isExpaneded)}>

          {/* Warunkowe renderowanie ikon w zależności od stanu rozwinięcia/zwińcia */}
          {isExpaneded ? <TbLayoutNavbarCollapse /> : <TbLayoutNavbarExpand />}
        </button>
      </div>

      {/* Warunkowe renderowanie sekcji z tekstem w zależności od stanu rozwinięcia/zwińcia */}
      <div className={`${isExpaneded ? '' : 'hidden'}`}>

        {/* Komponent wyświetlający tekst sekcji kursu */}
        <CourseListItemTextSection text={text} />
      </div>
    </div>
  )
}

// Komponent reprezentujący tekst sekcji kursu
const CourseListItemTextSection = ({ text }: { text:string }) => {
  return (
    <section className='bg-gray-700 text-left border-2 border-white rounded-xl m-4'>
      <p className='m-4'>{text}</p>
    </section>
  )
}

// Eksport komponentu CourseListItem
export default CourseListItem