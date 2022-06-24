import React from 'react';
import ItemList from './ItemList';
import ItemInfoModal from './TestModal';
import AddItemModal from './addItemModal';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

const cities = ['Milwaukee', 'Phoenix', 'San Fransisco', 'Dallas'];
function Waste(props) {
  return cities.map((city) => {
    <a
      onClick={(e) => {
        e.preventDefault();
        props.onChange(city);
      }}
    ></a>;
  });

  return (
    <VersionPageHolder>
      {
        <Waste
          onChange={(city) => {
            setSelectedCity(city);
          }}
        />
      }
      <div>{renderElements(selectedCity)}</div>
    </VersionPageHolder>
  );
}

export default Waste;
