import FavoriteMovieRepository from '../repositories/FavoriteMovieRepository';

class RemoveMovieFromFavoritesService {
  private favoriteMovieRepository: FavoriteMovieRepository;

  constructor(movieRepository: FavoriteMovieRepository) {
    this.favoriteMovieRepository = movieRepository;
  }

  public async execute(imdbID: string, userId: string): Promise<void> {
    await this.favoriteMovieRepository.delete(imdbID, userId);
  }
}

export default RemoveMovieFromFavoritesService;
