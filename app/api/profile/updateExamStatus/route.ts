// Import funkcji 'GetDatabaseInstance' z modułu 'utils/db'
import { GetDatabaseInstance } from '@/utils/db'
// Import obiektów 'NextRequest' i 'NextResponse' z modułu 'next/server'
import { NextRequest, NextResponse } from 'next/server'
// Import typu reprezentującego zapytanie dotyczącego użytkownika
import { getUserQuery } from '../route'

// Typy parametrów do edycji profilu
type getExamStatusToUpdateParams = {
  username: string,
  isExamPassed: boolean,
}

// Obsługa żądania POST
export const POST = async (req: NextRequest) => {
  // Uzyskanie instancji bazy danych
  const db = GetDatabaseInstance('test')

  // Odczyt parametrów z ciała żądania w formacie JSON
  const { username, isExamPassed } = await req.json() as getExamStatusToUpdateParams
  // Wykonanie zapytania SQL do pobrania 'userid' z tabeli 'users' na podstawie 'username'
  const { userid } = db.prepare('SELECT userid FROM users WHERE username=?').get(username) as getUserQuery

  // Aktualizacja danych w tabeli 'profiles' na podstawie 'userid'
  db.prepare('UPDATE profiles SET examstatus=? WHERE examstatus=? AND userid=?').run(Number(isExamPassed), Number(false), userid)

  // Zwrot pustej odpowiedzi
  return NextResponse.json({})
}