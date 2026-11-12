import { useState } from "react";
import ThemeContext from "./theme-context.js";

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    const toggle = () => {
        setIsDark((prev) => {
            const next = !prev;
            document.documentElement.dataset.theme = next ? "dark" : "";
            return next;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}