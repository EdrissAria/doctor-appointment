import { Box, Text, Title, Button, Group, Flex } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const HealthCareSection: React.FC = () => {
  const [_, scrollTo] = useWindowScroll();

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
      <Flex
        p={50}
        justify="space-between"
        align="center"
        direction={{ base: "column", sm: "row" }}
      >
        <Group
          style={{
            width: "100%",
          }}
        >
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
              onClick={() => {
                scrollTo({ y: 600 });
              }}
            >
              About Us
            </Button>
            <Button
              onClick={() => {
                scrollTo({ y: 1100 });
              }}
              variant="outline"
              radius={50}
              size="md"
              color="white"
            >
              Our Service
            </Button>
          </Group>
        </Group>
        <Group style={{ width: "100%", justifyContent: "center" }}>
          <img
            src="images/doctor.png"
            width={500}
            style={{ maxWidth: "100%" }}
          />
        </Group>
      </Flex>
    </Box>
  );
};

export default HealthCareSection;
