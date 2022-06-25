import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({ date }) => {
  const { user, token } = useAuth();
  const [Appointments, setAppointments] = useState([]);
//do not work code this is on

  // useEffect(() => {
  //   const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setAppointments(data))
  // }, [date])

  useEffect(() => {
    const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
    fetch(url,{
      headers:{
        'authorization' : `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setAppointments(data))
  }, [date])
  return (
    <div>
      <h2>Appointments:{Appointments.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="appointments table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Service</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Appointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.serviceName}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;