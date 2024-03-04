'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io'

type IsHiddenStateType = {
  value: boolean
  dispatch: Dispatch<SetStateAction<boolean>>
}

type SlideExpandCollapseType = { text: string } & IsHiddenStateType

type SlideExpandCollapseButtonType = { imgHref: string } & SlideExpandCollapseType

type SlideType = {
  name: string
  text: string
  imgHref: string
}

const slides: SlideType[] = [
  {
    name: 'Wstęp',
    text: 'Pamiętaj, że w każdej sytuacji ważne jest zachowanie spokoju, szybkie działanie oraz przede wszystkim twoje bezpieczeństwo! Zawsze w pierwszej kolejności zadbaj o swoje bezpieczeństwo by z osoby ratującej nie stać się poszkodowanym! Oczywiście, specyficzne procedury mogą się różnić w zależności od kraju. Zaleca się więc również zapoznanie z lokalnymi wytycznymi dotyczącymi pierwszej pomocy jak i odświeżanie swoich umiejętności poprzez praktyczne kursy pierwszej pomocy.',
    imgHref: '3.png',
  },
  {
    name: 'Resuscytacja krążeniowo-oddechowa',
    text: '1) Sprawdź bezpieczeństwo miejsca. 2) Sprawdź, czy poszkodowany jest przytomny (poklepuj go delikatnie i zapytaj: "Czy wszystko w porządku?"). 3) Jeśli nie reaguje, wezwij pomoc (112 lub 999).  4) Rozpocznij uciskanie klatki piersiowej: 30 ucisków na środku klatki piersiowej (5–6 cm głębokości), następnie 2 oddechy ratownicze (ustami-do-ust) w tempie około 100-120 ucisków na minutę.',
    imgHref: 'rko.jpg',
  },
  {
    name: 'Pozycja bezpieczna',
    text: '1) Sprawdź bezpieczeństwo miejsca. 2) Ocena stanu poszkodowanego - Pamiętaj, że pozycja boczna bezpieczna jest zalecana dla poszkodowanych, którzy są przytomni, oddychają samodzielnie i nie mają podejrzenia urazu kręgosłupa ani złamań kończyn. W przypadku niepewności lub obecności jakichkolwiek obrażeń, zawsze najlepiej poczekać na przybycie profesjonalnej pomocy medycznej. 3) Ułożenie w pozycji bezpiecznej - A) Przejdź na stronę poszkodowanego. B) Wyprostuj obie nogi poszkodowanego. C) Złóż najbliższą do Ciebie rękę poszkodowanego, tak aby dłoń znajdowała się na policzku. D) Przynieś dalej położoną rękę poszkodowanego do jego twarzy, trzymając ją kciukiem i palcem wskazującym. E) Podtrzymując rękę na policzku, użyj drugiej ręki, aby unieść kolano poszkodowanego, pozostawiając stopy na podłożu. F) Delikatnie pociągnij poszkodowanego, obracając go na bok, aż znajdzie się na jego boku. G) Wyprostuj rękę poszkodowanego tak, aby była równoległa do jego ciała, utrzymując ją na policzku. H) Unieś biodra poszkodowanego, aby utworzyć stabilną pozycję. 4) Opieka do przybycia pomocy - Regularnie monitoruj oddech i puls poszkodowanego i upewnij się, że drogi oddechowe są wolne. wezwij pomoc medyczną (numer alarmowy: 112 lub 999), jeśli tego jeszcze nie zrobiłeś. ',
    imgHref: 'pozycjaBezpieczna.jpg',
  },
  {
    name: 'Krwotoki',
    text: '1) Sprawdź bezpieczeństwo miejsca. 2) Zabezpieczenie rany - Jeśli to możliwe, załóż rękawiczki jednorazowe, aby uniknąć ryzyka zakażenia. Poszkodowanego ułóż w pozycji siedzącej lub leżącej, z uniesioną raną ponad poziom serca jeśli możliwe. W przypadku drobnej rany należy ją oczyścić wodą z mydłem. Nie stosuj alkoholu do czyszczenia rany. Użyj czystego opatrunku, chustki lub materiału do zatamowania krwawienia i zabezpieczenia rany przed infekcją. W przypadku przesiąknięcia opatrunku nie zdejmuj go, tylko dołóż kolejną wartwę opatrunku. Pamiętaj o bezpośrednim ucisku na ranę, w takim stopniu, by nie zahamować krążenia. 3) Wezwanie pomocy medycznej - Jeśli krwotok jest poważny lub nie możesz go zatrzymać, wezwij pomoc medyczną natychmiast (numer alarmowy: 112 lub 999). 4) Kontrola stanu poszkodowanego - Sprawdzaj oddech, puls i reakcję na bodźce. Gdy poszkodowany zasłabnie lub traci przytomność, upewnij się, że jest w bezpiecznej pozycji i wykonaj resuscytację krążeniowo-oddechową, jeśli to konieczne. 5) Opieka do przybycia pomocy - Kontynuuj stosowanie bezpośredniego ucisku na ranę, aż przybędzie profesjonalna pomoc medyczna. Staraj się uspokoić poszkodowanego, zapewniając mu wsparcie emocjonalne i komfort. ',
    imgHref: 'krwawienie.jpg',
  },
  {
    name: 'Poparzenia',
    text: '1) Sprawdź bezpieczeństwo miejsca - Wyeliminuj wszelkie zagrożenia, takie jak otwarte ognie, substancje chemiczne lub inne niebezpieczne czynniki. 2) Zatrzymaj źródło poparzenia - Opłucz dotknięte miejsce zimną wodą lub usuń nasączone gorącą cieczą lub inną substancją ubranie 3) Chłodzenie miejsca poparzenia - Poparzoną skórę chłodź przez około 10-20 minut pod bieżącą, chłodną wodą. Unikaj stosowania lodu ani niezanurzaj obszaru poparzenia w zimnej wodzie, ponieważ może to prowadzić do dalszych uszkodzeń tkanek. 4) Ocena stopnia poparzenia - I Stopnia: dotyczą tylko górnej warstwy skóry (najczęściej charakteryzują się zaczerwienieniem i bólem). II Stopnia:  dotyczą warstwy skóry i mogą obejmować pęcherze, zaczerwienienie, ból oraz obrzęk. III Stopnia: Obejmują wszystkie warstwy skóry i mogą prowadzić do zniszczenia nerwów, co skutkuje brakiem bólu w dotkniętym obszarze, oraz mogą być charakteryzowane przez zwapnienia, czernie, suchą lub skurczoną skórę. 5) Opatrunek - Nałóż suchy, czysty opatrunek na poparzone miejsce, aby chronić je przed zanieczyszczeniem i zakażeniem. 6) Przeciwdziałanie na ból - Można podać poszkodowanemu leki przeciwbólowe, takie jak paracetamol, o ile nie ma przeciwwskazań medycznych. 7) Wezwij pomoc medyczną - Gdy doszło do poważnych poparzeń dużej powierzchni ciała lub są to poparzenia III Stopnia, wezwij natychmiast pomoc medyczną. ',
    imgHref: 'poparzenia.jpg',
  },
  {
    name: 'Zatrucia',
    text: '1) Ocena bezpieczeństwa - Upewnij się, że miejsce, w którym doszło do zatrucia, jest bezpieczne dla Ciebie i innych osób. 2) Wezwij pomoc medyczną - Pamiętaj, że lepiej dzwonić na pogotowie nawet w przypadku podejrzenia zatrucia, nawet jeśli objawy nie są wyraźnie widoczne, ponieważ niektóre substancje mogą działać szybko i skutecznie. 3) Ocena stanu poszkodowanego - Spróbuj ustalić, co spowodowało zatrucie, jak długo osoba była narażona na substancję oraz jakie objawy obecnie występują. Monitoruj oddech i puls poszkodowanego. Jeśli osoba jest nieprzytomna, sprawdź, czy oddycha i czy występuje puls. W razie potrzeby rozpocznij resuscytację krążeniowo-oddechową. 4) Zabezpiecz substancję - Zabezpiecz próbkę substancji, gdy jest to możliwe. Pomoże to zespołowi medycznemu w diagnostyce i leczeniu. Pamiętaj jednak o swoim bezpieczeństwie przede wszystkim! 5) Udzielenie pomocy - Upewnij się, że poszkodowany nie jest dłużej narażony na toksyny, przykładowo wynieś go z pomieszczenia, w którym są toksyczne opary. Jeśli substancja została spożyta, nie próbuj jej wymiotować, ponieważ może to pogorszyć sytuację. 6) Opieka nad poszkodowanym - Obserwuj zmiany w samopoczuciu i zachowaniu poszkodowanego. Zachowaj spokój i udziel wsparcia emocjonalnego poszkodowanemu.  ',
    imgHref: 'zatrucie.jpg',
  },
  {
    name: 'Zadławienia',
    text: '1) Ocena sytuacji - Natychmiast reaguj, jeśli zauważysz, że osoba ma trudności z oddychaniem lub nie może mówić, kaszleć ani oddychać. 2) Wezwij pomoc medyczną - Gdy osoba jest przytomna, zachęć ją do kaszlu, by usunąć obiekt z dróg oddechowych. Gdy nie jest w stanie mówić, kaszleć ani oddychać, natychmiast wezwij pomoc! 3) Manewr Heimlicha - Wykonaj go gdy osoba nie jest w stanie sama pozbyć się zadławienia. A) Stanij za poszkodowanym i objęciach go rękoma na wysokości klatki piersiowej. B) Chwytaj pięścią górną część brzucha poszkodowanego. C) ykonuj gwałtowne, rychłe uciski w kierunku wewnątrz i do góry, w celu wywołania efektu odkrztuszania. D) Powtarzaj te uciski, aż do usunięcia obiektu lub do przybycia pomocy medycznej. 4) Pomoc osobie nieprzytomnej - Rozpocznij natychmiast RKO. A) Umieść poszkodowanego na płaskiej powierzchni. B) Otwórz drogi oddechowe podnosząc głowę i unosząc brodę. C) Sprawdź obecność oddechu przez 10 sekund. Jeśli nie ma oddechu, rozpocznij uciskanie klatki piersiowej i wykonuj oddechy ratownicze w proporcji 30:2. 5) Opieka nad poszkodowanym - Reaguj na zmiany poszkodowanego. Wykonuj RKO do odzyskania przytomności lub do przejęcia poszkodowanego przez zespół medyczny.',
    imgHref: 'zadlawienie.jpg',
  },
  {
    name: 'Złamania',
    text: '1) Ocena sytuacji - Upewnij się, że miejsce, w którym doszło do złamania, jest bezpieczne dla Ciebie i poszkodowanego. 2) Ocena stanu poszkodowanego - A) Sprawdź przytomność. B) Zapytaj poszkodowanego, czy odczuwa ból lub dyskomfort w określonych miejscach, co może wskazywać na obecność złamania. C) Zauważ ewentualne deformacje, obrzęki lub zasinienia na obszarze podejrzanego złamania. 3) Unieruchom obszar złamania - A) Gdy podejrzewasz złamanie, unieruchom ten obszar ciała, aby zapobiec dalszym uszkodzeniom. B) Upewnij się że unieruchomienie z użytych przedmiotów jest stabilne, oraz czy nie ogranicza krążenia krwi. 4) Ogranicz ruch - A) Zachęć poszkodowanego do ograniczenia ruchu, aby zapobiec kolejnym obrażeniom. B) Gdy złamanie dotyczy kręgosłupa, nie próbuj przemieszczać poszkodowanego i zabezpiecz miejsce, aby zapobiec kolejnym urazom. 5) Złamanie otwarte - W przypadku przebicia kości przez skórę, przyłóż czysty opatrunek do rany, aby zapobiec zakażeniu. 6) Wezwij pomoc medyczną - Przy złamaniach zawsze dzwoń po profesjonalną pomoc medyczną. 7) Opieka nad poszkodowanym - Sprawdzaj oddech, puls i reakcje na bodźce. Zapewnim mu też wsparcie emocjonalne i komfort do przejęcia poszkodowanego przez zespół medyczny.',
    imgHref: 'zlamanie.jpg',
  },
  {
    name: 'Odmrożenia',
    text: '1) Ocena sytuacji - Zabezpiecz się i poszkodowanego przed dalszym wystawieniem na niskie temperatury. 2) Oceń stopień odmrożenia - I Stopnia: dotyczą skóry i są charakteryzowane przez zaczerwienienie, bolesność i obrzęk. II Stopnia: obejmują skórę oraz tkanki podskórne i mogą powodować pęcherze, zaczerwienienie, ból i obrzęk. III Stopnia: najpoważniejsze, obejmują wszystkie warstwy skóry oraz tkanki podskórne, mogą prowadzić do zamarznięcia tkanek i mogą być charakteryzowane przez zsiniałą, twardą i nieczułą skórę. 3) Stopniowo ogrzewaj dotknięte obszary - A) Przenieś poszkodowanego do ciepłego i suchego miejsca B) Rozgrzej dotknięte obszary stopniowo, stosując ciepłe, nie gorące kompresy lub wkładając dotknięte dłonie lub stopy pod ciepłą wodę. C) Unikaj gniewnego masażu lub tarcia dotkniętych obszarów, ponieważ może to pogorszyć uszkodzenia skóry. 4) Zabezpieczenie odmrożeń - A) Nie przebijaj pęcherzy, które mogą pojawić się w przypadku odmrożeń drugiego stopnia. B) Nałóż suchy, czysty opatrunek na dotknięte obszary, aby chronić je przed zanieczyszczeniem i zakażeniem. 5) Unikaj narażenia na zimno - Zapewnij odpowiednią odzież i izolację, aby uniknąć dalszego wystawienia na niskie temperatury. 6) Wezwij pomoc medyczną - Jeśli odmrożenia są poważne lub dotykają duże obszary ciała, wezwij pomoc medyczną i udaj się do najbliższego szpitala.',
    imgHref: 'odmrozenie.jpg',
  },
]

