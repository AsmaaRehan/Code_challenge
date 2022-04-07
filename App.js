
import React from 'react';
import NavigationScreens from './src/Navigation/nativgation';
import { ThemeProvider } from './src/themes/themes'
import i18next from './i18n'
const App = () => {
  return (
    <ThemeProvider>
      <NavigationScreens />

    </ThemeProvider>

  );
};
export default App;
