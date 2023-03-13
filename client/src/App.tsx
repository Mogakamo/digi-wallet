/* eslint-disable prettier/prettier */
import { MantineProvider, Text } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: 'light' }}
    >
      <Text>Digi Wallet</Text>
    </MantineProvider>
  );
}
