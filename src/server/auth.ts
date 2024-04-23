
import { env } from '@/env';
import axios from 'axios';
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user'];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session }) => ({
      ...session,
      user: {
        ...session.user,
      },
    }),
    jwt: ({ token }) => {
      console.log('token', token?.token)
      return {
        token
      }
    },
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      // @ts-expect-error unknown
      async authorize(credentials) {
        const apiUrl = `${env.NEXT_PUBLIC_BASE_API_URL}/account/login`;

        try {
          const response = await axios.post(apiUrl, {
            email: credentials?.email,
            password: credentials?.password,
          });

          return response;
        } catch (error) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          // @ts-expect-error unknown error
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          throw new Error(error?.response?.statusText as string);
        }
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
