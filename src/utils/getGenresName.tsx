
import { Genre } from '../Types';

export const getGenreNames = (genreCode: string, genres: Genre[]) => {
  const bandGenre = genres.find((genre) => genre.code === genreCode);

  return bandGenre?.name ?? '';
};
