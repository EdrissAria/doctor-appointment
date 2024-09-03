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

export interface Appointment {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  doctor: Doctor;
  timeSlot: string;
}

export interface AppointmentsState {
  appointments: Appointment[];
}

export type AppointmentsAction = {
  type: string;
  payload: Appointment;
}

export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

export interface ShowNotificationAction {
  type: typeof SHOW_NOTIFICATION;
  payload: {
    message: string;
    type: "success" | "error";
  };
}

export interface HideNotificationAction {
  type: typeof HIDE_NOTIFICATION;
}
