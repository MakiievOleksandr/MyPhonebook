import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('200')]: {
    backgroundColor: red[500],
    color: green[400],
  },
  [theme.breakpoints.up('300')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('400')]: {
    backgroundColor: green[500],
  },
}));

export default function MediaQuery({ children }) {
  return (
    <Root>
      {children}
      {/* <Typography>down(md): red</Typography>
      <Typography>up(md): blue</Typography>
      <Typography>up(lg): green</Typography> */}
    </Root>
  );
}
