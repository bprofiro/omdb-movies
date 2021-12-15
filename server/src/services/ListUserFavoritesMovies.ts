import Movie from '../models/Movie';
import FavoriteMovieRepository from '../repositories/FavoriteMovieRepository';

class ListUserFavoriteMovies {
  private favoriteMovieRepository: FavoriteMovieRepository;

  constructor(movieRepository: FavoriteMovieRepository) {
    this.favoriteMovieRepository = movieRepository;
  }

  public async execute(userId: string): Promise<Movie[]> {
    const favoriteMovies = this.favoriteMovieRepository.all(userId);
    return favoriteMovies;
  }
}

export default ListUserFavoriteMovies;
