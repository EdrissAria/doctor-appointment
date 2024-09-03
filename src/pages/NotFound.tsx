import React from 'react';
import { Container, Title, Text, Button, Group, Anchor, Center } from '@mantine/core';

const NotFound: React.FC = () => {
  return (
    <Container size="md" py="xl">
      <Center style={{ height: '100vh', textAlign: 'center' }}>
        <div>
          <Title order={1} mb="sm">
            Oops! 404
          </Title>
          <Text color="dimmed" size="lg" mb="xl">
            The page you are looking for doesn’t exist or has been moved.
          </Text>
          <Group style={{ textAlign: 'center' }}>
            <Anchor href="/" underline="never">
              <Button variant="filled" size="md" color="#006D64">
                Go back to Home
              </Button>
            </Anchor>
          </Group>
        </div>
      </Center>
    </Container>
  );
};

export default NotFound;

