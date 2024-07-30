import useData from './useData';
import { GameQuery } from '../App';
import { Game } from '../interfaces/games';
const useGames = (gamequery: GameQuery) =>
  useData<Game>(
    'games',
    {
      params: {
        genres: gamequery.genre?.id,
        platforms: gamequery.platform?.id,
        ordering: gamequery?.sortOrder,
      },
    },
    [gamequery]
  );

export default useGames;
