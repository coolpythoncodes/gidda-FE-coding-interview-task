import { authOptions } from '@/server/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { type ReactNode } from 'react';

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const session = await getServerSession(authOptions);
    if (!session) return redirect('/login');
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
