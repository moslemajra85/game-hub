import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import { generateHeading } from '../services/utils';
 
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = generateHeading(gameQuery);
  return <Heading marginY={5}  as="h1">{heading}</Heading>;
};

export default GameHeading;
