import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from "../../types";
import { NotificationActionTypes } from "../actions/notificationActions";

interface NotificationState {
  visible: boolean;
  message: string;
  type: "success" | "error";
}

const initialState: NotificationState = {
  visible: false,
  message: "",
  type: "success",
};

const notificationReducer = (
  state = initialState,
  action: NotificationActionTypes
): NotificationState => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        visible: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};

export default notificationReducer;
