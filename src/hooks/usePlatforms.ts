import { Platform } from '../interfaces/games';
import useData from './useData';

const usePlatforms = () => useData<Platform>('platforms/lists/parents');

export default usePlatforms;
