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
}

export interface Appointment {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  doctor: string;
  timeSlot: string;
  date: Date | null
}

export interface AppointmentsState {
  appointments: Appointment[];
}

export type AppointmentsAction = {
  type: string;
  payload: Appointment;
}