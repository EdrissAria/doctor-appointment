import { Appointment, AppointmentsAction} from "../../types";

export const ADD_APPOINTMENT = "ADD_APPOINTMENT";

export const addAppointment = (appointment: Appointment): AppointmentsAction => ({
  type: ADD_APPOINTMENT,
  payload: appointment,
});
