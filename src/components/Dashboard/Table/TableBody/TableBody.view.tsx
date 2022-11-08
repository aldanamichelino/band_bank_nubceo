import React, { FC } from 'react';
import { Band, Genre } from '../../../../Types';
import { Link } from 'react-router-dom';
import { getGenreNames } from '../../../../utils/getGenresName';

interface TableBodyProps {
  bands: Band[]
  searchValue: string
  genres: Genre[]
}

export const TableBody: FC<TableBodyProps> = ({
  bands,
  searchValue,
  genres
}) => {
  return (
    <tbody>
      {bands.filter(band => band.name.toLowerCase().includes(searchValue.toLowerCase())).map((band: Band) => (
        <tr key={band.id}>
          <td className='border border-slate-300 text-purple-600'>{band.name}</td>
          <td className='border border-slate-300'>{getGenreNames(band.genreCode, genres)}</td>
          <td className='border border-slate-300'>{band.year}</td>
          <td className='border border-slate-300'>{band.country}</td>
          <td className='border border-slate-300'>
            {band.members.map((member) => (
              <p key={member.name}>{member.name}</p>
            ))}
          </td>
          <td className='border border-slate-300'>
            <Link to={`/bands/${band.id}`}>View more</Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
