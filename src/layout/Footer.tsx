import {
  Container,
  Grid,
  Text,
  Title,
  Anchor,
  Flex,
  Button,
  ActionIcon,
  Input,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9f9", padding: "2rem 0" }}>
      <Container>
        <Grid>
          <Grid.Col span={3} mb={3}>
            <Title order={3} style={{ color: "#006D64" }}>
              Design Lab
            </Title>
            <Text size="sm" color="dimmed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </Text>
            <Text mt="sm">Follow Us</Text>
            <Flex gap="sm" mt="xs">
              <ActionIcon color="dark" size="lg">
                <IconBrandFacebook />
              </ActionIcon>
              <ActionIcon color="dark" size="lg">
                <IconBrandTwitter />
              </ActionIcon>
              <ActionIcon color="dark" size="lg">
                <IconBrandLinkedin />
              </ActionIcon>
              <ActionIcon color="dark" size="lg">
                <IconBrandInstagram />
              </ActionIcon>
            </Flex>
          </Grid.Col>

          <Grid.Col span={3} mb={2}>
            <Title order={5} mb="sm">
              Useful Links
            </Title>
            <Anchor href="#" color="dimmed" size="sm" mb="xs">
              Home
            </Anchor>
            <br />
            <Anchor href="#" color="dimmed" size="sm" mb="xs">
              Blog
            </Anchor>
            <br />
            <Anchor href="#" color="dimmed" size="sm" mb="xs">
              Doctors
            </Anchor>
            <br />
            <Anchor href="#" color="dimmed" size="sm" mb="xs">
              Contact Us
            </Anchor>
            <br />
          </Grid.Col>

          <Grid.Col span={3} mb={2}>
            <Title order={5} mb="sm">
              More
            </Title>
            <Anchor href="#" color="dimmed" size="sm" mb="xs">
              Expert Doctor
            </Anchor>
            <br />
            <Anchor href="#" color="dimmed" size="sm" mb="xs">
              Medicine
            </Anchor>
            <br />
            <Anchor href="#" color="dimmed" size="sm" mb="xs">
              Cardiology
            </Anchor>
            <br />
            <Anchor href="#" color="dimmed" size="sm" mb="xs">
              Neurology
            </Anchor>
            <br />
          </Grid.Col>

          <Grid.Col span={3} mb={4}>
            <Title order={5} mb="sm">
              Newsletter
            </Title>
            <Flex gap={10}>
              <Input radius="xl" placeholder="email" />
              <Button radius={50} size="sm" color="black" w={90}>
                <Text size="sm">Send</Text>
              </Button>
            </Flex>
          </Grid.Col>
        </Grid>
        <Text size="xs" color="dimmed" mt="xl" style={{ textAlign: "center" }}>
          Copyright © 2024 Aria. All right reserved.
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
