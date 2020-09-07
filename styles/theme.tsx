import { createMuiTheme, ThemeProvider as T } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#115293",
    },
  },
});

const ThemeProvider = ({ children }) => {
  return <T theme={theme}>{children}</T>;
};
export default ThemeProvider;
