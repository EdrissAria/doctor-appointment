import { createStore, Store } from 'redux';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { appointmentsReducer } from './reducers/appointmentsReducer';
import { AppointmentsState, AppointmentsAction } from '../types';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer<AppointmentsState, AppointmentsAction>(
  persistConfig,
  appointmentsReducer
);

export const store: Store<AppointmentsState, AppointmentsAction> = createStore(persistedReducer,composeWithDevTools());
export const persistor: Persistor = persistStore(store);
