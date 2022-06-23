import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ItemList(props) {
  const activeUsers = props.items.filter((item) => item.active === true);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
