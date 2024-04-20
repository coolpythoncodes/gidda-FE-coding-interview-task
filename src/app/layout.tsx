import { millik, red_hat_display } from '@/lib/font';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

export const metadata = {
  title: {
    default: 'Gidda',
    template: `Gidda | %s`,
  },
  description:
    'Gidda is on a mission to empower income earning Nigerians to own their first homes before they turn 50 years old. Create an account and join the mission. It’s gonna be a long but fulfilling ride. Let’s Go! 🏎️',
  keywords: ['real estate developers'],
  languages: {
    'en-US': '/en-US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          red_hat_display.className,
          red_hat_display.variable,
          millik.variable,
          millik.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
