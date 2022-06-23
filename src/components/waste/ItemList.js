import React from 'react';

function ItemList(props) {
  const activeUsers = props.items.filter((item) => item.active === true);
  if (activeUsers.length === 0) {
    return <h2>Found No Items.</h2>;
  }
  return (
    <div>
      <ul>
        {activeUsers.map((itemObject) => (
          <WasteItem
            name={itemObject.name}
            owner={itemObject.owner}
            price={itemObject.price}
            city={itemObject.city}
            state={itemObject.state}
            postalCode={itemObject.postalCode}
            dateAccepted={itemObject.dateAccepted}
            dateReturned={itemObject.dateReturned}
          >
            {' '}
          </WasteItem>
        ))}
      </ul>
    </div>
  );
}
export default ItemList;
