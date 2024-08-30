import { Box, Text, Title, Button, Group, Flex } from "@mantine/core";

const HealthCareSection: React.FC = () => {
  return (
    <Box
      style={{
        backgroundColor: "#006D64",
        paddingTop: "40px",
        paddingBottom: "40px",
        textAlign: "left",
        height: "100vh",
      }}
    >
      <Flex p={50} justify="space-between" align="center" direction="row">
        <Group>
          <Text color="white" size="md" mb="sm">
            We work to take care of your smile
          </Text>
          <Title order={1} style={{ color: "white" }} mb="md">
            We are built around your needs with digital healthcare
          </Title>
          <Text color="white" size="lg" mb="lg">
            Digital health, or digital healthcare, is a broad, multidisciplinary
            concept that includes concepts from an intersection between
            technology and healthcare.
          </Text>
          <Group mt="xl">
            <Button
              variant="filled"
              size="md"
              radius={50}
              style={{
                color: "#006D64",
                backgroundColor: "white",
              }}
            >
              About Us
            </Button>
            <Button variant="outline" radius={50} size="md" color="white">
              Our Service
            </Button>
          </Group>
        </Group>
        <Group>
          <img src="images/doctor.png" width={500}></img>
        </Group>
      </Flex>
    </Box>
  );
};

export default HealthCareSection;
