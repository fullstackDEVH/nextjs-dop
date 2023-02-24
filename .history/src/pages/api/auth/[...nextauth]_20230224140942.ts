import Providers from 'next-auth/providers';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions } from 'next-auth';
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: '424' },
        password: { label: 'Password', type: 'password' },
      },
      // test api
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        if (username !== 'testuser' || password !== '123') {
          throw new Error('Invalid username or password');
        }
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
  pages: {
    login: '/login',
  },
  //   callbacks: {
  //     async jwt({ token }: any) {
  //       token.userRole = 'admin';
  //       return token;
  //     },
  //   },
};
export default NextAuth(authOptions);
