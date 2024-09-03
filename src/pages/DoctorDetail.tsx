import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Image, Text, Title, Group, Badge, Button, Grid, Paper, Stack, Loader, Center } from '@mantine/core';
import { IconMail, IconPhone, IconAward, IconStethoscope } from '@tabler/icons-react';
import Doctor from '../types';

const DoctorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Doctor>(`http://localhost:3333/api/doctors/${id}`)
      .then((response) => {
        setDoctor(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch doctor details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Center style={{ height: '100vh' }}>
        <Loader />
      </Center>
    );
  }

  if (error) {
    return (
      <Center style={{ height: '100vh' }}>
        <Text color="red">{error}</Text>
      </Center>
    );
  }

  if (!doctor) {
    return (
      <Center style={{ height: '100vh' }}>
        <Text color="dimmed">Doctor not found</Text>
      </Center>
    );
  }

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

              <Text>{doctor.description}</Text>

              <Group mt="sm" gap="xl">
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

export default DoctorDetails;
