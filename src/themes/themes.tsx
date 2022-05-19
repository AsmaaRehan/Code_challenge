import React, { useState, createContext } from 'react';

export const ThemeContext = createContext<{ theme: {}, toggleTheme: () => void }>(
    { theme: {}, toggleTheme: () => { } }
);
export const ThemeProvider = ({ children }: any) => {

    const [theme, setTheme] = useState('Light');

    const toggleTheme = () => {
        if (theme == "Light") {
            setTheme('Dark')
        } else {
            setTheme('Light');
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}