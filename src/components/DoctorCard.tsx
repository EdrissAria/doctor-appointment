import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteDoctor } from "../redux/actions/favoriteActions";
import { Card, Image, Text, Button, Anchor } from "@mantine/core";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

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
  name,
  specialty,
  description,
  imageUrl,
  showFavIcon,
}) => {
  const dispatch = useDispatch();
  const favoriteDoctors = useSelector(
    (state: any) => state.favoriteDoctors.favoriteDoctors
  );

  const isFavorite = favoriteDoctors.includes(id);

  const handleFavoriteToggle = () => {
    dispatch(toggleFavoriteDoctor(id));
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Anchor
        underline="never"
        href={`/doctor/${id}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Card.Section>
          <Image src={imageUrl} height={240} alt={name} />
        </Card.Section>

        <Text size="lg" mt="md" style={{ color: "inherit" }}>
          {name}
        </Text>
        <Text size="sm" color="dimmed">
          {specialty}
        </Text>
        <Text size="sm" mt="md" style={{ color: "inherit" }}>
          {description}
        </Text>
      </Anchor>
      {showFavIcon && (
        <Button
          variant="outline"
          color={isFavorite ? "yellow" : "gray"}
          onClick={handleFavoriteToggle}
          mt="md"
          radius="xl"
          leftSection={
            isFavorite ? <IconStarFilled size={16} /> : <IconStar size={16} />
          }
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </Button>
      )}
    </Card>
  );
};

export default DoctorCard;
