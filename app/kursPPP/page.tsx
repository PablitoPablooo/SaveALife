// Import komponentu 'CourseListItem' z lokalnego pliku
import CourseListItem from '@/components/CourseListItem'

// Typy kursu pierwszej pomocy
export type kursyPPPType = {
  id: number,
  title: string,
  text: string,
}

// Funkcja asynchroniczna do pobierania danych kursów PPP
const getKursyPpp = async () => {
  // Wysłanie żądania GET do endpointu '/api/kursyPPP' z wyłączoną pamięcią podręczną
  const res = await fetch('http://localhost:3000/api/kursyPPP', { cache: 'no-store' })
  // Pobranie danych odpowiedzi w formacie JSON i rzutowanie na typ 'kursyPPPType[]'
  const data = await res.json() as kursyPPPType[]

  // Zwrot pobranych danych
  return data
}

// Funkcja asynchroniczna komponentu kursPPP
const kursPPP = async () => {
  // Pobranie danych z funkcji 'getKursyPpp'
  const kursyPPP = await getKursyPpp()

  return (
    <div className='text-3xl sm:text-lg md:text-3xl lg:text-4xl'>
      {/* Stworzenie sekcji - rozwijana i zwijana lista */}
      <div className='bg-gray-900 w-[80%] relative flex flex-col mx-[10%] border-4 my-4 rounded-xl'>
        <p className='text-center mt-4 underline'>Rozdziały kursu pierwszej pomocy</p>
        <div className='flex flex-col gap-8 p-4'>
          {/* Mapowanie danych kursów PPP na komponenty 'CourseListItem' */}
          {kursyPPP.map(kurs => <CourseListItem key={kurs.id} title={kurs.title} text={kurs.text} />)}
        </div>
      </div>
    </div>
  )
}

// Eksport komponentu kursPPP
export default kursPPP