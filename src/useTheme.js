import { useContext } from "react";
import ThemeContext from "./theme-context.js";

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}
