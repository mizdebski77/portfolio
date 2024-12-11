import { createRoot } from "react-dom/client";
import App from "./core/App.tsx";
import { GlobalStyles } from "./core/GlobalStyles.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme.ts";

createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
);
