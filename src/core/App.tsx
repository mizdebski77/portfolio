import { ThemeProvider } from "styled-components";
import { Hero } from "../features/Hero/hero";
import { theme } from "./theme";
import { GlobalStyles } from "./globalStyles";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Hero />
        </ThemeProvider>
    );
}

export default App;