const pierwszaPomoc = () => {
  return (
    <div>
      {/* Napis główny */}
      <p className='text-center text-5xl'>Algorytmy pierwszej pomocy</p>
      {slides.map((s, i) => <Slide name={s.name} text={s.text} imgHref={s.imgHref} index={i} key={i} />)}
    </div>
  )
}

const Slide = ({ name, text, imgHref, index }: { index: number } & SlideType) => {
  const [isHidden, setIsHidden] = useState(true)
  const isOnLeft = index % 2 == 0

  return (
    <div className={`w-full h-[30%] flex my-4 border-b border-red-500 pb-4 ${isOnLeft ? 'justify-start': 'justify-end'}`}>
      {/* div z zdjęciem i nazwą przypadku po lewej stronie*/}
      {
        isOnLeft?
        <>
          <SlideExpandCollapseButton text={name} imgHref={imgHref} value={isHidden} dispatch={setIsHidden} />
          <SlideExpandCollapse text={text} value={isHidden} dispatch={setIsHidden} />
        </> :
        <>
          <SlideExpandCollapse text={text} value={isHidden} dispatch={setIsHidden} />
          <SlideExpandCollapseButton text={name} imgHref={imgHref} value={isHidden} dispatch={setIsHidden} />
        </>
      }

    </div>
  )
}

