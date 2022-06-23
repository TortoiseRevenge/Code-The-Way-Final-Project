import React from 'react';
import ItemList from './ItemList';
import ItemInfoModal from './ItemInfoModal';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

function waste() {
  const testArr = [
    {
      itemName: 'book',
      owner: 'steve',
      price: 10,
      city: 'milwaukee',
      state: 'WI',
      postalCode: 53205,
      dateAccepted: 'June 22 2022',
      dateReturned: 'June 23 2022',
      active: true,
    },
    {
      itemName: 'pencil',
      owner: 'bob',
      price: 10,
      city: 'milwaukee',
      state: 'WI',
      postalCode: 53205,
      dateAccepted: 'June 22 2022',
      dateReturned: 'June 23 2022',
      active: true,
    },
  ];
  return (
    <div>
      <ItemList items={testArr}> </ItemList>
      <ItemInfoModal />
    </div>
  );
}
export default waste;
