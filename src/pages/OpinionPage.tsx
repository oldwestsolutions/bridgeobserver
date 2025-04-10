import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import NewsCard from '../components/NewsCard';

// Sample opinion articles data
const opinionArticles = [
  {
    id: 1,
    title: 'The Future of Central Banking in a Digital Age',
    excerpt: 'How digital currencies and blockchain technology are reshaping monetary policy.',
    category: 'Opinion',
    date: '2024-03-15',
    imageUrl: 'https://source.unsplash.com/random/800x600?banking',
    author: 'Dr. Sarah Chen'
  },
  {
    id: 2,
    title: 'Sustainable Investing: Beyond the Hype',
    excerpt: 'A critical look at ESG investing and its impact on long-term returns.',
    category: 'Opinion',
    date: '2024-03-14',
    imageUrl: 'https://source.unsplash.com/random/800x600?sustainability',
    author: 'Michael Rodriguez'
  },
  {
    id: 3,
    title: 'The Tech Monopoly Debate: Time for Action',
    excerpt: 'Examining the growing power of big tech and potential regulatory solutions.',
    category: 'Opinion',
    date: '2024-03-13',
    imageUrl: 'https://source.unsplash.com/random/800x600?monopoly',
    author: 'Prof. James Wilson'
  },
  {
    id: 4,
    title: 'Cryptocurrency Regulation: Finding the Right Balance',
    excerpt: 'How to protect investors while fostering innovation in digital assets.',
    category: 'Opinion',
    date: '2024-03-12',
    imageUrl: 'https://source.unsplash.com/random/800x600?crypto',
    author: 'Lisa Thompson'
  },
  {
    id: 5,
    title: 'The Gig Economy: Opportunity or Exploitation?',
    excerpt: 'Analyzing the impact of platform work on traditional employment models.',
    category: 'Opinion',
    date: '2024-03-11',
    imageUrl: 'https://source.unsplash.com/random/800x600?gig-economy',
    author: 'David Park'
  },
  {
    id: 6,
    title: 'Climate Change and Financial Markets',
    excerpt: 'Why investors can no longer afford to ignore environmental risks.',
    category: 'Opinion',
    date: '2024-03-10',
    imageUrl: 'https://source.unsplash.com/random/800x600?climate',
    author: 'Emma Green'
  }
];

const OpinionPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h1" gutterBottom sx={{ fontSize: '2.5rem', mb: 4 }}>
        Opinion
      </Typography>
      
      <Grid container spacing={4}>
        {opinionArticles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OpinionPage; 