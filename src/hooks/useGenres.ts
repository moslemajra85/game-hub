import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { FetchGenresResponse } from '../interfaces/genres';
import { Genre } from '../interfaces/genres';
import { CanceledError } from 'axios';

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then(({data: {results}}) => {
        setGenres(results)
        
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setIsLoading(false);
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return {
    genres,
    error,
    isLoading,
  };
};

export default useGenres;
