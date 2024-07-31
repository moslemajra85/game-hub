import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { Genre } from '../interfaces/genres';
import useGenres from '../hooks/useGenres';
import genres from '../data/genres';
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) return null;
  
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre: Genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="10px"
              objectFit="cover"
              src={genre.image_background}
            />
            <Button
              whiteSpace="normal"
              textAlign='left'
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="sm"
              isActive={selectedGenre?.id === genre.id ? true : false}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenresList;
