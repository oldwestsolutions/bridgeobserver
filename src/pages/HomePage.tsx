import React from 'react';
import {
  Container,
  Grid,
  Typography,
} from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" gutterBottom>
            Bridge Observer
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Your trusted source for bridge-related news and updates
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage; 