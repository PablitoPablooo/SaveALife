import QuestionBaseForm from '@/components/QuestionBaseForm';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { questionBaseRequestType } from '../api/pytania/route';

export type QuestionType = {
  id: number,
  title: string,
  correct: string,
  wrong1: string,
  wrong2: string,
  wrong3: string
}

const getPytanie = async () => {
  const res = await fetch('http://localhost:3000/api/pytania', {
    method: 'POST',
    body: JSON.stringify({
      amount: 0,
      isRandomized: false,
    } as questionBaseRequestType)
  });
  return await res.json() as QuestionType[];
}

const getPreviousQuestion = (id: number) => {
  if (id === 1) {
    return `?questionID=${id}`
  }

  return `?questionID=${id - 1}`
}

const getNextQuestion = (id: number, max: number) => {
  if (id === max) {
    return `?questionID=${id}`
  }

  return `?questionID=${id + 1}`
}

const getRandomQuestion = (max: number) => {
  return `?questionID=${Math.floor(Math.random() * max - 1) + 1}`
}


const bazaPytan = async ({ searchParams } : { searchParams: { questionID: string } }) => {
  const { questionID } = searchParams
  const questionIdAsNum = Number(questionID)

  const pytania = await getPytanie()
  const pytanie = pytania[questionIdAsNum - 1]
  if (!pytanie) {
    redirect('/not-found')
  }

  return (
    <div className='bg-gray-900 w-[80%] flex flex-col relative mx-[10%] my-12 rounded-lg'>
      <div className='xs:text-lg text-2xl md:text-4xl lg:text-5xl'>
        <QuestionBaseForm
          key={pytanie.id}
          id={pytanie.id}
          count={pytania.length}
          title={pytanie.title}
          correct={pytanie.correct}
          wrong1={pytanie.wrong1}
          wrong2={pytanie.wrong2}
          wrong3={pytanie.wrong3}
        />
        <div className='m-6 mb-12 flex justify-between text-center bg-slate-600 p-2 md:p-4 px-4 md:px-8 rounded-lg text-xs md:text-xl lg:text-4xl'>
          <Link className='rounded-lg p-2 bg-rose-700 hover:bg-rose-500' href={getPreviousQuestion(questionIdAsNum)}>
            Cofnij
          </Link>
          <Link className='rounded-lg border-2 p-2 bg-rose-700 hover:bg-rose-500' href={getRandomQuestion(pytania.length)}>
            Losuj Pytanie
          </Link>
          <Link className='rounded-lg border-2 p-2 bg-rose-700 hover:bg-rose-500' href={getNextQuestion(questionIdAsNum, pytania.length)}>
            Kolejne
          </Link>
        </div>
      </div>
    </div>
  );
}

export default bazaPytan;
