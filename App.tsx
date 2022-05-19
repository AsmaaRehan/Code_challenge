
import React from 'react';
import NavigationScreens from './src/Navigation/nativgation';
import { ThemeProvider } from './src/themes/themes'
import './i18n';


//Redux
import { Provider } from 'react-redux';
import { persistor, store } from './src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <NavigationScreens />
        </ThemeProvider>
      </PersistGate>

    </Provider>

  );
};
export default App;
