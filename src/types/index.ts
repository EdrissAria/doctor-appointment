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
