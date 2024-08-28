import {
  Container,
  Flex,
  Text,
  Title,
  Button,
  List,
  ThemeIcon,
  Group,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const AboutHospitalSection: React.FC = () => {
  return (
    <Container p={50}>
      <Flex
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap="md"
      >
        <Group>
          <img
            src="images/medicine.png"
            alt="Medical team illustration"
            width={500}
          />
        </Group>

        <Group>
          <Title order={1} mb={10}>
            About Our Hospital
          </Title>
          <Text mb={10} color="#5c5f66">
            A hospital is a healthcare institution providing patient treatment
            with specialized health science and auxiliary healthcare staff and
            medical equipment.
          </Text>

          <List
            spacing="md"
            size="lg"
            icon={
              <ThemeIcon color="#006D64" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>Browse our website</List.Item>
            <List.Item>Choose our service</List.Item>
            <List.Item>Book our expertise</List.Item>
            <List.Item>24/7 Ambulance Service</List.Item>
          </List>

          <Group>
            <Button variant="filled" color="#006D64" size="md" radius={50}>
              Learn More
            </Button>
          </Group>
        </Group>
      </Flex>
    </Container>
  );
};

export default AboutHospitalSection;
