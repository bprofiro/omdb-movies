import Movie from '../models/Movie';

class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [];
  }

  public create({
    Poster,
    Title,
    Type,
    Year,
    imdbID,
    user_id,
    isFavorite,
  }: Omit<Movie, 'id'>): Movie {
    const movie = new Movie({
      Poster,
      Title,
      Type,
      Year,
      imdbID,
      user_id,
      isFavorite,
    });

    this.movies.push(movie);

    return movie;
  }

  public all(userId: string): Movie[] {
    console.log({ oi: this.movies });
    const movies = this.movies.filter(movie => movie.user_id === userId);

    return movies;
  }

  public delete(imdbID: string, userId: string): void {
    const favoriteMovieIndex = this.movies.findIndex(
      movie => movie.imdbID === imdbID && movie.user_id === userId,
    );

    if (favoriteMovieIndex < 0) {
      throw new Error('Movie not found');
    }

    this.movies.splice(favoriteMovieIndex, 1);
  }

  public findByimdbId(imdbId: string, userId: string): Movie | undefined {
    const movie = this.movies.find(
      dbMovie => dbMovie.imdbID === imdbId && movie.user_id === userId,
    );

    return movie;
  }
}

export default MovieRepository;
