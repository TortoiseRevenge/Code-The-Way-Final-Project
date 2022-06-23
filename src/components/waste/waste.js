import React from 'react';
import ItemList from './ItemList';

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
  ];
  return (
    <div>
      <ItemList items={testArr}> </ItemList>
    </div>
  );
}
export default waste;
