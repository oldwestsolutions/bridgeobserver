import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';

const DropboxManager: React.FC = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          File Manager
        </Typography>
        <Typography>
          File management functionality will be implemented later.
        </Typography>
      </Box>
    </Container>
  );
};

export default DropboxManager; 