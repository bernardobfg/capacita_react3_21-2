import { AppRoutes } from "./routes";
import { ContextProvider } from "./contexts";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes/>
      </ThemeProvider>
      <GlobalStyle/>
    </ContextProvider>
    );
}

export default App;
