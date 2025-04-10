import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Article {id}
        </Typography>
        <Typography variant="body1">
          Article content will be loaded here.
        </Typography>
      </Box>
    </Container>
  );
};

export default ArticleDetail; 