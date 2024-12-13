import { ThemeProvider } from "styled-components";
import { Hero } from "../features/Hero/hero";
import { theme } from "./theme";
import { GlobalStyles } from "./globalStyles";
import { Portfolio } from "../features/Portfolio/portfolio";
import { Technologies } from "../features/Technologies/technologies";
import { Border } from "../common/components/components";
import { About } from "../features/About/about";
import { Contact } from "../features/Contact/contact";
import { Navigation } from "../common/Navbar/navigation";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Hero />
            <Navigation />
            <Portfolio />
            <Border />
            <Technologies />
            <Border />
            <About />
            <Border />
            <Contact />
            <Border />
        </ThemeProvider>
    );
}

export default App;
