import React from 'react';
import ItemList from './ItemList';
import ItemInfoModal from './ItemInfoModal';
import { getWasteList, addWaste, updateWaste } from '../../services/services';
import { Page, Navbar, List, ListButton } from 'framework7-react';

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
}

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

// export default () => (
//   <Page>
//     <Navbar title="List Button" />

//     <List inset>
//       <ListButton title="List Button 1" />
//       <ListButton title="List Button 2" />
//       <ListButton title="List Button 3" />
//     </List>
//   </Page>
//);
