import { Text } from '@chakra-ui/react';
 import { Genre } from '../interfaces/genres';
import useGenres from '../hooks/useGenres';
 const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <ul>
      {data.map((g) => (
        <Text key={g.id}>{g.name}</Text>
      ))}
    </ul>
  );
};

export default GenresList;
