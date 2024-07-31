import { GameQuery } from '../App';

export const generateHeading = (gameQuery: GameQuery): string => {
  if (gameQuery.genre && gameQuery.platform)
    return `${gameQuery.platform.name} ${gameQuery.genre.name} Games`;
  else if (gameQuery.genre) return `${gameQuery.genre.name} Games`;
  else if (gameQuery.platform) return `${gameQuery.platform.name} Games`;
  return 'Games';
};
