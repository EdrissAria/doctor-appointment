// GlobalNotification.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Notification, rem } from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";
import { hideNotification } from "../redux/actions/notificationActions";

const GlobalNotification: React.FC = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state: any) => state.notification);

  if (!notification.visible) return null;

  const icon = notification.type === "success" ? <IconCheck size={rem(20)} /> : <IconX size={rem(20)} />;
  const color = notification.type === "success" ? "teal" : "red";

  return (
    <Notification
      icon={icon}
      color={color}
      title={notification.type === "success" ? "Success" : "Error"}
      onClose={() => dispatch(hideNotification())}
      mt="xl"
    >
      {notification.message}
    </Notification>
  );
};

export default GlobalNotification;
