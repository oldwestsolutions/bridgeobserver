import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const MarketsPage: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" gutterBottom>
            Markets
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Stay informed with the latest market updates
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MarketsPage; 