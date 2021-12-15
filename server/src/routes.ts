import { Router } from 'express';
import UserRepository from './repositories/UserRepository';
import FavoriteMovieRepository from './repositories/FavoriteMovieRepository';
import CreateUserService from './services/CreateUserService';
import CreateMovieService from './services/CreateMovieService';
import ListUserFavoritesMovies from './services/ListUserFavoritesMovies';
import RemoveMovieFromFavoritesService from './services/RemoveMovieFromFavoritesService';
import AuthenticateUserService from './services/AuthenticateUserService';

const routes = Router();
const userRepository = new UserRepository();
const favoriteMovieRepository = new FavoriteMovieRepository();

routes.post('/users', async (request, response) => {
  const { name, email, password } = request.body;

  const createUserService = new CreateUserService(userRepository);

  try {
    const user = await createUserService.execute({ name, email, password });

    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.post('/signin', async (request, response) => {
  const { email, password } = request.body;

  try {
    const authenticateUserService = new AuthenticateUserService(userRepository);

    const user = await authenticateUserService.execute({ email, password });

    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.post('/movies/favorites', async (request, response) => {
  const { Poster, Title, Type, Year, imdbID, user_id } = request.body;

  const createFavoriteMovieService = new CreateMovieService(
    favoriteMovieRepository,
  );

  try {
    const favoriteMovie = await createFavoriteMovieService.execute({
      Poster,
      Title,
      Type,
      Year,
      imdbID,
      user_id,
      isFavorite: true,
    });

    return response.status(200).json(favoriteMovie);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.delete('/movies/favorites', async (request, response) => {
  const { imdbID, user_id } = request.body;

  const removeMovieFromFavorites = new RemoveMovieFromFavoritesService(
    favoriteMovieRepository,
  );

  try {
    await removeMovieFromFavorites.execute(imdbID, user_id);

    return response.status(200).json({ message: 'ok' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.get('/movies/favorites/:user_id', async (request, response) => {
  const { user_id } = request.params;

  const listFavoritesMovies = new ListUserFavoritesMovies(
    favoriteMovieRepository,
  );

  try {
    const favoriteMovies = await listFavoritesMovies.execute(user_id);

    return response.status(200).json(favoriteMovies);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default routes;
