/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import ItemInfoModal from './TestModal';
import EditItemModal from './editItemModal';

function ItemList(props) {
  const { refresh } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    <ItemInfoModal items={props.items} />;
    setExpanded(isExpanded ? panel : false);
  };

  const editHandler = (event) => {
    <EditItemModal item={event.target.value} refresh={refresh} />;
  };
  return (
    <Grid item xs={12}>
      <div>
        <Grid container spacing={3} alignContent="center">
          {props.items.map((itemObject, index) => (
            <Grid item xs={3}>
              <Accordion
                expanded={expanded === 'panel'.concat(index.toString())}
                onChange={handleChange('panel'.concat(index.toString()))}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '75%', flexShrink: 0 }}>
                    {itemObject.name}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {itemObject.owner}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Price: ${itemObject.price}</Typography>
                  <Typography>City: {itemObject.city}</Typography>
                  <Typography>State: {itemObject.state}</Typography>
                  <Typography>Postal Code: {itemObject.postalCode}</Typography>
                  <Typography>
                    Date Accepted: {itemObject.dateAccepted}
                  </Typography>
                  <Typography>
                    Date Returned: {itemObject.dateReturned}
                  </Typography>
                  <Button value={itemObject} onClick={editHandler}>
                    Edit This Item
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  );
}
export default ItemList;

ItemList.propTypes = {
  refresh: PropTypes.func.isRequired,
};
