/* eslint-disable prettier/prettier */
import { MantineProvider, Text } from '@mantine/core';
import { Hero, NavBar } from './components';

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: 'light' }}
    >
      <NavBar
        links={[
          {
            link: '',
            label: 'Features',
            links: [
              { link: 'https://digi-wallet-docs.vercel.app', label: 'Docs' },
              // { link: '', label: 'Feature 2' },
              // { link: '', label: 'Feature 3' },
            ],
          },
          {
            link: '',
            label: 'About',
            // links: []
          },
          {
            link: '',
            label: 'Pricing',
            // links: []
          },
          {
            link: '',
            label: 'Support',
            links: [
              { link: '', label: 'FAQ' },
              { link: '', label: 'Book a Demo' },
              { link: '', label: 'Forums' },
            ],
          },
        ]}
      />
      <Hero />
    </MantineProvider>
  );
}
