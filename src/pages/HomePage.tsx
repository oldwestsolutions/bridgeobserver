import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import NewsCard from '../components/NewsCard';
import { Article } from '../types';

const featuredArticle: Article = {
  id: '1',
  title: 'Global Markets Rally as Central Banks Signal Rate Cuts',
  author: 'John Smith',
  date: 'March 15, 2024',
  excerpt: 'Major stock indices worldwide surged today following dovish comments from central bank officials, suggesting potential interest rate cuts in the coming months...',
  imageUrl: 'https://source.unsplash.com/random/800x400?finance',
  category: 'Markets',
};

const latestNews: Article[] = [
  {
    id: '2',
    title: 'Tech Stocks Lead Market Recovery',
    author: 'Sarah Johnson',
    date: 'March 14, 2024',
    excerpt: 'Technology sector shows strong performance as AI investments continue to drive growth...',
    imageUrl: 'https://source.unsplash.com/random/600x400?technology',
    category: 'Technology',
  },
  {
    id: '3',
    title: 'Emerging Markets Show Promise',
    author: 'Michael Chen',
    date: 'March 14, 2024',
    excerpt: 'Developing economies demonstrate resilience in face of global economic challenges...',
    imageUrl: 'https://source.unsplash.com/random/600x400?economy',
    category: 'Economy',
  },
  {
    id: '4',
    title: 'Corporate Earnings Season Preview',
    author: 'Emily Davis',
    date: 'March 14, 2024',
    excerpt: 'Analysts predict strong Q1 results across multiple sectors...',
    imageUrl: 'https://source.unsplash.com/random/600x400?business',
    category: 'Markets',
  },
];

const marketUpdates: Article[] = [
  {
    id: '5',
    title: 'Bitcoin Surges Past $70,000 Mark',
    author: 'David Wilson',
    date: 'March 14, 2024',
    excerpt: 'Cryptocurrency markets experience significant growth as institutional adoption continues...',
    imageUrl: 'https://source.unsplash.com/random/600x400?crypto',
    category: 'Markets',
  },
  {
    id: '6',
    title: 'Federal Reserve Meeting Preview',
    author: 'Robert Taylor',
    date: 'March 14, 2024',
    excerpt: 'Investors await key decisions on interest rates and economic outlook...',
    imageUrl: 'https://source.unsplash.com/random/600x400?federal',
    category: 'Markets',
  },
];

const technologyNews: Article[] = [
  {
    id: '7',
    title: 'AI Startups Raise Record Funding',
    author: 'Lisa Chen',
    date: 'March 14, 2024',
    excerpt: 'Artificial intelligence companies attract unprecedented investment in Q1...',
    imageUrl: 'https://source.unsplash.com/random/600x400?ai',
    category: 'Technology',
  },
  {
    id: '8',
    title: 'Quantum Computing Breakthrough',
    author: 'James Wilson',
    date: 'March 14, 2024',
    excerpt: 'Researchers achieve significant milestone in quantum computing development...',
    imageUrl: 'https://source.unsplash.com/random/600x400?quantum',
    category: 'Technology',
  },
];

const opinionPieces: Article[] = [
  {
    id: '9',
    title: 'The Future of Remote Work',
    author: 'Maria Garcia',
    date: 'March 14, 2024',
    excerpt: 'How the pandemic has permanently changed the way we work...',
    imageUrl: 'https://source.unsplash.com/random/600x400?office',
    category: 'Opinion',
  },
  {
    id: '10',
    title: 'Sustainable Investing Trends',
    author: 'Thomas Brown',
    date: 'March 14, 2024',
    excerpt: 'Why ESG factors are becoming crucial in investment decisions...',
    imageUrl: 'https://source.unsplash.com/random/600x400?sustainability',
    category: 'Opinion',
  },
];

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Grid container spacing={1}>
        {/* Featured Article - Takes full width */}
        <Grid item xs={12} component="section">
          <Paper
            elevation={0}
            sx={{
              p: 2,
              mb: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <Typography variant="h2" gutterBottom sx={{ fontSize: '2rem' }}>
              {featuredArticle.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              By {featuredArticle.author} | {featuredArticle.date}
            </Typography>
            <Typography variant="body1" paragraph>
              {featuredArticle.excerpt}
            </Typography>
          </Paper>
        </Grid>

        {/* Latest News Section - 3 columns */}
        <Grid item xs={12} component="section">
          <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', mb: 0.5 }}>
            Latest News
          </Typography>
        </Grid>
        {latestNews.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id} component="article">
            <NewsCard article={article} />
          </Grid>
        ))}

        {/* Market Updates Section - 2 columns */}
        <Grid item xs={12} component="section">
          <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', mt: 1, mb: 0.5 }}>
            Market Updates
          </Typography>
        </Grid>
        {marketUpdates.map((article) => (
          <Grid item xs={12} sm={6} key={article.id} component="article">
            <NewsCard article={article} />
          </Grid>
        ))}

        {/* Technology News Section - 2 columns */}
        <Grid item xs={12} component="section">
          <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', mt: 1, mb: 0.5 }}>
            Technology
          </Typography>
        </Grid>
        {technologyNews.map((article) => (
          <Grid item xs={12} sm={6} key={article.id} component="article">
            <NewsCard article={article} />
          </Grid>
        ))}

        {/* Opinion Section - 2 columns */}
        <Grid item xs={12} component="section">
          <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', mt: 1, mb: 0.5 }}>
            Opinion
          </Typography>
        </Grid>
        {opinionPieces.map((article) => (
          <Grid item xs={12} sm={6} key={article.id} component="article">
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage; 