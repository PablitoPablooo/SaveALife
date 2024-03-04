import { GetDatabaseInstance } from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import uuid4 from 'uuid4';

export const GET = async (req: NextRequest) => {
  const db = GetDatabaseInstance('test')
  const users = db.prepare('SELECT * FROM users').all()
  return NextResponse.json({
    users: users
  })
}

export const POST = async (req: NextRequest) => {
  const db = GetDatabaseInstance('test')
  const data = await req.json()
  if (!data) {
    return NextResponse.error()
  }

  const userId = uuid4()

  const registerFields = `("userid", "email", "username", "password")`
  const registerValues = `(@userid, @email, @username, @password)`
  const registerInput = { userid: userId, email: data.email, username: data.username, password: data.password }
  const registerResult = db.prepare(`INSERT INTO users ${registerFields} VALUES ${registerValues}`).run(registerInput)

  const createProfileResult = db.prepare(`INSERT INTO profiles ("userid") VALUES (@userid)`).run({ userid: userId })

  if (registerResult.changes == 0 || createProfileResult.changes == 0) {
    return NextResponse.json({
      message: "Blad podczas rejestrowania uzytkownika."
    }, {
      status: 500
    })
  }

  return NextResponse.json({
    message: "Uzytkownik zarejestrowany pomyslnie"
  }, {
    status: 200
  })
}