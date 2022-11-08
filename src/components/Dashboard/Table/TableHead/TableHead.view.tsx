import React, { FC } from 'react';
import { SortingHeaderCell } from '../SortingHeaderCell/SortingHeaderCell.view';

interface TableHeadProps {
  handleSortingChange: (sortField: string) => {}
  sortField: string
  order: string
}

export const TableHead: FC<TableHeadProps> = ({
  handleSortingChange,
  sortField,
  order
}) => {
  return (
    <thead>
      <tr>
        <SortingHeaderCell handleSortingChange={handleSortingChange} fieldName={'name'} sortField={sortField} order={order}/>
        <SortingHeaderCell handleSortingChange={handleSortingChange} fieldName={'genreCode'} sortField={sortField} order={order}/>
        <SortingHeaderCell handleSortingChange={handleSortingChange} fieldName={'year'} sortField={sortField} order={order}/>
        <SortingHeaderCell handleSortingChange={handleSortingChange} fieldName={'country'} sortField={sortField} order={order}/>
        <th>MEMBERS</th>
      </tr>
    </thead>
  );
};
