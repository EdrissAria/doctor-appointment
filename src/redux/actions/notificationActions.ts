export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

interface ShowNotificationAction {
  type: typeof SHOW_NOTIFICATION;
  payload: {
    message: string;
    type: "success" | "error";
  };
}

interface HideNotificationAction {
  type: typeof HIDE_NOTIFICATION;
}

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
