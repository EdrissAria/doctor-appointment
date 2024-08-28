import { Container, Title, Text, Button, Flex } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import DoctorCard from '../DoctorCard';

const doctors = [
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

const MeetDoctorsSection: React.FC = () => {
  return (
    <Container size="xl" p={50} style={{backgroundColor: 'lightgray'}}>
      <Flex mb="lg" direction="row" justify="space-between">
        <div>
          <Text size="sm" color="dimmed">Our Expertise</Text>
          <Title order={2} my="sm">Meet our Expert Doctors</Title>
          <Text size="sm" color="dimmed">Find Specialist Doctors & Hospitals in Bangladesh. Search this website.</Text>
        </div>
        <Button variant="light" radius={50}>See all</Button>
      </Flex>
      
      <Carousel
         withIndicators
         height={500}
         slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
         slideGap={{ base: 0, sm: 'md' }}
         loop
         align="start"
      >
        {doctors.map((doctor, index) => (
          <Carousel.Slide key={index}>
            <DoctorCard 
              name={doctor.name}
              specialty={doctor.specialty}
              description={doctor.description}
              imageUrl={doctor.imageUrl}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default MeetDoctorsSection;
