import { Card, Image, Text } from '@mantine/core';

interface DoctorCardProps {
  name: string;
  title: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, title, image }) => {
  return (
    <Card shadow="sm" p="lg" radius="md">
      <Card.Section>
        <Image src={image} alt={name} />
      </Card.Section>
      <Text size="lg" mt="md">
        {name}
      </Text>
      <Text size="sm" color="dimmed" mt="xs">
        {title}
      </Text>
    </Card>
  );
};

export default DoctorCard;
