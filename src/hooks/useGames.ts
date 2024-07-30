import { Game, Platform } from '../interfaces/games';
import { Genre } from '../interfaces/genres';
import useData from './useData';

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>
  useData<Game>(
    'games',
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
