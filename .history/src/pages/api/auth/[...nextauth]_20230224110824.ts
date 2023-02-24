import Providers from 'next-auth/providers';
import type { NextApiRequest, NextApiResponse } from 'next';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions } from 'next-auth';
// const options: any = {
//   secret: process.env.SECRET,
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
//   callbacks: {
//     async signIn(user: User, account: any, profile: any) {
//       return true;
//     },
//     async redirect(url: any, baseUrl: any) {
//       return baseUrl;
//     },
//     async session(session: any, user: User) {
//       session.user.id = user.id;
//       return session;
//     },
//     async jwt(token: any, user: User, account: any, profile: any, isNewUser: any) {
//       return token;
//     },
//   },
// };

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        if (username !== 'testuser' && password !== '123') return null;
        return { id: '1234', name: 'VBPO', email: 'testuser@example.com' };
        // const res = await fetch('/your/endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { 'Content-Type': 'application/json' },
        // });
        // const user = await res.json();
        // if (res.ok && user) {
        //   return user;
        // }
        // return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token }: any) {
      token.userRole = 'admin';
      return token;
    },
  },
};
export default NextAuth(authOptions);
