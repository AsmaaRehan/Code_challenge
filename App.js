
import React from 'react';
import NavigationScreens from './src/Navigation/nativgation';
import { ThemeProvider } from './src/themes/themes'
import i18next from './i18n'


//Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import PromiseMW from 'redux-promise';
import RootReducer from './src/Redux/Reducers/root_reducer';

let CreateStoreWithMW = applyMiddleware(PromiseMW)(createStore);

const App = () => {
  return (
    <Provider store={CreateStoreWithMW(RootReducer)}>
      <ThemeProvider>
        <NavigationScreens />
      </ThemeProvider>
    </Provider>

  );
};
export default App;
