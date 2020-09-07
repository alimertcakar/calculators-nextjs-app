import { CssBaseline, Container } from "@material-ui/core"
import ThemeProvider from "../styles/theme.tsx";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <ThemeProvider>
    <CssBaseline />
    <Container>
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
}

export default MyApp
