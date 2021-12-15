import Movie from '../models/Movie';
import FavoriteMovieRepository from '../repositories/FavoriteMovieRepository';

class CreateFavoriteMovieService {
  private favoriteMovieRepository: FavoriteMovieRepository;

  constructor(movieRepository: FavoriteMovieRepository) {
    this.favoriteMovieRepository = movieRepository;
  }

  public async execute({
    Poster,
    Title,
    Type,
    Year,
    imdbID,
    user_id,
    isFavorite,
  }: Omit<Movie, 'id'>): Promise<Movie> {
    const checkSameImdbID = this.favoriteMovieRepository.findByimdbId(
      imdbID,
      user_id,
    );

    if (checkSameImdbID) {
      throw new Error('This movie is already favorite.');
    }

    const movie = this.favoriteMovieRepository.create({
      Poster,
      Title,
      Type,
      Year,
      imdbID,
      user_id,
      isFavorite,
    });

    return movie;
  }
}

export default CreateFavoriteMovieService;
