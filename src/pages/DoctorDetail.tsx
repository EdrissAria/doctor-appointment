import React from 'react';
import { Container, Image, Text, Title, Group, Badge, Button, Grid, Paper, Stack } from '@mantine/core';
import { IconMail, IconPhone, IconAward, IconStethoscope } from '@tabler/icons-react';

const DoctorDetailsPage: React.FC = () => {
  const doctor = {
    name: 'Dr. John Doe',
    specialty: 'Cardiology',
    description: 'Dr. John Doe is a highly skilled cardiologist with over 20 years of experience in treating complex heart conditions. He is committed to providing the highest standard of care to his patients.',
    imageUrl: '/images/edriss.jpg',
    email: 'john.doe@example.com',
    phone: '+123456789',
    experience: 20,
    qualifications: ['MBBS', 'MD', 'FACC'],
    awards: ['Best Doctor 2020', 'Top Cardiologist 2019'],
  };

  return (
    <Container size="md" py="xl">
      <Paper shadow="sm" p="xl" radius="md">
        <Grid>
          <Grid.Col span={4}>
            <Image src={doctor.imageUrl} radius="md" alt={doctor.name} />
          </Grid.Col>
          <Grid.Col span={8}>
            <Stack gap="sm">
              <div>
                <Title order={2}>{doctor.name}</Title>
                <Text color="dimmed" size="md">
                  <IconStethoscope size={20} style={{ marginRight: 5 }} /> {doctor.specialty}
                </Text>
              </div>

              <Text mt="md">{doctor.description}</Text>

              <Group mt="lg" gap="xl">
                <Button
                  variant="outline"
                  leftSection={<IconMail size={16} />}
                  component="a"
                  href={`mailto:${doctor.email}`}
                  color='teal'
                >
                  Email
                </Button>
                <Button
                  variant="outline"
                  leftSection={<IconPhone size={16} />}
                  component="a"
                  href={`tel:${doctor.phone}`}
                  color='teal'
                >
                  Call
                </Button>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>

      <Paper shadow="sm" p="xl" radius="md" mt="xl">
        <Grid>
          <Grid.Col span={4}>
            <Title order={4}>Experience</Title>
            <Text size="sm">{doctor.experience} years</Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Title order={4}>Qualifications</Title>
            <Group gap={6} mt="xs">
              {doctor.qualifications.map((qualification, index) => (
                <Badge key={index} color="green" variant="light">
                  {qualification}
                </Badge>
              ))}
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Title order={4}>Awards</Title>
            <Group gap={6} mt="xs">
              {doctor.awards.map((award, index) => (
                <Badge key={index} color="teal" variant="light" leftSection={<IconAward size={14} />}>
                  {award}
                </Badge>
              ))}
            </Group>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default DoctorDetailsPage;
