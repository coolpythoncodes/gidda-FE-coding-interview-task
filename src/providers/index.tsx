'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { useState, type PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <>
            <SessionProvider refetchInterval={4 * 60} refetchOnWindowFocus={true}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </SessionProvider>
        </>
    );
};

export default Providers;
