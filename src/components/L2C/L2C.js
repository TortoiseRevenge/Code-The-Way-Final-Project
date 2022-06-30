import React from 'react';
import Grid from '@mui/material/Grid';
import CoachesList from './CoachesList';

export default function Lead2Change() {
  const listofCoaches = [
    {
      id: 'e1',
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '262-555-1234',
      email: 'John@does.org',
      students: [
        {
          id: 's2',
          firstName: 'Jane',
          lastName: 'Roe',
          phoneNumber: 'Jane@roes.org',
          email: '262-555-0123',
        },
      ],
    },
    {
      id: 'e1',
      firstName: 'Mrs',
      lastName: 'Foe',
      phoneNumber: '262-555-1235',
      email: 'f@does.org',
      students: [
        {
          id: 's2',
          firstName: 'Jane',
          lastName: 'Roe',
          phoneNumber: 'Jane@roes.org',
          email: '262-555-0123',
        },
      ],
    },
  ];
  return (
    <div>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={8}>
          <CoachesList rows={listofCoaches} />
        </Grid>
      </Grid>
    </div>
  );
}
