import '@styles/globals.css';
import 'leaflet/dist/leaflet.css';
import '@mantine/core/styles.css';
import { Libre_Franklin } from 'next/font/google';

import React from 'react';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { NextUIProvider } from '@nextui-org/react';
import { MantineProvider, createTheme } from '@mantine/core';
import { ThemeProvider as NextThemesProvider } from "next-themes";

const theme = createTheme({
  colors: {
    dark: [
      '#FAFAFA',
      '#F4F4F5',
      '#E4E4E7',
      '#D4D4D8',
      '#A1A1AA',
      '#71717A',
      '#52525B',
      '#303030',
      '#27272A',
      '#18181B',
    ],
  },
});

const libreFranklin = Libre_Franklin({ subsets: ['latin'], display: 'swap' });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <React.StrictMode>
      <NextUIProvider navigate={router.push}>
        <MantineProvider theme={theme} defaultColorScheme="dark" withCssVariables>
          <NextThemesProvider attribute="class" defaultTheme='dark' enableSystem={false} enableColorScheme={false}>
            <main className={libreFranklin.className}>
              <Component {...pageProps} />
              <Analytics />
            </main>
          </NextThemesProvider>
        </MantineProvider>
      </NextUIProvider>
    </React.StrictMode>
  );
}
