import Providers from 'next-auth/providers';
import type { NextApiRequest, NextApiResponse } from 'next';

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
  callbacks: {
    async jwt({ token }: any) {
      token.userRole = 'admin';
      return token;
    },
  },
};
export default NextAuth(authOptions);
