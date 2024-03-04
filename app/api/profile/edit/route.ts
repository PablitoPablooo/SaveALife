// Import funkcji 'GetDatabaseInstance' z modułu 'utils/db'
import { GetDatabaseInstance } from '@/utils/db'
// Import obiektów 'NextRequest' i 'NextResponse' z modułu 'next/server'
import { NextRequest, NextResponse } from 'next/server'
// Import typu reprezentującego zapytanie dotyczącego użytkownika
import { getUserQuery } from '../route'

// Typy parametrów do edycji profilu
type getProfileToEditParams = {
  username: string,
  newUsername: string,
  newDescription: string,
  newPlace: string,
}

// Obsługa żądania POST
export const POST = async (req: NextRequest) => {
  // Uzyskanie instancji bazy danych
  const db = GetDatabaseInstance('test')

  // Odczyt parametrów z ciała żądania w formacie JSON
  const { username, newUsername, newDescription, newPlace } = await req.json() as getProfileToEditParams
  // Wykonanie zapytania SQL do pobrania 'userid' z tabeli 'users' na podstawie 'username'
  const { userid } = db.prepare('SELECT userid FROM users WHERE username=?').get(username) as getUserQuery

  // Aktualizacja danych w tabeli 'users' na podstawie 'userid'
  db.prepare('UPDATE users SET username=? WHERE userid=?').run(newUsername, userid)
  // Aktualizacja danych w tabeli 'profiles' na podstawie 'userid'
  db.prepare('UPDATE profiles SET description=?, place=? WHERE userid=?').run(newDescription, newPlace, userid)

  // Zwrot pustej odpowiedzi
  return NextResponse.json({})
}