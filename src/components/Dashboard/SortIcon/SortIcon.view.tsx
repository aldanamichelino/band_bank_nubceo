import React, { FC } from 'react';
import SortAscending from '../../../assets/svg/SortAscending.svg';
import SortDescending from '../../../assets/svg/SortDescending.svg';

interface SortIconProps {
  fieldName: string
  sortField: string
  order: string
}

export const SortIcon: FC<SortIconProps> = ({
  fieldName,
  sortField,
  order
}) => {
  return (
    <img src={fieldName === sortField && order === 'asc' ? SortAscending : SortDescending} alt='sorting arrow' height={'12px'} width={'12px'} className='inline-flex'/>
  );
};
