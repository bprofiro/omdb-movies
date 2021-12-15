import { usePopoverState } from 'reakit/Popover';
import { IoMdMore } from 'react-icons/io';
import { useAuth, useMovies } from '@hooks';

import { Container, MenuButton, MenuContainer, MenuToggle } from './styles';

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  isFavorite?: boolean;
};

type Props = {
  movie: Movie;
};

export const Menu = ({ movie }: Props) => {
  const popover = usePopoverState();

  const { user } = useAuth();
  const { onAddMovieToFavorites, onRemoveMovieFromFavorites } = useMovies();

  const handleAddMovieToFavorites = async () => {
    await onAddMovieToFavorites({
      ...movie,
      user_id: user.id,
    });
  };

  const handleRemoveMovieFromFavorites = async () => {
    onRemoveMovieFromFavorites(movie.imdbID, user.id);
  };

  return (
    <Container>
      <MenuToggle {...popover}>
        <IoMdMore size={24} color="#eeeeee" />
      </MenuToggle>
      <MenuContainer {...popover} aria-label="Menu do filme">
        <MenuButton
          type="button"
          onClick={
            movie.isFavorite
              ? handleRemoveMovieFromFavorites
              : handleAddMovieToFavorites
          }
        >
          {movie.isFavorite
            ? 'Remover dos favoritos'
            : 'Adicionar aos favoritos'}
        </MenuButton>
      </MenuContainer>
    </Container>
  );
};
