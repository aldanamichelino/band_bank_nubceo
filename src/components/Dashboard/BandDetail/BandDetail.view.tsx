import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBandById, getAlbumsByBandId, getGenres } from '../../../services/api';
import { Album, Band, Genre } from '../../../Types';
import { getGenreNames } from '../../../utils/getGenresName';
import { Loading } from '../../Loading/Loading.view';

export const BandDetail = () => {
  const { id } = useParams();
  const [band, setBand] = useState<Band>();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const requestGetBandById = async () => {
      setLoading(true);
      try {
        const data = await getBandById(id!);
        setBand(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    };

    const requestGetAlbums = async () => {
      setLoading(true);
      try {
        const data = await getAlbumsByBandId(+id!);
        setAlbums(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    };

    const requestGetGenres = async () => {
      setLoading(true);
      try {
        const data = await getGenres();
        setGenres(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    };

    void requestGetBandById();
    void requestGetAlbums();
    void requestGetGenres();
  }, [id]);

  return (
    <div className="flex flex-col items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className='w-full'>
        <Link className='float-left m-2 font-bold' to={'/bands'}>Back</Link>
      </div>
      <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2" src="http://iloveuticany.com/wp-content/uploads/2017/06/best-bands-ever.jpeg" alt="" />
      {loading &&
        <Loading />
      }
      {!loading &&
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{band?.name}</h1>
          <h3 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">First appearance: <span>{band?.year}</span></h3>
          <h3 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Genre: <span>{getGenreNames(band?.genreCode, genres)}</span></h3>
          <h3 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Country of origin: <span>{band?.country}</span></h3>
          <br />
          <p className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Members</p>
          <ul>
            {band?.members.map((member, index) => (
              <li key={index}>{member.name}</li>
            ))}
          </ul>
          <br />
          <p className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Albums</p>
          <ul>
            {albums.length > 0
              ? albums?.map((album: Album, index: number) => (
              <li key={index}>{album.name} <span>({album.year})</span></li>
              ))
              : <p>No albums for this band</p>
          }
          </ul>
        </div>
      }
    </div>
  );
};
