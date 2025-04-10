import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { NewsCardProps } from '../types';

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={article.imageUrl}
        alt={article.title}
        sx={{
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h3" gutterBottom>
          {article.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            By {article.author} | {article.date}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {article.excerpt}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard; 