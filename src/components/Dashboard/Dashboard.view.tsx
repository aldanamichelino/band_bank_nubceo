import React, { useEffect, useState, useCallback } from 'react';
import { getBands, getGenres } from '../../services/api';
import { Band, Genre } from '../../Types';
import { SearchBar } from './SearchBar/SearchBar.view';
import { TableHead } from './Table/TableHead/TableHead.view';
import { TableBody } from './Table/TableBody/TableBody.view';
import { Loading } from '../Loading/Loading.view';

export const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [bands, setBands] = useState<Band[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    setLoading(true);

    const requestGetBands = async () => {
      setLoading(true);
      try {
        const data = await getBands();
        setBands(data);
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

    void requestGetBands();
    void requestGetGenres();
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const handleSorting = useCallback((field: string, sortOrder: string) => {
    if (field) {
      const sorted = [...bands].sort((a, b) => {
        return (
          a[field].toString().localeCompare(b[field].toString(), 'en', {
            numeric: true
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });

      setBands(sorted);
    }
  }, [bands]);

  const handleSortingChange = useCallback((accessor: string) => {
    const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  }, [handleSorting, order, sortField]);

  return (
    <>
      <SearchBar searchValue={searchValue} handleInputChange={handleInputChange}/>
      {loading &&
        <Loading />
      }
      {!loading &&
        <table className='w-full mt-5 border-separate border-slate-400'>
          <TableHead handleSortingChange={handleSortingChange} sortField={sortField} order={order} />
          <TableBody bands={bands} searchValue={searchValue} genres={genres} />
        </table>
      }
    </>
  );
};
