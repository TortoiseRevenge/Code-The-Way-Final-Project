import React from 'react';
import ItemList from './ItemList';
import ItemInfoModal from './ItemInfoModal';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

const numbers = [1, 2, 3, 4, 5];

const updatedNums = numbers.map((number) => {
  return <li>{number}</li>;
});

ReactDOM.render(<ul>{updatedNums}</ul>, document.getElementById('root'));

export default Waste;
