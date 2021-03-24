  
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Button variant="contained" color="default">
          <Container maxWidth="xs">
            
          </Container>
          </Button>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        
      </Container>
    </React.Fragment>
  );
}