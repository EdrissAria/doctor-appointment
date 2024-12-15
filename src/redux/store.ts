import { createStore, Store } from 'redux';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store = createStore(persistedReducer);
export const persistor: Persistor = persistStore(store);
