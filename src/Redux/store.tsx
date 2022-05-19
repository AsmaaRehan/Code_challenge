
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import PromiseMW from 'redux-promise';
import RootReducer from './Reducers/root_reducer';
import { persistStore, persistReducer } from 'redux-persist';

export const persistConfig = {
    key: 'root-key',
    storage: AsyncStorage,
    whitelist: ['NewsData']
};

let CreateStoreWithMW = applyMiddleware(PromiseMW)(createStore);
let persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = CreateStoreWithMW(persistedReducer);
export const persistor = persistStore(store);
