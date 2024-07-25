import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { Genre } from '../interfaces/genres';
import useGenres from '../hooks/useGenres';

const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  return (
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
