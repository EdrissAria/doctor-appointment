import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Text, Group, ActionIcon, Transition } from '@mantine/core';
import { IconHeartFilled, IconHeartBroken } from '@tabler/icons-react';

interface DoctorCardProps {
  name: string;
  specialty: string;
  description: string;
  imageUrl: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, description, imageUrl }) => {
  const [favorited, setFavorited] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorited((prev) => !prev);
  };

  const handleCardClick = () => {
    navigate('/doctor');
  };

  return (
    <Transition mounted={true} transition="pop" duration={300} timingFunction="ease">
      {(styles) => (
        <Card style={styles} shadow="sm" padding="lg" onClick={handleCardClick}>
          <Card.Section style={{ position: 'relative' }}>
            <Image src={imageUrl} height={200} alt={name} />
            <ActionIcon
              variant="transparent"
              color={favorited ? 'red' : 'gray'}
              onClick={toggleFavorite}
              title={favorited ? "Unfavorite" : "Favorite"}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 1,
                transform: 'scale(1.5)', 
              }}
            >
              {favorited ? <IconHeartFilled size={24} /> : <IconHeartBroken size={24} />}
            </ActionIcon>
          </Card.Section>
          <Group mt="md" mb="xs">
            <div>
              <Text>{name}</Text>
              <Text size="sm" color="dimmed">{specialty}</Text>
            </div>
          </Group>
          <Text size="sm" color="dimmed">{description}</Text>
        </Card>
      )}
    </Transition>
  );
};

export default DoctorCard;
