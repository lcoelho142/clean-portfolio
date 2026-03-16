// 1. These are React imports you need
import { createContext, useContext, useState } from "react";

// 2. Creates an empty container that will hold your theme state
const ThemeContext = createContext();

// 3. This is the component you'll wrap your App with
export function ThemeProvider({ children }) {

// 4. Tracks whether dark mode is on or off
    const [isDark, setIsDark] = useState(false);

// 5. This is the function that runs when the flower is clicked
    const toggle = () => {
        setIsDark((prev) => {
            const next = !prev;
      // 6. THIS is the key line — it puts data-theme="dark" on your
      //    <html> tag, which activates your [data-theme='dark'] block
      //    in index.css automatically
            document.documentElement.dataset.theme = next ? "dark" : "";
        return next;
    });
};

// 7. Makes isDark and toggle available to any component in your app
return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
        {children}
    </ThemeContext.Provider>
    );
}

// 8. This is a shortcut so other components can easily read the theme
export function useTheme() {
    return useContext(ThemeContext);
}