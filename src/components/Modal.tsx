import React, { useState } from 'react';
import { Modal, Button, TextInput, Textarea, Select, Group } from '@mantine/core';

const AppointmentModal: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    doctor: '',
    timeSlot: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setOpened(false); 
  };

  return (
    <>
      <Button onClick={() => setOpened(true)} radius="xl" style={{ backgroundColor: '#006D64' }}>
        Book Appointment
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Book an Appointment"
        centered
      >
        <TextInput
          label="First Name"
          placeholder="John"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Last Name"
          placeholder="Doe"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          mt="md"
        />
        <TextInput
          label="Email"
          placeholder="john.doe@example.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          mt="md"
        />
        <TextInput
          label="Phone"
          placeholder="+1234567890"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          mt="md"
        />
        <Textarea
          label="Description"
          placeholder="Describe your issue"
          name="description"
          value={formData.description}
          onChange={handleChange}
          mt="md"
        />
        <Select
          label="Choose Doctor"
          placeholder="Pick one"
          value={formData.doctor}
          onChange={(value) => handleSelectChange('doctor', value!)}
          data={['Dr. Smith', 'Dr. Johnson', 'Dr. Williams']}
          mt="md"
          required
        />
        <Select
          label="Select Time Slot"
          placeholder="Pick a time"
          value={formData.timeSlot}
          onChange={(value) => handleSelectChange('timeSlot', value!)}
          data={[
            '09:00 AM - 10:00 AM',
            '10:00 AM - 11:00 AM',
            '11:00 AM - 12:00 PM',
            '01:00 PM - 02:00 PM',
            '02:00 PM - 03:00 PM',
            '03:00 PM - 04:00 PM',
            '04:00 PM - 05:00 PM',
          ]}
          mt="md"
          required
        />
        <Group mt="md">
          <Button onClick={handleSubmit} radius="xl" style={{ backgroundColor: '#006D64' }}>
            Submit
          </Button>
        </Group>
      </Modal>
    </>
  );
};

export default AppointmentModal;
