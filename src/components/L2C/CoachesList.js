import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StudentList from './StudentList';

function CoachesList(props) {
  const { Coaches } = props;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Coaches.map((coach) => (
            <TableRow key={coach.id}>
              <TableCell>
                {coach.lastName}, {coach.firstName}
              </TableCell>
              <TableCell align="left">{coach.email}</TableCell>
              <TableCell align="left">{coach.phoneNumber}</TableCell>
              <TableCell>
                <StudentList coach={coach} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CoachesList;

CoachesList.propTypes = {
  Coaches: PropTypes.array.isRequired,
};
