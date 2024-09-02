export const TOGGLE_FAVORITE_DOCTOR = "TOGGLE_FAVORITE_DOCTOR";

export const toggleFavoriteDoctor = (doctorId: number) => ({
  type: TOGGLE_FAVORITE_DOCTOR,
  payload: doctorId,
});
