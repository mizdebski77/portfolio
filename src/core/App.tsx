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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './i18n'; 

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navigation />
            <Hero />
            <Portfolio />
            <Border />
            <Technologies />
            <Border />
            <About />
            <Border />
            <Contact />
            <Border />
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </ThemeProvider>
    );
}

export default App;
