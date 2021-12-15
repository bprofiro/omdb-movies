import { Header } from '@components';
import { MoviesList } from '@components/MoviesList';
import { useMovies } from '@hooks';

import { Container } from './styles';

export const Dashboard = () => {
  const { movies, isLoadingMovies } = useMovies();

  return (
    <>
      <Header />

      <Container role="main">
        {!isLoadingMovies ? (
          <MoviesList movies={movies} />
        ) : (
          <p>Carregando...</p>
        )}
      </Container>
    </>
  );
};
