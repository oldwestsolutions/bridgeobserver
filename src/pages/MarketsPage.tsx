import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import NewsCard from '../components/NewsCard';

// Sample market news data
const marketNews = [
  {
    id: 1,
    title: 'Global Markets Rally as Fed Signals Rate Cut',
    excerpt: 'Major indices hit record highs following Federal Reserve\'s dovish stance on interest rates.',
    category: 'Markets',
    date: '2024-03-15',
    imageUrl: 'https://source.unsplash.com/random/800x600?stock-market'
  },
  {
    id: 2,
    title: 'Tech Stocks Lead Market Recovery',
    excerpt: 'FAANG companies show strong earnings, driving tech sector to new heights.',
    category: 'Markets',
    date: '2024-03-14',
    imageUrl: 'https://source.unsplash.com/random/800x600?technology'
  },
  {
    id: 3,
    title: 'Asian Markets Mixed Amid Trade Tensions',
    excerpt: 'Regional markets show varied performance as US-China trade talks continue.',
    category: 'Markets',
    date: '2024-03-13',
    imageUrl: 'https://source.unsplash.com/random/800x600?asia'
  },
  {
    id: 4,
    title: 'European Markets Reach New Highs',
    excerpt: 'Strong economic data from Germany boosts European indices.',
    category: 'Markets',
    date: '2024-03-12',
    imageUrl: 'https://source.unsplash.com/random/800x600?europe'
  },
  {
    id: 5,
    title: 'Cryptocurrency Market Shows Signs of Recovery',
    excerpt: 'Bitcoin and Ethereum gain momentum after recent market correction.',
    category: 'Markets',
    date: '2024-03-11',
    imageUrl: 'https://source.unsplash.com/random/800x600?cryptocurrency'
  },
  {
    id: 6,
    title: 'Commodity Markets: Oil Prices Surge',
    excerpt: 'OPEC production cuts drive oil prices to three-month high.',
    category: 'Markets',
    date: '2024-03-10',
    imageUrl: 'https://source.unsplash.com/random/800x600?oil'
  }
];

const MarketsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h1" gutterBottom sx={{ fontSize: '2.5rem', mb: 4 }}>
        Markets
      </Typography>
      
      <Grid container spacing={4}>
        {marketNews.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MarketsPage; 