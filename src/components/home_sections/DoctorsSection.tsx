import { Container, Title, Text, Button, Flex } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import DoctorCard from '../DoctorCard';

const doctors = [
  {
    name: 'Dr. Cameron Williamson',
    title: 'Neurosurgeon',
    image: 'images/edriss.jpg',
  },
  {
    name: 'Dr. Brooklyn Simmons',
    title: 'Dental Surgeon',
    image: 'images/edriss.jpg',
  },
  {
    name: 'Dr. Leslie Alexander',
    title: 'Medicine',
    image: 'images/edriss.jpg',
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
            <DoctorCard name={doctor.name} title={doctor.title} image={doctor.image} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default MeetDoctorsSection;
