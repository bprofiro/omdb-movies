import { v4 as uuid } from 'uuid';

class Movie {
  id: string;

  imdbID: string;

  Title: string;

  Year: string;

  Type: string;

  Poster: string;

  isFavorite: boolean;

  user_id: string;

  constructor({
    Poster,
    Title,
    Type,
    Year,
    imdbID,
    user_id,
    isFavorite,
  }: Omit<Movie, 'id'>) {
    this.id = uuid();
    this.Title = Title;
    this.Year = Year;
    this.Type = Type;
    this.Poster = Poster;
    this.imdbID = imdbID;
    this.isFavorite = isFavorite;
    this.user_id = user_id;
  }
}

export default Movie;
