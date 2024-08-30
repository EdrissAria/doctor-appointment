import React from "react";
import { Card, Image, Text, Title, Button } from "@mantine/core";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  title,
  date,
  description,
}) => {
  return (
    <Card
      shadow="md"
      padding="lg"
      radius="md"
      h={500}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Card.Section>
        <Image src={image} height={200} alt={title} />
      </Card.Section>

      <Text size="xs" color="dimmed" mt={10}>
        {category}
      </Text>
      <Title order={4} mb={10} style={{ color: "#006D64" }}>
        {title}
      </Title>
      <Text size="xs" color="dimmed" mb={12}>
        Published {date}
      </Text>
      <Text size="sm" mb={10}>
        {description}
      </Text>

      <div style={{ marginTop: "auto", textAlign: 'center'}}>
        <Button variant="subtle" color="teal">
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default BlogCard;
