import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../interfaces/games';
import PlatformIconsList from './PlatformIconsList';
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((item) => item.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
