import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { FetchGameResponse } from '../interfaces/games';
import { Game } from '../interfaces/games';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGameResponse>('/games', {
        signal: controller.signal,
      })
      .then(({ data: { results } }) => {
        setGames(results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, setGames, error, setError, isLoading };
};

export default useGames;
