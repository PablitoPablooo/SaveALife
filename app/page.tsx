import Link from 'next/link'
import { getServerSession } from 'next-auth'

const StartCourseButton = ({ isLogged }: { isLogged: boolean }) => {
  const ifLogged = <p className=' bg-orange-600 rounded-full p-1 text-3xl sm:text-3xl md:text-3xl lg:text-4xl m-[2%] hover:bg-red-400 relative'>Rozpocznij</p>
  const ifNotLogged = <></>

  return (
    <div className='flex items-center justify-center'>
      {isLogged ? ifLogged : ifNotLogged}
    </div>
  )
}

const Home = async () => {
  const session = await getServerSession()
  const isUserLogged = !session ? false : true

  return (
    <main className='min-h-full flex flex-col mt-5 gap-10'>
      <div className='justify-center flex text-3xl md:text-4xl lg:text-5xl'>
        <h1 className='underline'>Naucz się ratować życie!</h1>
      </div>

     {/*
     DO ZROBIENIA:
     1) Naprawić Link - Tak by z każdego div był widoczny i dało się go nacisnąć --> Zrobione
     2) Przewijanie strony - przewinięcie do samego dołu main, teraz footer ucina stronę u dołu
     3) Header/div - Przy przewijaniu strony div z obrazem nachodzi na header
     */}

     {/* Tak się wkleja png z folderu a nie z linku xD
     <div>
        <Image src="/3.png" alt="logo" width={74} height={35}/>
     </div> */}

      {/* Telefony Alarmowe */}
      <div className='w-[80%] relative flex-col mx-[10%] border-4 border-white rounded-xl'>
          <img src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               className='w-full h-full object-cover absolute mix-blend-overlay'/>
        <h2 className='text-3xl md:text-4xl lg:text-5xl pb-2 text-center border-b-2 border-white'>Telefony Alarmowe</h2>
        <div className='text-2xl md:text-3xl lg:text-3xl text-left px-4 py-6'>
        <p>999 - Ratownictwo medyczne</p>
        <p>998 - Straż pożarna</p>
        <p>997 - Policja</p>
        <p>601-100-100 - WOPR</p>
        <p>601-100-300 - GOPR i TOPR</p>
        </div>
      </div>

          {/* Cel projektu */}
          <div className='w-[80%] relative flex flex-col mx-[10%] border-4 border-white rounded-xl '>
          <img src="https://images.pexels.com/photos/8941838/pexels-photo-8941838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className='w-full h-full object-cover absolute mix-blend-overlay'
          />
        <div className='p-10 pt-3 text-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl underline'>
            Cel projektu
          </h1>
          <p className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl my-8'>
            Poznaj główne założenia i cele Save A Life!
          </p>
          <Link href={"/celProjektu"}>
            <StartCourseButton isLogged={isUserLogged} />
          </Link>
        </div>
      </div>

               {/* Baza Pytań */}
               <div className='w-[80%] relative flex flex-col mx-[10%] border-4 border-white rounded-xl'>
          <img src="https://images.pexels.com/photos/5428832/pexels-photo-5428832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className='w-full h-full object-cover absolute mix-blend-overlay'
          />
        <div className='p-10 pt-3 text-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl underline'>
          Baza Pytań
          </h1>
          <p className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl my-8'>
            Zapoznaj sie z autorską bazą pytań w zakresie pierwszej pomocy
          </p>
          <Link href={"/bazaPytan?questionID=1"}>
            <StartCourseButton isLogged={isUserLogged} />
          </Link>
        </div>
      </div>

                 {/* Filmy Edukacyjne */}
                 <div className='w-[80%] relative flex flex-col mx-[10%] border-4 border-white rounded-xl'>
          <img src="https://images.pexels.com/photos/8972769/pexels-photo-8972769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className='w-full h-full object-cover absolute mix-blend-overlay'
          />
        <div className='p-10 pt-3 text-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl underline'>
          Filmy Edukacyjne
          </h1>
          <p className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl my-8'>
            Sprawdź wyselekcjonowane filmy dotyczące najważniejszych podstawowych zagadnień ratowniczych
          </p>
          <Link href={"/filmy"}>
            <StartCourseButton isLogged={isUserLogged} />
          </Link>
        </div>
      </div>

            {/* Infografiki */}
            <div className='w-[80%] relative flex flex-col mx-[10%] border-4 border-white rounded-xl'>
          <img src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
              className='w-full h-full object-cover absolute mix-blend-overlay'
          />
        <div className='p-10 pt-3 text-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl underline'>
          Infografiki
          </h1>
          <p className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl my-8'>
            Przejrzyj krótkie infografiki z sposobu postępowania w różnych sytuacjach ratowniczych
          </p>
          <Link href={"/infografiki?infographicId=0"}>
            <StartCourseButton isLogged={isUserLogged} />
          </Link>
        </div>
      </div>

        {/*Algorytmy pierwszej pomocy */}
        <div className='w-[80%] relative flex flex-col mx-[10%] border-4 border-white rounded-xl'>
          <img src="https://images.pexels.com/photos/42230/teddy-teddy-bear-association-ill-42230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className='w-full h-full object-cover absolute mix-blend-overlay'
          />
        <div className='p-10 pt-3 text-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl underline'>
          Algorytmy pierwszej pomocy
          </h1>
          <p className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl my-8'>
            Zapoznaj się z podstawowymi algorytmami udzielania pierwszej pomocy w zależności od sytuacji
          </p>
          <Link href={"/pierwszaPomoc"}>
            <StartCourseButton isLogged={isUserLogged} />
          </Link>
        </div>
      </div>


      {/* Kurs Pierwszej Pomocy */}
      <div className='w-[80%] relative flex flex-col mx-[10%] border-4 border-white rounded-xl'>
          <img src="https://images.pexels.com/photos/8942114/pexels-photo-8942114.jpeg"
              className='w-full h-full object-cover absolute mix-blend-overlay'
          />
        <div className='p-10 pt-3 text-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl underline'>
            Kurs pierwszej pomocy
          </h1>
          <p className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl my-8'>
            Kurs poświęcony podstawowym czynnościom ratujących życie
          </p>
          <Link href={"/kursPPP"}>
            <StartCourseButton isLogged={isUserLogged} />
          </Link>
        </div>
      </div>

             {/* Egzamin */}
             <div className='w-[80%] relative flex flex-col mx-[10%] border-4 border-white rounded-xl mb-8'>
          <img src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className='w-full h-full object-cover absolute mix-blend-overlay'
          />
        <div className='p-10 pt-3 text-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl underline'>
          Egzamin
          </h1>
          <p className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl my-8'>
            Sprawdź swoją wiedzę rozwiązując egzamin!
          </p>
          <Link href={"/egzamin"}>
            <StartCourseButton isLogged={isUserLogged} />
          </Link>
        </div>
      </div>

    </main>
  )
}

export default Home