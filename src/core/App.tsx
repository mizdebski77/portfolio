import { ThemeProvider } from "styled-components";
import { Hero } from "../features/Hero/hero";
import { theme } from "./theme";
import { GlobalStyles } from "./globalStyles";
import { Portfolio } from "../features/Portfolio/portfolio";
import { Technologies } from "../features/Technologies/technologies";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Hero />
            <Portfolio />
            <Technologies />
        </ThemeProvider>
    );
}

export default App;
