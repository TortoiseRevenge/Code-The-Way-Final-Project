import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CoachesList from './CoachesList';
import RegisterCoachModal from './RegisterCoachModal';

export default function Lead2Change() {
  const [coaches, setCoaches] = useState([]);
  const refreshCoaches = async () => {
    // TODO: API Integration
    const listOfCoaches = [
      {
        id: 'c1',
        coachFirstName: 'John',
        coachLastName: 'Zoe',
        coachPhoneNumber: '262-555-1234',
        coachEmail: 'John@does.org',
        students: [
          {
            id: 'c1s1',
            studentFirstName: 'Jane',
            studentLastName: 'Roe',
            studentPhoneNumber: 'Jane@roes.org',
            studentEmail: '262-555-0123',
          },
          {
            id: 'c1s2',
            studentFirstName: 'Bob',
            studentLastName: 'Johnson',
            studentPhoneNumber: 'Johnson@bob.org',
            studentEmail: '262-555-0124',
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
            id: 'c2s1',
            studentFirstName: 'Dane',
            studentLastName: 'Roe',
            studentPhoneNumber: 'Dane@roes.org',
            studentEmail: '262-555-0123',
          },
        ],
      },
      {
        id: 'c3',
        coachFirstName: 'John',
        coachLastName: 'Johnson 1',
        coachPhoneNumber: '262-555-1235',
        coachEmail: 'J@j.org',
        students: [],
      },
      {
        id: 'c4',
        coachFirstName: 'John',
        coachLastName: 'Johnson 2',
        coachPhoneNumber: '262-555-1235',
        coachEmail: 'J@j.org',
        students: [],
      },
      {
        id: 'c5',
        coachFirstName: 'John',
        coachLastName: 'Johnson 3',
        coachPhoneNumber: '262-555-1235',
        coachEmail: 'J@j.org',
        students: [],
      },
      {
        id: 'c6',
        coachFirstName: 'John',
        coachLastName: 'Johnson 4',
        coachPhoneNumber: '262-555-1235',
        coachEmail: 'J@j.org',
        students: [],
      },
    ];

    setCoaches(
      listOfCoaches.sort((a, b) => (a.coachLastName > b.coachLastName ? 1 : -1))
    );
  };

  useEffect(() => {
    refreshCoaches();
  }, []);
  const newCoach = (first, last, email, phone) => {
    const coach = {
      id: Date.now(), // TODO : Update to agreed ID creation method
      coachFirstName: first,
      coachLastName: last,
      coachEmail: email,
      coachPhoneNumber: phone,
      students: [],
    };
    setCoaches([...coaches, coach]);
  };

  const deleteCoach = (id) => {
    setCoaches(coaches.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={8}>
          <Grid container justifyContent="right" spacing={1}>
            <Grid item>
              <RegisterCoachModal addFunction={newCoach} />
            </Grid>
            <Grid item xs={12}>
              <CoachesList rows={coaches} deleteFunction={deleteCoach} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
