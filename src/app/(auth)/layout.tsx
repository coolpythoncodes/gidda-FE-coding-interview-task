import { Toaster } from '@/components/ui/toaster';
import { type ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>{children}</body>
            <Toaster />
        </html>
    );
};

export default RootLayout;