const SlideExpandCollapseButton = ({ text, imgHref, value, dispatch }: SlideExpandCollapseButtonType) => {
  const isCollapsedStyle = value ? 'cursor-pointer' : ''

  return (
    <div className={`${isCollapsedStyle} bg-red-200 relative flex items-center justify-center w-[25%] p-[8%] rounded-3xl mx-3`} onClick={() => dispatch(!value)}>
      <img src={imgHref} alt={`${text} background image`} className='w-full h-full absolute object-cover rounded-3xl' />
      <div className='absolute text-left bg-white rounded-3xl lg:p-4 '>
        <p className='md:text-xl lg:text-5xl text-black font-bold'>{text}</p>
      </div>
    </div>
  )
}

const SlideExpandCollapse = ({ text, value, dispatch }: SlideExpandCollapseType) => {
  const transitionDurationInMs = 300

  const isCollapsedDivStyle = value ? 'w-[0%] text-transparent collapse' : 'w-[70%] bg-red-400'
  const isCollapsedPStyle = value ? 'hidden' : ''
  const transitionDivStyle = `transition-all ease-in-out duration-${transitionDurationInMs}`

  const [textHiddenTransitionStyle, setTextHiddenTransitionStyle] = useState<string>('')
  useEffect(() => { new Promise((c) => setTimeout(c, transitionDurationInMs * 0.5)).then(() => setTextHiddenTransitionStyle(value ? 'hidden' : '')) }, [value])

  return (
    <div className={`${isCollapsedDivStyle} ${transitionDivStyle} flex items-center justify-center text-center rounded-3xl`}>
      <p className={`${isCollapsedPStyle} ${textHiddenTransitionStyle} text-3xl text-black`}>{text}</p>
    </div>
  )
}

export default pierwszaPomoc