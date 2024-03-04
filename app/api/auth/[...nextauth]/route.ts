import NextAuth, { AuthOptions, User } from 'next-auth'
import CredentialsProvider  from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: '' },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const reqBody = JSON.stringify({
          email: credentials?.email,
          password: credentials?.password,
        })

        const userDataReq = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          body: reqBody,
        })

        const user = await userDataReq.json() as User
        if (!user || !user.id || !user.email || !user.name)
        {
          return null
        }

        return user
      }
    })
  ]
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }