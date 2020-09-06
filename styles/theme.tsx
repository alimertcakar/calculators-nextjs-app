import { createMuiTheme, ThemeProvider as T } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f0f",
    },
  },
});

const ThemeProvider = ({ children }) => {
  return <T theme={theme}>{children}</T>;
};
export default ThemeProvider;
