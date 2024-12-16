export default interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  imageUrl: string;
  email: string;
  phone: string;
  experience: number;
  qualifications: string[];
  awards: string[];
  availability: {
    day: string;
    slots: string[];
  }[];
}

export type Appointment = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  doctor: Doctor;
  timeSlot: string;
}

export type AppointmentsState = {
  appointments: Appointment[];
}

export type AppointmentsAction = {
  type: string;
  payload: Appointment;
}

export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

export type ShowNotificationAction = {
  type: typeof SHOW_NOTIFICATION;
  payload: {
    message: string;
    type: "success" | "error";
  };
}

export type HideNotificationAction = {
  type: typeof HIDE_NOTIFICATION;
}
