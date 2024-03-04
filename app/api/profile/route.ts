// Importowanie funkcji 'GetDatabaseInstance' z modułu 'db'
import { GetDatabaseInstance } from '@/utils/db'
// Importowanie obiektów 'NextRequest' i 'NextResponse' z modułu 'next/server'
import { NextRequest, NextResponse } from 'next/server'

// Typ struktury żądania dotyczącego profilu
export type getProfileRequest = {
  username: string
}
// Typ struktury zapytania dotyczącego użytkownika
export type getUserQuery = {
  userid: string
}

// Funkcja obsługująca żądanie POST
export const POST = async (req: NextRequest) => {
  // Dostęp do instancji bazy 
  const db = GetDatabaseInstance('test')
  // Odczytanie pola username z żądania w formacie JSON
  const { username } = await req.json() as getProfileRequest

  // Wykonanie zapytania SQL do pobrania 'userid' z tabeli 'users' na podstawie 'username'
  const { userid } = db.prepare('SELECT userid FROM users WHERE username=?').get(username) as getUserQuery
  // Wykonanie zapytania SQL do pobrania profilu z tabeli 'profiles' na podstawie 'userid'
  const profile = db.prepare('SELECT * FROM profiles WHERE userid=?').get(userid)
  // Zwrot odpowiedzi zawierającej pobrany profil w formie JSON 
  return NextResponse.json(profile)
}