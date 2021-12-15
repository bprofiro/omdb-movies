import { useContext } from 'react';

import { MoviesContext } from '@contexts/movies';

export const useMovies = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error('useMovies must be used within an MoviesProvider');
  }

  return context;
};
