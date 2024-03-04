'use client'

import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import { QuestionType } from '../bazaPytan/page'
import { AnswerType } from '@/components/QuestionBaseForm'
import { useSession } from 'next-auth/react'
import ExamFinishPopup from '@/components/ExamFinish'
import Image from 'next/image'
import { questionBaseRequestType } from '../api/pytania/route'

const minutesForExam = 30
const answersCount = 30
const correctAnswersToPassCount = 25

const Egzamin = () => {
  const [isExamStarted, setIsExamStarted] = useState(false)

  return (
    <div className='h-[90%] text-3xl md:text-4xl lg:text-5xl justify-center m-4 mt-16 lg:mt-20 bg-slate-700 rounded-xl'>
    {
      isExamStarted
      ?
      <EgzaminModule />
      :
      <div className='flex flex-col items-center justify-center'>
        <EgzaminInfo />
        <p
          className='w-[80%] md:w-[50%] lg:w-[30%] rounded-2xl bg-red-800 hover:bg-yellow-600 text-center p-1 mt-12'
          onClick={() => setIsExamStarted(!isExamStarted)}
        >
          Rozpocznij
        </p>
      </div>
    }
    </div>
  )
}

const EgzaminModule = () => {
  const session = useSession()
  if (session.status !== 'authenticated'){
    redirect('/')
  }

  const [isLoading, setIsLoading] = useState(true)
  const [questions, setQuestions] = useState<QuestionType[]>()
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetch('http://localhost:3000/api/pytania', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify({
          amount: 30,
          isRandomized: true
        } as questionBaseRequestType)
      })
      const data = await res.json() as QuestionType[]
      setQuestions(data)
    }

    fetchQuestions().then(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    const updateExamStatus = async (isExamPassed: boolean) => {
      if (!session.data.user) {
        return
      }

      await fetch('http://localhost:3000/api/profile/updateExamStatus',
      {
        method: 'POST',
        body: JSON.stringify({ username: session.data.user.name, isExamPassed: isExamPassed })
      })
    }

    if (questionIndex > answersCount - 1) {
      const isPassed = correctAnswers >= correctAnswersToPassCount

      updateExamStatus(isPassed)
      setIsFinished(true)
    }
  }, [questionIndex])

  if (isLoading || !questions || questions.length == 0) {
    return (
      <div className='h-full w-full flex flex-col items-center justify-center'>
        <Image src='/loading.gif' alt='loading' width={256} height={256} />
      </div>
    )
  }

  const question = questions[questionIndex]

  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      {
        isFinished
        ? <ExamFinishPopup score={correctAnswers} maxScore={answersCount} passScore={correctAnswersToPassCount} />
        :
        <>
          <EgzaminModuleTimer />
          <p>{questionIndex >= answersCount ? questionIndex : questionIndex + 1}/{answersCount}</p>
          <EgzaminQuestionForm
            question={question}
            questionIndex={questionIndex}
            questionIndexDispatch={setQuestionIndex}
            correctAnswers={correctAnswers}
            correctAnswersDispatch={setCorrectAnswers}
          />
        </>
      }
    </div>

  )
}

type EgzaminQuestionFormType = {
  question: QuestionType | undefined,
  questionIndex: number,
  questionIndexDispatch: any,
  correctAnswers: number,
  correctAnswersDispatch: any
}

const EgzaminQuestionForm = ({ question, questionIndex, questionIndexDispatch, correctAnswers, correctAnswersDispatch } : EgzaminQuestionFormType) => {
  const [randomizedAnswers, setRandomizedAnswers] = useState<AnswerType[]>()

  useEffect(() => {
    if (!question) {
      return
    }
  
    const answers = [
      { answer: question.correct, isCorrect: true },
      { answer: question.wrong1, isCorrect: false },
      { answer: question.wrong2, isCorrect: false },
      { answer: question.wrong3, isCorrect: false },
    ].sort(() => Math.random() - 0.5)

    setRandomizedAnswers(answers)
  }, [question])

  const handleSelectAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      correctAnswersDispatch(correctAnswers + 1)
    }

    questionIndexDispatch(questionIndex + 1)
  }

  if (!question || !randomizedAnswers) {
    return
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-12 text-xl md:text-2xl lg:text-3xl mt-2 md:mt-8 lg:mt-12'>
      <b>{question.title}</b>
      <div className='flex flex-col items-center justify-center text-center gap-4 w-full'>
        {randomizedAnswers && randomizedAnswers.map((a, i) =>
        <p
          key={i}
          onClick={() => handleSelectAnswer(a.isCorrect)}
          className='p-2 border border-red-500 rounded-3xl w-[90%] md:w-[70%] lg:w-[50%] bg-slate-700 hover:cursor-pointer hover:brightness-125 select-none'
        >
          {a.answer}
        </p>)}
      </div>
    </div>
  )
}

{/* <p className='border border-red-500 rounded-3xl p-2 select-none hover:cursor-pointer' onClick={() => handleSelectAnswer(false)}>{question.wrong3}</p> */}

const EgzaminModuleTimer = () => {
  const interval = 200
  const miliseconds = 1000
  const seconds = 60

  const timeoutInMs = miliseconds * seconds * minutesForExam
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const timerIncerement = setInterval(() => setTimer(t => t + interval), interval)
    return () => clearInterval(timerIncerement)
  }, [])

  useEffect(() => {
    if (timer > timeoutInMs) {
      redirect('/')
    }
  }, [timer])

  const timeLeftInMinutes = ((timeoutInMs - timer) / miliseconds).toFixed(0)

  return (
    <p>Czas do końca: {timeLeftInMinutes}s</p>
  )
}

const EgzaminInfo = () => {
  return (
    <div className='flex flex-col items-start justify-center m-4 p-4 text-xl md:text-2xl lg:text-4xl'>
      <p className='underline py-4'>
        Przed Tobą egzamin podstawowej pierwszej pomocy.
      </p>
      <p className='py-4'>- Masz {minutesForExam} minut na udzielenie odpowiedzi na {answersCount} pytań.</p>
      <p className='py-4'>- Pytania są jednokrotnego wyboru.</p>
      <p className='py-4'>- Aby zaliczyć egzamin musisz uzyskać {correctAnswersToPassCount} poprawnych odpowiedzi.</p>
      <p className='py-4 text-yellow-300 underline'>POWODZENIA!</p>
    </div>
  )
}

export default Egzamin