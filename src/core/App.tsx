import { ThemeProvider } from "styled-components";
import { Hero } from "../features/Hero/hero";
import { theme } from "./theme";
import { GlobalStyles } from "./globalStyles";
import { Portfolio } from "../features/Portfolio/portfolio";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Hero />
            <Portfolio />
        </ThemeProvider>
    );
}

export default App;
