import { Geist, DM_Mono, Instrument_Sans, Source_Serif_4 } from 'next/font/google';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' });
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument-sans',
  display: 'swap',
});
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-source-serif',
  display: 'swap',
});

export const fontVariables = `${geistSans.variable} ${dmMono.variable} ${instrumentSans.variable} ${sourceSerif.variable}`;
