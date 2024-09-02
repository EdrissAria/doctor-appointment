// src/redux/reducers/rootReducer.ts
import { combineReducers } from 'redux';
import { appointmentsReducer } from './appointmentsReducer';
import { favoriteDoctorsReducer } from './favoriteReducer';

const rootReducer = combineReducers({
  appointments: appointmentsReducer,
  favoriteDoctors: favoriteDoctorsReducer,
});

export default rootReducer;
