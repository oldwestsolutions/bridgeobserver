import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import NewsCard from '../components/NewsCard';

// Sample economy news data
const economyNews = [
  {
    id: 1,
    title: 'Global Economic Growth Forecast Revised Upward',
    excerpt: 'IMF raises global growth projections amid strong recovery in major economies.',
    category: 'Economy',
    date: '2024-03-15',
    imageUrl: 'https://source.unsplash.com/random/800x600?economy'
  },
  {
    id: 2,
    title: 'Inflation Trends Show Signs of Cooling',
    excerpt: 'Latest CPI data suggests inflation may be stabilizing in major economies.',
    category: 'Economy',
    date: '2024-03-14',
    imageUrl: 'https://source.unsplash.com/random/800x600?inflation'
  },
  {
    id: 3,
    title: 'Central Banks Coordinate on Monetary Policy',
    excerpt: 'Major central banks signal coordinated approach to interest rate decisions.',
    category: 'Economy',
    date: '2024-03-13',
    imageUrl: 'https://source.unsplash.com/random/800x600?central-bank'
  },
  {
    id: 4,
    title: 'Employment Numbers Surge in Key Sectors',
    excerpt: 'Strong job growth reported across technology and healthcare industries.',
    category: 'Economy',
    date: '2024-03-12',
    imageUrl: 'https://source.unsplash.com/random/800x600?employment'
  },
  {
    id: 5,
    title: 'Trade Deficit Narrows as Exports Rise',
    excerpt: 'Export growth outpaces imports, reducing trade imbalance.',
    category: 'Economy',
    date: '2024-03-11',
    imageUrl: 'https://source.unsplash.com/random/800x600?trade'
  },
  {
    id: 6,
    title: 'Housing Market Shows Signs of Recovery',
    excerpt: 'New home sales and construction permits increase for third consecutive month.',
    category: 'Economy',
    date: '2024-03-10',
    imageUrl: 'https://source.unsplash.com/random/800x600?housing'
  }
];

const EconomyPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h1" gutterBottom sx={{ fontSize: '2.5rem', mb: 4 }}>
        Economy
      </Typography>
      
      <Grid container spacing={4}>
        {economyNews.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EconomyPage; 