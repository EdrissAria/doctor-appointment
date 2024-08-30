import React, { useState } from "react";
import { Card, Image, Text, Group, ActionIcon, Anchor } from "@mantine/core";
import { IconHeartFilled, IconHeartBroken } from "@tabler/icons-react";

interface DoctorCardProps {
  id: number;
  name: string;
  specialty: string;
  description: string;
  imageUrl: string;
  showFavIcon: boolean;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  id,
  showFavIcon,
  name,
  specialty,
  description,
  imageUrl,
}) => {
  const [favorited, setFavorited] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorited((prev) => !prev);
  };

  return (
    <Card shadow="sm" padding="lg">
      <Card.Section style={{ position: "relative" }}>
        <Image src={imageUrl} height={240} alt={name} />
        {showFavIcon ? (
          <ActionIcon
            variant="transparent"
            color={favorited ? "red" : "gray"}
            onClick={toggleFavorite}
            title={favorited ? "Unfavorite" : "Favorite"}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 1,
            }}
          >
            {favorited ? (
              <IconHeartFilled size={104} />
            ) : (
              <IconHeartBroken size={104} />
            )}
          </ActionIcon>
        ) : (
          ""
        )}
      </Card.Section>
      <Anchor underline="never" href={`/doctor/${id}`}>
        <Group mt="md" mb="xs">
          <div>
            <Text>{name}</Text>
            <Text size="sm" color="dimmed">
              {specialty}
            </Text>
          </div>
        </Group>
        <Text size="sm" color="dimmed">
          {description}
        </Text>
      </Anchor>
    </Card>
  );
};

export default DoctorCard;
