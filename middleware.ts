import { env } from '@/env';
import { withAuth } from 'next-auth/middleware';

export default withAuth({

    callbacks: {
        authorized: ({ token }) => {
            console.log('middleware token', token)
            return !!token?.token
        }
    },
    pages: {
        signIn: '/login'
    },
    secret: env.NEXTAUTH_SECRET
});

export const config = {
    matcher: ['/dashboard'],
};




