import { TOGGLE_FAVORITE_DOCTOR } from "../actions/favoriteActions";

interface FavoriteDoctorsState {
  favoriteDoctors: number[];
}

const initialState: FavoriteDoctorsState = {
  favoriteDoctors: [],
};

export const favoriteDoctorsReducer = (
  state = initialState,
  action: { type: string; payload: number }
): FavoriteDoctorsState => {
  switch (action.type) {
    case TOGGLE_FAVORITE_DOCTOR:
      return {
        ...state,
        favoriteDoctors: state.favoriteDoctors.includes(action.payload)
          ? state.favoriteDoctors.filter((id) => id !== action.payload)
          : [...state.favoriteDoctors, action.payload],
      };
    default:
      return state;
  }
};
