import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Notification, rem, Group } from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";
import { hideNotification } from "../redux/actions/notificationActions";

const GlobalNotification: React.FC = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state: { notification: any }) => state.notification);

  if (!notification.visible) return null;

  const icon = notification.type === "success" ? <IconCheck size={rem(20)} /> : <IconX size={rem(20)} />;
  const color = notification.type === "success" ? "teal" : "red";

  return (
    <Group style={{ zIndex: 1000, position: 'fixed'}} m={20}>
      <Notification
        icon={icon}
        color={color}
        title={notification.type === "success" ? "Success" : "Error"}
        onClose={() => dispatch(hideNotification())}
        withCloseButton
        radius="md"
        style={{
          maxWidth: rem(400),
          width: "100%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        closeButtonProps={{
          'aria-label': 'Close notification',
        }}
        mt="xl"
        mb="xl"
      >
        {notification.message}
      </Notification>
    </Group>
  );
};

export default GlobalNotification;
