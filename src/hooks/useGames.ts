import { Game } from '../interfaces/games';
import { Genre } from '../interfaces/genres';
import useData from './useData';

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    'games',
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id]
  );

export default useGames;
