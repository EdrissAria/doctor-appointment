import React from 'react';
import { Container, Image, Text, Title, Group, Badge, Button, Grid } from '@mantine/core';

const DoctorDetailsPage: React.FC = () => {
  const doctor = {
    name: 'Dr. John Doe',
    specialty: 'Cardiology',
    description: 'Dr. John Doe is a highly skilled cardiologist with over 20 years of experience...',
    imageUrl: 'images/edriss.jpg',
    email: 'john.doe@example.com',
    phone: '+123456789',
    experience: 20,
    qualifications: ['MBBS', 'MD', 'FACC'],
    awards: ['Best Doctor 2020', 'Top Cardiologist 2019'],
  };

  return (
    <Container size="md" py="xl">
      <Grid>
        <Grid.Col span={12}>
          <Image src={doctor.imageUrl} radius="md" alt={doctor.name} />
        </Grid.Col>
        <Grid.Col span={12}>
          <Group>
            <div>
              <Title order={2}>{doctor.name}</Title>
              <Text color="dimmed" size="sm">{doctor.specialty}</Text>
            </div>
            <Group>
              <Button
                variant="outline"
                component="a"
                href={`mailto:${doctor.email}`}
              >
                Email
              </Button>
              <Button
                variant="outline"
                component="a"
                href={`tel:${doctor.phone}`}
              >
                Call
              </Button>
            </Group>
          </Group>

          <Text mt="md">{doctor.description}</Text>

          <Group mt="xl" gap={12}>
            <div>
              <Title order={4}>Experience</Title>
              <Text size="sm">{doctor.experience} years</Text>
            </div>
            <div>
              <Title order={4}>Qualifications</Title>
              <Group gap={6} mt="xs">
                {doctor.qualifications.map((qualification, index) => (
                  <Badge key={index} color="green" variant="light">
                    {qualification}
                  </Badge>
                ))}
              </Group>
            </div>
            <div>
              <Title order={4}>Awards</Title>
              <Group gap={6} mt="xs">
                {doctor.awards.map((award, index) => (
                  <Badge key={index} color="teal" variant="light">
                    {award}
                  </Badge>
                ))}
              </Group>
            </div>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default DoctorDetailsPage;
