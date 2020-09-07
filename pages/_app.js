import { CssBaseline, Container } from "@material-ui/core"
import ThemeProvider from "../styles/theme.tsx";
import Footer from "../src/Footer";
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
    <Footer />

  </ThemeProvider>
}

export default MyApp
