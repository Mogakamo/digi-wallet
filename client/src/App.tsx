/* eslint-disable prettier/prettier */
import { MantineProvider, Text } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Digi Wallet</Text>
    </MantineProvider>
  );
}
