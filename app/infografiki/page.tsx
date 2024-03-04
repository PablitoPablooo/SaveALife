// Import useState, react, oraz ikon
import Image from 'next/image';
import Link from 'next/link';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";

// Tablica złożona z infografik
const infographics = [
  { url: 'https://bogucin.net/wp-content/uploads/2016/10/Pierwsza-pomoc-1.png' },
  { url: 'https://bogucin.net/wp-content/uploads/2016/10/Pierwsza-pomoc-2.png' },
  { url: 'https://bogucin.net/wp-content/uploads/2016/10/Pierwsza-pomoc-3.png' },
  { url: 'https://bogucin.net/wp-content/uploads/2016/10/Pierwsza-pomoc-4.png' },
  { url: 'https://www.drogaratownika.pl/wp-content/uploads/2019/03/27752060_2102024063361592_4506182596546583217_n.jpg' },
  { url: 'https://www.drogaratownika.pl/wp-content/uploads/2019/03/28059047_2103709536526378_135695850074426189_n.jpg' },
  { url: 'https://www.drogaratownika.pl/wp-content/uploads/2021/05/rko-zwierzat-zrodlo-pinky-paws.jpg' },

];


const page = ({ searchParams }: any) => {
  //Wykorzystanie parametru z URL do określenia aktualnego indexu grafiki
  const { infographicId } = searchParams
  const infographicIdAsNum = Number(infographicId)

  //Funkcja służąca do przewijania karuzeli zdjęć do tyłu
  const prevInfographic = (id: number) => {
    if (id === 0) return `?infographicId=${id}`
    return `?infographicId=${id - 1}`
  }

  //Funkcja służąca do przewijania karuzeli zdjęć do przodu
  const nextInfographic = (id: number) => {
    if (id === infographics.length - 1) return `?infographicId=${id}`
    return `?infographicId=${id + 1}`
  }

  return (

    // Nagłówek strony
    <div className='flex flex-col items-center justify-center'>
      <div>
        <p className='text-center text-4xl bg-slate-400 p-2 m-2 rounded-full'>
          Infografiki ratownicze
        </p>
      </div>

      <div className='w-[50%] flex items-center justify-center group rounded-3xl bg-red-500'>
        {/* Wyświetlenie grafiki o aktualnym indeksie z tablicy infographics za pomocą useState */}
        <img src={infographics[infographicIdAsNum].url} className='object-cover w-full h-full' />


        <div className='hidden group-hover:flex w-[50%] absolute justify-between items-center px-2 md:px-4 lg:px-8 text-2xl md:text-5xl lg:text-7xl text-red-500'>
          {/* Obsługa funkcji prevInfographic oraz wyświetlanie ikony strzałki w lewo */}
          <Link className='hover:text-black' href={prevInfographic(infographicIdAsNum)}>
            <FaRegArrowAltCircleLeft />
          </Link>
          {/* Obsługa funkcji prevInfographic oraz wyświetlanie ikony strzałki w prawo */}
          <Link className='hover:text-black' href={nextInfographic(infographicIdAsNum)}>
            <FaRegArrowAltCircleRight />
          </Link>
        </div>
      </div>

      {/* Mapowanie elementów tablicy infographics, przedstawienie ich indeksów w formie ikony, i obsługa kliknięcia w wybrany index grafiki */}
      <div className='flex justify-center top-4 p-4 '>
        {infographics.map((_, i) => (
          <Link key={i}
            //Funkcja określająca index grafiki po kliknięciu dolnych ikon grafik
            href={`?infographicId=${i}`}
            className='text-2xl cursor-pointer p-4 hover:bg-rose-800 rounded-full'>
            <FaHeartCirclePlus />
          </Link>
        ))}
      </div>

    </div>
  )
}

export default page