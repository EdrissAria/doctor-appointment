import React from 'react';
import { Container, Grid, Title, Text } from '@mantine/core';
import DoctorCard from '../components/DoctorCard';  

const doctorsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    description: 'Expert in heart-related issues.',
    imageUrl: 'images/edriss.jpg', 
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialty: 'Dermatologist',
    description: 'Specialist in skin problems.',
    imageUrl: 'images/edriss.jpg',
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    specialty: 'Pediatrician',
    description: 'Caring for children’s health.',
    imageUrl: 'images/edriss.jpg',
  },
];

const Doctors: React.FC = () => {
  return (
    <Container size="lg" py="xl">
      <Title style={{ textAlign: "center" }} mb="lg" order={2}>
        Meet Our Doctors
      </Title>
      <Text style={{ textAlign: "center" }} mb="xl" size="lg" color="dimmed">
        Our team of highly skilled doctors is here to provide the best care possible.
      </Text>
      <Grid>
        {doctorsData.map((doctor) => (
          <Grid.Col span={3} key={doctor.id} mb={4}>
            <DoctorCard 
              name={doctor.name}
              specialty={doctor.specialty}
              description={doctor.description}
              imageUrl={doctor.imageUrl}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Doctors;
