'use client'

import { QuestionType } from '@/app/bazaPytan/page'
import { useEffect, useMemo, useState } from 'react'

export type AnswerType = {
  answer: string,
  isCorrect: boolean,
}

const bulletChar = '•'

const QuestionBaseForm = ({ id, count, title, correct, wrong1, wrong2, wrong3 }: QuestionType & { count: number }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const [questionList, setQuestionList] = useState<AnswerType[]>()

  useEffect(() => {
    if (questionList) {
      return
    }

    const questions = [
      { answer: correct, isCorrect: true },
      { answer: wrong1, isCorrect: false },
      { answer: wrong2, isCorrect: false },
      { answer: wrong3, isCorrect: false },
    ].sort(() => Math.random() - 0.5)

    setQuestionList(questions)
  }, [])

  return (
    <div>
      <div className='bg-slate-600 m-6 mt-12  p-4 text-center rounded-2xl'>
        <p className='text-2xl md:text-5xl lg:text-6xl'>Pytanie: {id} z {count}</p>
      </div>
      <div className='bg-slate-600 m-6 mt-0 rounded-2xl'>
        <div className='text-center p-5 border-b-2 border-white'>
          <p>{title}</p>
        </div>
        <div className='flex flex-col gap-4 justify-start items-start text-left p-4 m-4'>
          {questionList && questionList.map(q => (
            <p key={q.answer} className={`p md:p-2 rounded-3xl ${q.isCorrect && showAnswer ? 'bg-green-500' : ''}`}>
              {bulletChar} {q.answer}
            </p>
          ))}
          <div onClick={() => setShowAnswer(!showAnswer)}>
            { showAnswer ? <p>-</p> : <p>+</p>  }
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionBaseForm