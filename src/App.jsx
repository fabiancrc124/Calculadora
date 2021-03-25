  
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Button variant="contained" color="default">
          <Container maxWidth="xs">
            <Dialog open={} onClose={} aria-labelledby="">
              <DialogTitle id=""></DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Hola mundo
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={} color="default">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
            
          </Container>
          </Button>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        
      </Container>
    </React.Fragment>
      );
  
}