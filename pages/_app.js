import { CssBaseline, Container } from "@material-ui/core"
import ThemeProvider from "../styles/theme.tsx";
function MyApp({ Component, pageProps }) {
  return <ThemeProvider>
    <CssBaseline />
    <Container>
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
}

export default MyApp
