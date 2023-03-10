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
      credentials: {},
      // test api
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        if (username !== 'testuser' || password !== '123') {
          throw new Error('Invalid username or password');
        }
        return {
          id: '1234',
          displayName: 'VBPO',
          email: 'testuser@example.com',
          token: 'abcd13455',
        };
      },
      // async authorize(credentials, req) {
      //   try {
      //     const res = await fetch('/api/login', {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify(credentials),
      //     });

      //     if (!res.ok) {
      //       throw new Error(await res.text());
      //     }
      //     const data = await res.json();
      //     const { username }: any = jwt_decode(data.token);
      //     return { username, jwt: data.token };
      //   } catch (error) {
      //     throw new Error('Invalid username or password');
      //   }
      // },
    }),
  ],
  callbacks: {
    async jwt({ token }: any) {
      token.userRole = 'admin';
      return token;
    },
    // async redirect({ url, baseUrl }) {
    //   if (url.startsWith('/')) return `${baseUrl}${url}`;
    //   else if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    // },
  },

  jwt: {
    secret: 'your-secret-key',
  },
};
// export default (req, res) => NextAuth(req, res, options);
export default NextAuth(authOptions);
