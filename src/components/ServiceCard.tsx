import {
  Grid,
  Card,
  Text,
} from "@mantine/core";
type ServiceCardProps = {
    service: {
      icon: string;
      title: string;
      description: string;
    };
    index: number;
  };

const ServiceCard: React.FC<ServiceCardProps> = ({service, index}) => {
  return (
    <Grid.Col span={6} key={index}>
      <Card shadow="sm" p="lg" radius="md">
        <Text size="xl">{service.icon}</Text>
        <Text size="lg" mt="md">
          {service.title}
        </Text>
        <Text size="sm" mt="xs">
          {service.description}
        </Text>
      </Card>
    </Grid.Col>
  );
};

export default ServiceCard;
