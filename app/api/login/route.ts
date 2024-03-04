import { GetDatabaseInstance } from '@/utils/db';
import { User } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

type DbUser = {
  userid: string,
  email: string,
  username: string,
  password: string,
}

export const GET = async (req: NextRequest) => {
  const db = GetDatabaseInstance('test')
  const users = db.prepare('SELECT * FROM users').all()
  return NextResponse.json({
    users: users
  })
}

export const POST = async (req: NextRequest) => {
  const db = GetDatabaseInstance('test');
  const data = await req.json();

  if (!data || !data.email || !data.password) {
    return NextResponse.error();
  }

  // Sprawdzenie, czy użytkownik istnieje w bazie danych
  const result = db.prepare('SELECT * FROM users WHERE email=? AND password=?').get(data.email, data.password) as DbUser;

  if (!result) {
    // Jeżeli użytkownik nie istnieje, zwróć odpowiednią wiadomość
    return NextResponse.json(
      {}, {
      status: 401, // 401 Unauthorized
    });
  }

  // Jeżeli użytkownik istnieje, zwróć wiadomość o zalogowaniu
  const user: User = { id: result.userid, email: result.email, name: result.username }
  return NextResponse.json(user, { status: 200 })
};
