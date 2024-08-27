import { Container, Grid, Text, Title, List, Button } from '@mantine/core';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import ServiceCard from '../ServiceCard';

const services = [
  {
    title: "Expert Doctor",
    description: "You will often study doctors, but most doctors have extra expertise in a type of medicine or medicine-based field.",
    icon: "🧑", // Replace with actual icons
  },
  {
    title: "Medicine",
    description: "They care for people who are critically ill or injured.",
    icon: "💊", // Replace with actual icons
  },
  {
    title: "Cardiology",
    description: "They’re experts on the heart and blood vessels.",
    icon: "❤️", // Replace with actual icons
  },
  {
    title: "Neurology",
    description: "They use X-rays, ultrasounds, and other imaging tech.",
    icon: "🧠", // Replace with actual icons
  },
];

const HospitalServiceSection: React.FC = () => {
  return (
    <Container size="md" mt="xl" py={50}>
      <Grid>
        <Grid.Col span={6}>
          <Text size="sm" color="teal">We provide</Text>
          <Title order={1}>Here is a little more Our Hospital Service</Title>
          <Text size="md" mt="md" color="dimmed">
            We have several gift shops and hair salons on the hospital’s main campus.
          </Text>
          <List
            mt="xl"
            spacing="sm"
            size="md"
            icon={<IconCircleCheckFilled size={20} color="teal" />}
          >
            <List.Item>Expert Doctor</List.Item>
            <List.Item>Medicine</List.Item>
            <List.Item>Cardiology</List.Item>
            <List.Item>Radiologists</List.Item>
          </List>
          <Button variant="light" mt="lg" radius="xl">All service</Button>
        </Grid.Col>
        
        <Grid.Col span={6}>
          <Grid>
            {services.map((service, index) => (
              <ServiceCard index={index} service={service}/>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default HospitalServiceSection;