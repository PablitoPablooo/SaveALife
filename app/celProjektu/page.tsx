// TO DO:
// 1) Zrobić czytelniejszą czcionkę
// 2) Naprawić - przewijany header do końca strony (teraz w połowie strony znika)
// 3) Ustawić sekcje tak, by jedna była wyświetlana na całą wysokość strony, a po scrolowaniu przewijało się do kolejnej pełnej sekcji 
// 4) OPCJONALNIE: Zrobić animacje przejścia do kolejnych sekcji
// 5) Poprawić responsywność strony

//<h1>O Projekcie</h1>
//<h2>Nasza platforma edukacyjna to innowacyjne środowisko, które integruje kursy z podstaw pierwszej pomocy i zaawansowanego Kursu TCCC.</h2>
//<h2>Znajdziesz tu nie tylko solidne materiały dydaktyczne, ale także interaktywne narzędzia, takie jak egzaminy, krótkie filmiki edukacyjne i gry symulacyjne, które sprawią, że nauka stanie się fascynującym doświadczeniem.</h2>
//bg-[url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]
const celProjektu = () => {
    return(
        <main className='min-h-full flex items-center my-8 flex-col gap-10'>

            {/* O PROJEKCIE */}
            <div className='w-4/5 relative '>
                <img className='rounded-3xl object-cover w-full h-full absolute mix-blend-overlay '
                    src={"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt="tlo" 
                />
                <p className='text-3xl md:text-4xl lg:text-5xl p-3 text-center border-b-2 border-white'>
                    O Projekcie
                </p>
                <div className="text-2xl md:text-3xl lg:text-3xl text-left">
                    <p className='text-center text-white p-4'>Nasza platforma edukacyjna to innowacyjne środowisko, które integruje kursy z podstaw pierwszej pomocy i zaawansowanego Kursu TCCC.</p>
                    <p className='text-center text-white p-4'>Znajdziesz tu nie tylko solidne materiały dydaktyczne, ale także interaktywne narzędzia, takie jak egzaminy, krótkie filmiki edukacyjne i gry symulacyjne, które sprawią, że nauka stanie się fascynującym doświadczeniem.</p> 
                </div>
            </div>

            {/* ZAŁOŻENIA PROJEKTU */}
            <div className='w-4/5 relative '>
                <img className='rounded-3xl object-cover w-full h-full absolute mix-blend-overlay '
                    src={"https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt="tlo" 
                />
                <p className='text-3xl md:text-4xl lg:text-5xl p-3 text-center border-b-2 border-white'>
                    Założenia Projektu
                </p>
                <div className="text-2xl md:text-3xl lg:text-3xl text-left">
                    <p className='text-center text-white p-4'>Naszym głównym celem jest stworzenie kompleksowej platformy edukacyjnej, która umożliwi użytkownikom zdobycie wiedzy z zakresu pierwszej pomocy oraz zaawansowanego kursu TCCC.</p>
                    <p className='text-center text-white p-4'>Projekt ten ma na celu dostarczenie łatwo dostępnych i interaktywnych narzędzi edukacyjnych, aby zwiększyć świadomość społeczeństwa na temat udzielania pierwszej pomocy oraz poprawić umiejętności ratunkowe w sytuacjach awaryjnych.</p> 
                </div>
            </div>


            
            {/* Cel Projektu */}
            <div className='w-4/5 relative '>
                <img className='rounded-3xl object-cover w-full h-full absolute mix-blend-overlay '
                    src={"https://images.pexels.com/photos/8941838/pexels-photo-8941838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt="tlo" 
                />
                <p className='text-3xl md:text-4xl lg:text-5xl p-3 text-center border-b-2 border-white'>
                    Cel Projektu
                </p>
                <div className="text-2xl md:text-3xl lg:text-3xl text-left">
                    <p className='text-center text-white p-4'>Celem naszej platformy edukacyjnej jest zwiększenie ogólnej gotowości społeczeństwa do udzielania pierwszej pomocy oraz podniesienie standardów w zakresie zaawansowanego ratownictwa, jakim jest Kurs TCCC.</p>
                    <p className='text-center text-white p-4'>Chcemy, aby nasi użytkownicy zdobyli praktyczne umiejętności, które mogą być zastosowane w codziennych sytuacjach życiowych oraz w nagłych przypadkach medycznych, co przyczyni się do poprawy ogólnego bezpieczeństwa publicznego.</p> 
                </div>
            </div>


                {/* O NAS */}
                <div className='w-4/5 relative mb-8'>
                <img className='rounded-3xl object-cover w-full h-full absolute mix-blend-overlay '
                    src={"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt="tlo" 
                />
                <p className='text-3xl md:text-4xl lg:text-5xl p-3 text-center border-b-2 border-white'>
                    O Nas
                </p>
                <div className="text-2xl md:text-3xl lg:text-3xl text-left">
                    <p className='text-center text-white p-4'>Jesteśmy zespołem oddanych profesjonalistów, zafascynowanych ideą poprawy umiejętności pierwszej pomocy w społeczeństwie.</p>
                    <p className='text-center text-white p-4'>Nasza ekipa składa się z ekspertów medycznych, instruktorów pierwszej pomocy oraz specjalistów ds. edukacji online.</p> 
                    <p className='text-center text-white p-4'>Wspólnie tworzymy platformę, która nie tylko dostarcza solidną wiedzę, ale również angażuje uczestników poprzez interaktywne metody nauki.</p> 
                    <p className='text-center text-white p-4'>Naszym celem jest uczynienie pierwszej pomocy dostępną i zrozumiałą dla każdego, niezależnie od poziomu doświadczenia.</p> 

                </div>
            </div>
        </main>
    )
}
export default celProjektu