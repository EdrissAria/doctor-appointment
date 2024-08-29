import React from "react";
import { Container, Group, Text, Flex, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import AppointmentModal from '../components/Modal';

const Header: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#FFC278", padding: "15px 0" }}>
      <Container size="md">
        <Flex mih={50} justify="space-between" align="center" direction="row">
          <Group gap={4}>
            <Image src="/images/logo.png" w={50}/>
          </Group>

          <Group gap={50}>
            <Text component={Link} size="sm" to="/" >
              Home
            </Text>
            <Text component={Link} size="sm" to="/blog">
              Blog
            </Text>
            <Text component={Link} size="sm" to="/doctors">
              Doctors
            </Text>
            <AppointmentModal />
          </Group>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
