import { QuestionType } from '@/app/bazaPytan/page'
import { GetDatabaseInstance } from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export type questionBaseRequestType = {
  amount: number,
  isRandomized: boolean,
}

type dbQuestionType = {
  questionID: number,
  questionTitle: string,
  correctAnswer: string,
  wrongAnswer1: string,
  wrongAnswer2: string,
  wrongAnswer3: string
}

export const POST = async (req: NextRequest) => {
  const db = GetDatabaseInstance('test')

  //SELECT * FROM questionBase ORDER BY random() LIMIT 30
  const { amount, isRandomized } = await req.json() as questionBaseRequestType
  const query = `SELECT * FROM questionBase ${isRandomized ? 'ORDER BY random()' : ''} ${amount && amount > 0 ? `LIMIT ${amount}` : ''}`
  console.log(query)

  const dbQuestionBase = db.prepare(query).all() as dbQuestionType[]
  const data: QuestionType[] = dbQuestionBase.map(q => ({
    id: q.questionID,
    title: q.questionTitle,
    correct: q.correctAnswer,
    wrong1: q.wrongAnswer1,
    wrong2: q.wrongAnswer2,
    wrong3: q.wrongAnswer3,
  }))

  return NextResponse.json(data)
};
