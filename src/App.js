import './App.css';
import React from 'react';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';

function App() {
  return (

    <React.Fragment>

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu">

    </IconButton>
    <Typography variant="h6" >
Clip Snaut    </Typography>

  </Toolbar>
</AppBar>


      <Container maxWidth="md">




        <Grid item xs={12}>



        <form noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
</form>

        </Grid>

      </Container>

    </React.Fragment>
  );
}

export default App;
