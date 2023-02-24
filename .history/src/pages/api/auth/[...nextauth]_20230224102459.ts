import NextAuth, { User } from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  callbacks: {
    async signIn(user: User, account, profile) {
      return true;
    },
    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
};

export default function (req, res) {
  return NextAuth(req, res, options);
}
