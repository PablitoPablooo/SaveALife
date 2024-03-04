import { kursyPPPType } from '@/app/kursPPP/page'
import { GetDatabaseInstance } from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const db = GetDatabaseInstance('test')
  const data = db.prepare('SELECT * FROM kursyPPP').all() as kursyPPPType[]
  return NextResponse.json(data)
}