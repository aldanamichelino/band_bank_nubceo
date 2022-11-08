import { Album, Band } from '../Types';

export const getAllData = async () => {
  const url = 'https://my-json-server.typicode.com/improvein/dev-challenge/db';

  const data = await fetch(url);
  const response = await data.json();

  return response;
};

export const getBands = async () => {
  const url = 'https://my-json-server.typicode.com/improvein/dev-challenge/bands';

  const data = await fetch(url);
  const response = await data.json();

  return response;
};

export const getBandById = async (id: string) => {
  const url = 'https://my-json-server.typicode.com/improvein/dev-challenge/bands';

  const data = await fetch(url);
  const response = await data.json();
  const bandItem = response.find((band: Band) => band.id === +id);

  return bandItem;
};

export const getAlbumsByBandId = async (id: string) => {
  const url = 'https://my-json-server.typicode.com/improvein/dev-challenge/albums';

  const data = await fetch(url);
  const response = await data.json();
  const albums = response.filter((album: Album) => album.bandId === id);

  return albums;
};

export const getGenres = async () => {
  const url = 'https://my-json-server.typicode.com/improvein/dev-challenge/genre';

  const data = await fetch(url);
  const response = await data.json();

  return response;
};
