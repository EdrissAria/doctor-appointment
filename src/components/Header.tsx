import { Container, Group, Text, Button, Flex, useMantineTheme} from "@mantine/core";
import { Link } from "react-router-dom";
import {IconHeartbeat} from "@tabler/icons-react"

const Header: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <div style={{ backgroundColor: "#FFC278", padding: "15px 0" }}>
      <Container size="md" >
        <Flex mih={50} justify="space-between" align="center" direction="row">
          <Group gap={4}>
            <IconHeartbeat color="teal"/>
            <Text size="sm" style={{color: theme.colors.teal[9]}}>Medical lab</Text>
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
            <Button
              radius="xl"
              style={{background: theme.colors.teal[9]}}
              component={Link}
              to="/book-appointment"
            >
              Book Appointment
            </Button>
          </Group>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
