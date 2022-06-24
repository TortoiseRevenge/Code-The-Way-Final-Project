import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Info from './Info';
import ItemList from './ItemList';
import ItemInfoModal from './TestModal';
import AddItemModal from './addItemModal';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

function Waste(props) {
  const [cities, setCities] = useState([]);
  const [items, setItems] = useState([]);
  const [sortingCity, setSortingCity] = useState('');
  const SendToList = (event) => {
    console.log(event.target.value);
    setSortingCity(event.target.value);
  };
  const refreshItems = async () => {
    const response = await getWasteList();
    setItems(response);
    const result = response.map((a) => a.city);
    setCities([...new Set(result)]);
  };

  useEffect(() => {
    refreshItems();
  }, []);
  const filteredItems = items.filter((item) => {
    if (sortingCity === '') {
      return items;
    }
    return item.city === sortingCity;
  });
  return (
    <div>
      <Info>Test</Info>
    </div>
  );
}

export default Waste;
