import { combineReducers } from 'redux';
import { appointmentsReducer } from './appointmentsReducer';
import { favoriteDoctorsReducer } from './favoriteReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  appointments: appointmentsReducer,
  favoriteDoctors: favoriteDoctorsReducer,
  notification: notificationReducer
});

export default rootReducer;
