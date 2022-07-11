import React from 'react';
import Grid from '@mui/material/Grid';
import CoachesList from './CoachesList';
import RegisterCoachModal from './RegisterCoachModal';

export default function Lead2Change() {
  const listofCoaches = [
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
  return (
    <div>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={8}>
          <CoachesList rows={listofCoaches} />
        </Grid>
      </Grid>
    </div>
  );
  return (
    <div>
      <RegisterCoachModal />
    </div>
  );
}
