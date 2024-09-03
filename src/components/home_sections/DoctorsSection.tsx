import { Container, Title, Text, Button, Flex, Anchor } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import DoctorCard from "../DoctorCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Doctor from "../../types";

const MeetDoctorsSection: React.FC = () => {
  const doctorsRef = useRef<HTMLDivElement>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3333/api/doctors")
      .then((response) => {
        setDoctors(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  return (
    <Container size="xl" p={50} ref={doctorsRef}>
      <Flex mb="lg" direction="row" justify="space-between">
        <div>
          <Text size="sm" color="dimmed">
            Our Expertise
          </Text>
          <Title order={2} my="sm">
            Meet our Expert Doctors
          </Title>
          <Text size="sm" color="dimmed">
            Find Specialist Doctors & Hospitals in Bangladesh. Search this
            website.
          </Text>
        </div>
        <Button variant="light" color="#006D64" radius={50}>
          <Anchor href="/doctors" style={{color: '#006D64'}} underline="never">See all</Anchor>
        </Button>
      </Flex>

      <Carousel
       withIndicators
       height={400}
       slideSize="33.333333%"
       slideGap="md"
       loop
       controlsOffset="xl"
      >
        {doctors.map((doctor) => (
          <Carousel.Slide key={doctor.id}>
            <DoctorCard
              id={doctor.id}
              showFavIcon={false}
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
