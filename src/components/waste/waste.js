import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ItemList from './ItemList';
import AddItemModal from './addItemModal';
import { getWasteList } from '../../services/services';

function Waste(props) {
  const [cities, setCities] = useState([]);
  const [items, setItems] = useState([]);
  const [sortingCity, setSortingCity] = useState('');
  const SendToList = (event) => {
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
      Choose Your City
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 20 }} color="text.secondary">
                All Items
              </Typography>
            </CardContent>
            <CardActions>
              <Button value="" onClick={SendToList} size="small">
                All Items
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {cities.map((city) => (
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary">
                  {city}
                </Typography>
              </CardContent>
              <CardActions>
                <Button value={city} onClick={SendToList} size="small">
                  Items in {city}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <AddItemModal refresh={refreshItems} />
      <ItemList items={filteredItems} />
    </div>
  );
}

export default Waste;
