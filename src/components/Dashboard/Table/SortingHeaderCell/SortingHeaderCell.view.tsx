import React, { FC, useCallback } from 'react';
import { SortIcon } from '../../SortIcon/SortIcon.view';

interface HeaderCellProps {
  handleSortingChange: (sortField: string) => {}
  sortField: string
  order: string
  fieldName: string
}

export const SortingHeaderCell: FC<HeaderCellProps> = ({
  handleSortingChange,
  sortField,
  order,
  fieldName
}) => {
  const getColumnName = useCallback((columnName: string) => {
    const splitStringByUpperCaseLetter = columnName.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    const firstWord = splitStringByUpperCaseLetter.split(' ')[0];

    return firstWord;
  }, []);

  return (
    <th className='cursor-pointer' onClick={() => handleSortingChange(fieldName)}>{getColumnName(fieldName).toUpperCase()} <SortIcon fieldName={fieldName} sortField={sortField} order={order}/></th>
  );
};
