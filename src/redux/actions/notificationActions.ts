import { HIDE_NOTIFICATION, HideNotificationAction, SHOW_NOTIFICATION, ShowNotificationAction } from "../../types";


export const showNotification = (
  message: string,
  notificationType: "success" | "error"
): ShowNotificationAction => ({
  type: SHOW_NOTIFICATION,
  payload: { message, type: notificationType },
});

export const hideNotification = (): HideNotificationAction => ({
  type: HIDE_NOTIFICATION,
});

export type NotificationActionTypes = ShowNotificationAction | HideNotificationAction;
