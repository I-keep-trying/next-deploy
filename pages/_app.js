import '../styles/globals.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import chakra_theme from './chakra_theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakra_theme}>
      <ColorModeScript
        initialColorMode={chakra_theme.config.initialColorMode}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
