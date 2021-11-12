import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Wheel from './Wheel';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <div style={{ padding: '25px 0'}}>
            <Wheel />
        </div>
        
      </Container>
    </React.Fragment>
  );
}