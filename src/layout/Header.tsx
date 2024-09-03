import React, { useState } from "react";
import {
  Container,
  Group,
  Text,
  Flex,
  Image,
  Burger,
  Drawer,
  em,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";
import AppointmentDrawer from "../components/AppointmentDrawer";
import { useMediaQuery } from "@mantine/hooks";
import { useWindowScroll } from "@mantine/hooks";

const Header: React.FC = () => {
  const [_, scrollTo] = useWindowScroll();

  const [drawerOpened, setDrawerOpened] = useState(false);
  const [appointmentDrawerOpened, setAppointmentDrawerOpened] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <div style={{ backgroundColor: "#FFC278", padding: "15px 0" }}>
      <Container size="md">
        <Flex mih={50} justify="space-between" align="center" direction="row">
          <Group gap={4}>
            <Image src="/images/logo.png" w={50} />
          </Group>
          {isMobile ? (
            <>
              <Burger
                opened={drawerOpened}
                onClick={() => setDrawerOpened((o) => !o)}
                size="sm"
                color="black"
              />
              <Drawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                padding="md"
                position="top"
                size="xs"
              >
                <Flex direction="column" gap="lg" align="center">
                  <Text component={Link} size="xl" to="/">
                    Home
                  </Text>
                  <Text
                    onClick={() => {
                      scrollTo({ y: 2300 });
                    }}
                    style={{ cursor: "pointer" }}
                    size="xl"
                  >
                    Blog
                  </Text>
                  <Text
                    onClick={() => {
                      scrollTo({ y: 1600 });
                    }}
                    style={{ cursor: "pointer" }}
                    size="xl"
                  >
                    Doctors
                  </Text>
                  <Text component={Link} size="xl" to="/profile">
                    Profile
                  </Text>
                  <Button
                    onClick={() => {
                      setDrawerOpened(false);
                      setAppointmentDrawerOpened(true);
                    }}
                    radius="xl"
                    style={{ backgroundColor: "#006D64" }}
                  >
                    Book Appointment
                  </Button>
                </Flex>
              </Drawer>
            </>
          ) : (
            <Group gap={50}>
              <Text component={Link} size="sm" to="/">
                Home
              </Text>
              <Text
                onClick={() => {
                  scrollTo({ y: 2300 });
                }}
                style={{ cursor: "pointer" }}
                size="sm"
              >
                Blog
              </Text>
              <Text
                onClick={() => {
                  scrollTo({ y: 1600 });
                }}
                style={{ cursor: "pointer" }}
                size="sm"
              >
                Doctors
              </Text>
              <Text component={Link} size="sm" to="/profile">
                Profile
              </Text>
              <Button
                onClick={() => setAppointmentDrawerOpened(true)}
                radius="xl"
                style={{ backgroundColor: "#006D64" }}
              >
                Book Appointment
              </Button>
            </Group>
          )}
        </Flex>
      </Container>
      <AppointmentDrawer
        opened={appointmentDrawerOpened}
        onClose={() => setAppointmentDrawerOpened(false)}
      />
    </div>
  );
};

export default Header;
