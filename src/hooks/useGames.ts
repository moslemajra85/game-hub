import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { FetchGameResponse } from '../interfaces/games';
import { Game } from '../interfaces/games';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>('/games', {
        signal: controller.signal,
      })
      .then(({ data: { results } }) => {
        setGames(results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, setGames, error, setError };
};

export default useGames;
