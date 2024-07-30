import useData from './useData';
import { GameQuery } from '../App';
import { Game } from '../interfaces/games';
const useGames = ({ genre, platform }: GameQuery) =>
  useData<Game>(
    'games',
    {
      params: {
        genres: genre?.id,
        platforms: platform?.id,
      },
    },
    [genre?.id, platform?.id]
  );

export default useGames;
