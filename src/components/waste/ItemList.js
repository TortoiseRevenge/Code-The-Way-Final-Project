/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
    <Grid container spacing={2} justifyContent="center" rowspacing={2}>
      <Grid item xs={5} spacing={1}>
        <div>
          {activeUsers.map((itemObject, index) => (
            <Accordion
              expanded={expanded === 'panel'.concat(index.toString())}
              onChange={handleChange('panel'.concat(index.toString()))}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  {itemObject.itemName}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  {itemObject.owner}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
export default ItemList;
