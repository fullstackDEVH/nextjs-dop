import NextAuth, { User } from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
    async redirect(url, baseUrl) {
      return baseUrl;
    },
    async session(session, user) {
      session.user.id = user.id;
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
