import { ADD_APPOINTMENT } from "../actions/appointmentActions";
import { AppointmentsState, AppointmentsAction } from "../../types";

const initialState: AppointmentsState = {
  appointments: [],
};

export const appointmentsReducer = (
  state = initialState,
  action: AppointmentsAction
): AppointmentsState => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };
    default:
      return state;
  }
};
