import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import NewsCard from '../components/NewsCard';

// Sample technology news data
const technologyNews = [
  {
    id: 1,
    title: 'AI Breakthrough in Natural Language Processing',
    excerpt: 'New model achieves human-level performance in complex language tasks.',
    category: 'Technology',
    date: '2024-03-15',
    imageUrl: 'https://source.unsplash.com/random/800x600?artificial-intelligence'
  },
  {
    id: 2,
    title: 'Quantum Computing Milestone Reached',
    excerpt: 'Researchers achieve quantum supremacy with new 100-qubit processor.',
    category: 'Technology',
    date: '2024-03-14',
    imageUrl: 'https://source.unsplash.com/random/800x600?quantum-computing'
  },
  {
    id: 3,
    title: 'Major Tech Companies Unveil New AR Glasses',
    excerpt: 'Next generation of augmented reality devices promise revolutionary features.',
    category: 'Technology',
    date: '2024-03-13',
    imageUrl: 'https://source.unsplash.com/random/800x600?augmented-reality'
  },
  {
    id: 4,
    title: 'Cybersecurity Threats on the Rise',
    excerpt: 'New report shows 40% increase in sophisticated cyber attacks.',
    category: 'Technology',
    date: '2024-03-12',
    imageUrl: 'https://source.unsplash.com/random/800x600?cybersecurity'
  },
  {
    id: 5,
    title: '5G Network Expansion Accelerates',
    excerpt: 'Global 5G coverage reaches 60% of major metropolitan areas.',
    category: 'Technology',
    date: '2024-03-11',
    imageUrl: 'https://source.unsplash.com/random/800x600?5g'
  },
  {
    id: 6,
    title: 'Blockchain Technology Revolutionizes Supply Chain',
    excerpt: 'Major corporations adopt blockchain for transparent supply chain management.',
    category: 'Technology',
    date: '2024-03-10',
    imageUrl: 'https://source.unsplash.com/random/800x600?blockchain'
  }
];

const TechnologyPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h1" gutterBottom sx={{ fontSize: '2.5rem', mb: 4 }}>
        Technology
      </Typography>
      
      <Grid container spacing={4}>
        {technologyNews.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TechnologyPage; 