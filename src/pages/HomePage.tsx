import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Featured Article */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              height: { xs: 300, md: 500 }
            }}
          >
            <CardMedia
              component="img"
              image={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              sx={{
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7)'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 4,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
              }}
            >
              <Chip
                label={featuredArticle.category}
                color="primary"
                sx={{ mb: 2 }}
              />
              <Typography
                variant="h3"
                component={Link}
                to={`/article/${featuredArticle.id}`}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                {featuredArticle.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: 'white', mt: 2 }}
              >
                {featuredArticle.excerpt}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Latest News Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom>
            Latest News
          </Typography>
        </Grid>
        {latestNews.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card
              component={Link}
              to={`/article/${article.id}`}
              sx={{
                height: '100%',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={article.imageUrl}
                alt={article.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Chip
                  label={article.category}
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {article.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Market Updates Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom>
            Market Updates
          </Typography>
        </Grid>
        {marketUpdates.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card
              component={Link}
              to={`/article/${article.id}`}
              sx={{
                height: '100%',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={article.imageUrl}
                alt={article.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Chip
                  label={article.category}
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {article.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Technology Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom>
            Technology
          </Typography>
        </Grid>
        {technologyNews.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card
              component={Link}
              to={`/article/${article.id}`}
              sx={{
                height: '100%',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={article.imageUrl}
                alt={article.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Chip
                  label={article.category}
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {article.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Opinion Section */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom>
            Opinion
          </Typography>
        </Grid>
        {opinionPieces.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card
              component={Link}
              to={`/article/${article.id}`}
              sx={{
                height: '100%',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={article.imageUrl}
                alt={article.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Chip
                  label={article.category}
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {article.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage; 