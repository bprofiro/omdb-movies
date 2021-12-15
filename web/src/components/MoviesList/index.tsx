import { Movie } from '@components/Movie';

import { Container, Thumbnails } from './styles';

type Props = {
  movies: any[];
};

export const MoviesList = ({ movies }: Props) => {
  return (
    <Container>
      <Thumbnails>
        {movies?.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Thumbnails>
    </Container>
  );
};
