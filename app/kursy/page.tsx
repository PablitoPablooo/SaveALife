import Link from 'next/link'

const kursy = () => {

    return(
    <main>
            {/* Kurs Pierwszej Pomocy */}
        <div className='w-[80%] relative flex flex-col mx-[10%] border-4 my-24 rounded-xl'>
            <img src="https://images.pexels.com/photos/8942114/pexels-photo-8942114.jpeg"
                className='w-full h-full object-cover absolute mix-blend-overlay'
            />
            <div className='p-10 pt-3 text-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl'>
                    Kurs Podstawowej Pierwszej Pomocy
                </h1>
                <p className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl my-8'>
                    Kurs poświęcony podstawowym czynnościom ratujących życie
                </p>
                <Link href={"/kursPPP"}
                      className='bg-orange-600 rounded-full p-1 text-3xl sm:text-3xl md:text-3xl lg:text-4xl m-[2%] hover:bg-red-400 relative'>
                        Rozpocznij
                </Link>
            </div>
        </div>

        {/* Kurs TCCC */}
      <div className='w-[80%] relative flex flex-col mx-[10%] border-4 rounded-xl'>
        <img src="https://images.pexels.com/photos/8079185/pexels-photo-8079185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full
                    object-cover absolute mix-blend-overlay'/>
        <div className='p-10 pt-3 text-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>Kurs TCCC</h1>
          <p className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl my-8'>Podstawowe elementy ratownicta taktycznego</p>
                <p className='bg-orange-600 rounded-full p-1 text-3xl sm:text-3xl md:text-3xl lg:text-4xl m-[2%] hover:bg-red-400 relative'>
                Brak dostępu w aktualnej wersji aplikacji
                </p>
        </div>
      </div>
    </main>

    
)}

export default kursy