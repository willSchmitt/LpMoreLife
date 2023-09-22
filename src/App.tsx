import { ThemeProvider } from "styled-components";
import { MoreLifePage } from "./pages/Home";
import { themes } from "./styles/themes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <MoreLifePage />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
