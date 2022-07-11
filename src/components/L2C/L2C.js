import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CoachesList from './CoachesList';

export default function Lead2Change() {
  const [coaches, setCoaches] = useState([]);
  const refreshCoaches = async () => {
    // TODO: API Integration
    const listOfCoaches = [
      {
        id: 'c1',
        coachFirstName: 'John',
        coachLastName: 'Doe',
        coachPhoneNumber: '262-555-1234',
        coachEmail: 'John@does.org',
        students: [
          {
            id: 's1',
            studentFirstName: 'Jane',
            studentLastName: 'Roe',
            studentPhoneNumber: 'Jane@roes.org',
            studentEmail: '262-555-0123',
          },
        ],
      },
      {
        id: 'c2',
        coachFirstName: 'Mrs',
        coachLastName: 'Foe',
        coachPhoneNumber: '262-555-1235',
        coachEmail: 'f@does.org',
        students: [
          {
            id: 's2',
            studentFirstName: 'Dane',
            studentLastName: 'Roe',
            studentPhoneNumber: 'Dane@roes.org',
            studentEmail: '262-555-0123',
          },
        ],
      },
    ];
    setCoaches(listOfCoaches);
  };

  useEffect(() => {
    refreshCoaches();
  }, []);

  return (
    <div>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={8}>
          <CoachesList rows={coaches} />
        </Grid>
      </Grid>
    </div>
  );
}
