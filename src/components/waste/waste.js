import React from 'react';
import ItemList from './ItemList';
import ItemInfoModal from './ItemInfoModal';
import { getWasteList, addWaste, updateWaste } from '../../services/services';
import * as React from 'react';

function Waste() {
  return (
    <div>
      <select>
        <option>C1</option>
        <option>C2</option>
        <option>C3</option>
      </select>
    </div>
  );
}

export default Waste;
