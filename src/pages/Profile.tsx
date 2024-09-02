import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Title, Paper, Text, Grid, Stack, Center } from '@mantine/core';
import { IconCalendar, IconUser, IconPhone, IconMail } from '@tabler/icons-react';
import { Appointment } from '../types';

const Profile: React.FC = () => {
  const appointments = useSelector((state: any) => state.appointments); 

  const isUpcoming = (timeSlot: string) => {
    if (!timeSlot) return false;
  
    try {
      const now = new Date();
      const parts = timeSlot.split(' ');
      if (parts.length < 4) return false;
      const [day, startTime, startPeriod, , endTime, endPeriod] = parts;
  
      const appointmentDate = new Date();
      const dayIndex = daysOfWeek.indexOf(day);
      if (dayIndex === -1) return false;
  
      appointmentDate.setDate(now.getDate() + ((7 + dayIndex - now.getDay()) % 7));
  
      const [startHours, startMinutes] = startTime.split(':').map(Number);
      appointmentDate.setHours(startPeriod === 'PM' && startHours !== 12 ? startHours + 12 : startHours, startMinutes);
  
      return appointmentDate > now;
    } catch (error) {
      console.error('Error parsing time slot:', error);
      return false;
    }
  };

  useEffect(()=>{
    console.log('appointments: ',appointments)
  }, [])
  

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const upcomingAppointments = appointments.filter((appointment:Appointment) => isUpcoming(appointment.timeSlot));

  if (upcomingAppointments.length === 0) {
    return (
      <Center style={{ height: '100vh' }}>
        <Text color="dimmed">No upcoming appointments</Text>
      </Center>
    );
  }

  return (
    <Container size="md" py="xl">
      <Title order={2}>Upcoming Appointments</Title>
      {upcomingAppointments.map((appointment: Appointment, index: number) => (
        <Paper shadow="sm" p="xl" radius="md" mb="xl" key={index}>
          <Grid>
            <Grid.Col span={4}>
              <Stack>
                <Title order={4}>Patient Details</Title>
                <Text><IconUser size={16} /> {appointment.firstName} {appointment.lastName}</Text>
                <Text><IconMail size={16} /> {appointment.email}</Text>
                <Text><IconPhone size={16} /> {appointment.phone}</Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={4}>
              <Stack>
                <Title order={4}>Doctor Details</Title>
                <Text><IconUser size={16} /> {appointment.doctor.name}</Text>
                <Text><IconCalendar size={16} /> {appointment.doctor.specialty}</Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={4}>
              <Stack>
                <Title order={4}>Appointment Details</Title>
                <Text>Time Slot: {appointment.timeSlot}</Text>
                <Text>Description: {appointment.description}</Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default Profile;
