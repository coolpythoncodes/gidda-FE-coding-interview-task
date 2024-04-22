import { Red_Hat_Display } from 'next/font/google';
import localFont from 'next/font/local';

export const red_hat_display = Red_Hat_Display({
    subsets: ['latin'],
    variable: '--font-red-hat-display',
});

export const millik = localFont({
    variable: '--font-millik',
    src: [
        {
            path: '../assets/fonts/Millik.otf',
            weight: '400',
            style: 'normal',
        },
    ],
});

