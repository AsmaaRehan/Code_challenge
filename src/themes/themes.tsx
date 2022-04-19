import React, { useState, createContext } from 'react';
import ThemeModel from '../models/theme_model';

export const ThemeContext = createContext<{ theme: ThemeModel, toggleTheme: () => void }>(
    { theme: {} as ThemeModel, toggleTheme: () => { } }
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