import { Menu } from './Menu';
import { Container } from './styles';

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type Props = {
  movie: Movie;
};

export const Movie = ({ movie }: Props) => {
  return (
    <Container>
      <figure>
        <img src={movie.Poster} alt={`Capa do filme ${movie.Title}`} />

        <Menu movie={movie} />
      </figure>

      <h3>{movie.Title}</h3>
      <span>{`Ano de lançamento: ${movie.Year}`}</span>
    </Container>
  );
};
