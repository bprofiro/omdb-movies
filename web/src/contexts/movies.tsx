/* eslint-disable camelcase */
import { createContext, ReactNode, useState } from 'react';

import { api } from '@services/api';

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  isFavorite?: boolean;
};

type FavoriteMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  user_id: string;
};

interface MoviesProviderProps {
  children: ReactNode;
}

interface MoviesContextData {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  isLoadingMovies: boolean;
  setIsLoadingMovies: React.Dispatch<React.SetStateAction<boolean>>;
  onAddMovieToFavorites: (movie: FavoriteMovie) => void;
  onRemoveMovieFromFavorites: (imdbID: string, userId: string) => void;
}

export const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData,
);

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);

  const onAddMovieToFavorites = async (movie: FavoriteMovie) => {
    await api.post('movies/favorites', {
      Poster: movie.Poster,
      Title: movie.Title,
      Type: movie.Type,
      Year: movie.Year,
      imdbID: movie.imdbID,
      user_id: movie.user_id,
    });

    setMovies(prevState =>
      prevState.map(statedMovie =>
        statedMovie.imdbID === movie.imdbID
          ? {
              ...statedMovie,
              isFavorite: true,
            }
          : statedMovie,
      ),
    );
  };

  const onRemoveMovieFromFavorites = async (imdbID: string, userId: string) => {
    await api.delete('movies/favorites', {
      data: {
        imdbID,
        user_id: userId,
      },
    });

    setMovies(prevState =>
      prevState.map(statedMovie =>
        statedMovie.imdbID === imdbID
          ? {
              ...statedMovie,
              isFavorite: false,
            }
          : statedMovie,
      ),
    );
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        isLoadingMovies,
        setIsLoadingMovies,
        onAddMovieToFavorites,
        onRemoveMovieFromFavorites,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
