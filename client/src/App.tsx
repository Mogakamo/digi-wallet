import { MantineProvider, Text } from '@mantine/core';
import Login from "./routes/Login"

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Login />
    </MantineProvider>
  );
}