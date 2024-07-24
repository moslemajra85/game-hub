import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { Game } from '../interfaces/games';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>

        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((item) => item.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;