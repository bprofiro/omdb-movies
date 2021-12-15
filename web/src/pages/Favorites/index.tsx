import { useEffect } from 'react';

import { Header } from '@components';
import { MoviesList } from '@components/MoviesList';
import { useAuth, useCachedFetch, useMovies } from '@hooks';

import { Container } from './styles';

type FavoriteMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export const Favorites = () => {
  const { user } = useAuth();
  const { movies, setMovies } = useMovies();

  const { data: favoriteMovies, loading: isFetchingMovies } = useCachedFetch<
    FavoriteMovie[]
  >(`/movies/favorites/${user.id}`);

  useEffect(() => {
    setMovies(favoriteMovies);

    return () => setMovies([]);
  }, [favoriteMovies, setMovies]);

  return (
    <>
      <Header />

      <Container role="main">
        {!isFetchingMovies ? (
          <MoviesList movies={movies} />
        ) : (
          <p>Carregando...</p>
        )}
      </Container>
    </>
  );
};
