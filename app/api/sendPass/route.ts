import { NextRequest, NextResponse } from 'next/server';
import mailSender from '@/utils/mailer';
import { DbSendPasswordType } from '@/app/wyslijHaslo/page';
import { GetDatabaseInstance } from '@/utils/db';

type DbPasswordReturnType = {
  password: string
}

export const POST = async (req: NextRequest) => {
  const { email } = await req.json() as DbSendPasswordType

  const db = GetDatabaseInstance('test')
  const { password } = db.prepare('SELECT password FROM users WHERE email=?').get(email) as DbPasswordReturnType

  if (!password) {
    return NextResponse.json({ }, { status: 401 })
  }

  const res = await mailSender.sendMail({
    from: {
      name: 'Safe a Life',
      address: process.env.USER as string
    }, // sender address
    to: email, // list of receivers
    subject: 'Przypomnienie hasła', // Subject line
    text: 'Cześć! Oto twoje hasło: ', // plain text body
    html: `<b>Cześć! Oto twoje hasło: ${password}</b>`, // html body
  })

  return NextResponse.json({ }, { status: 200 })
}