import { Container, Group, Text, Button, Flex, Image} from "@mantine/core";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#FFC278", padding: "15px 0" }}>
      <Container size="md" >
        <Flex mih={50} justify="space-between" align="center" direction="row">
          <Group gap={4}>
            <Image src="images/logo.png" w={50}/>
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
              style={{backgroundColor: "#006D64"}}
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
