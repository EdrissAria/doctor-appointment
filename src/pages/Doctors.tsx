import React, { useEffect, useState } from "react";
import { Container, Grid, Title, Text } from "@mantine/core";
import DoctorCard from "../components/DoctorCard";
import { useFetchDoctors } from "../hooks/useFetchDoctors";

const Doctors: React.FC = () => {
  const { doctors } = useFetchDoctors();

  return (
    <Container size="lg" py="xl">
      <Title style={{ textAlign: "center" }} mb="lg" order={2}>
        Meet Our Doctors
      </Title>
      <Text style={{ textAlign: "center" }} mb="xl" size="lg" color="dimmed">
        Our team of highly skilled doctors is here to provide the best care
        possible.
      </Text>
      <Grid>
        {doctors.map((doctor) => (
          <Grid.Col span={3} key={doctor.id} mb={4}>
              <DoctorCard
                id={doctor.id}
                showFavIcon={true}
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
