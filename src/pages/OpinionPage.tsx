import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
  Button,
  Stack,
  Avatar,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BalanceIcon from '@mui/icons-material/Balance';

// Default placeholder image URL
const DEFAULT_IMAGE_PLACEHOLDER = "/images/opinion-default.jpg";

// Featured opinion article
const featuredOpinion = {
  id: 1,
  title: 'The Hidden Risks in Today\'s Seemingly Stable Markets',
  excerpt: 'Despite appearances of stability, current market conditions harbor several significant threats that investors would be unwise to ignore.',
  author: 'Dr. Sarah Chen',
  role: 'Chief Economic Strategist',
  date: 'April 26, 2025',
  imageUrl: '/images/authors/sarah-chen.jpg',
  path: '/opinion/hidden-market-risks',
  category: 'Markets'
};

// Market opinions
const marketOpinions = [
  {
    id: 2,
    title: 'Why Tech Valuations May Be More Reasonable Than Critics Claim',
    excerpt: 'A closer examination of technology companies\' earnings potential reveals that current valuations may actually be justified by fundamentals.',
    author: 'Michael Rodriguez',
    role: 'Market Analyst',
    date: 'April 25, 2025',
    imageUrl: '/images/authors/michael-rodriguez.jpg',
    path: '/opinion/tech-valuations',
    category: 'Technology'
  },
  {
    id: 3,
    title: 'The Coming Correction in Commodity Markets',
    excerpt: 'Recent price surges in key commodities appear increasingly disconnected from underlying supply and demand fundamentals.',
    author: 'Emma Thompson',
    role: 'Commodities Strategist',
    date: 'April 25, 2025',
    imageUrl: '/images/authors/emma-thompson.jpg',
    path: '/opinion/commodity-correction',
    category: 'Markets'
  },
  {
    id: 4,
    title: 'Central Bank Independence: More Important Than Ever',
    excerpt: 'Political pressure on monetary policy institutions threatens long-term economic stability and market confidence.',
    author: 'Prof. James Wilson',
    role: 'Former Central Bank Advisor',
    date: 'April 24, 2025',
    imageUrl: '/images/authors/james-wilson.jpg',
    path: '/opinion/central-bank-independence',
    category: 'Economy'
  }
];

// Technology opinions
const technologyOpinions = [
  {
    id: 5,
    title: 'Regulating AI in Finance: Finding the Right Balance',
    excerpt: 'As artificial intelligence transforms financial services, regulators face complex challenges in protecting consumers without stifling innovation.',
    author: 'Lisa Thompson',
    role: 'Technology Policy Expert',
    date: 'April 26, 2025',
    imageUrl: '/images/authors/lisa-thompson.jpg',
    path: '/opinion/ai-finance-regulation',
    category: 'Technology'
  },
  {
    id: 6,
    title: 'The Digital Currency Revolution: Beyond Bitcoin',
    excerpt: 'While cryptocurrency pioneers captured public attention, the true financial innovation may lie in central bank digital currencies and regulated stablecoins.',
    author: 'David Park',
    role: 'Fintech Researcher',
    date: 'April 25, 2025',
    imageUrl: '/images/authors/david-park.jpg',
    path: '/opinion/digital-currency-revolution',
    category: 'Technology'
  },
  {
    id: 7,
    title: 'Quantum Computing: Still Overhyped for Financial Applications',
    excerpt: 'Despite the excitement, practical financial applications of quantum computing remain years away from meaningful implementation.',
    author: 'Dr. Robert Chen',
    role: 'Quantum Computing Researcher',
    date: 'April 23, 2025',
    imageUrl: '/images/authors/robert-chen.jpg',
    path: '/opinion/quantum-computing-overhyped',
    category: 'Technology'
  }
];

// Economic policy opinions
const economicOpinions = [
  {
    id: 8,
    title: 'Why Corporate Tax Reform Deserves Bipartisan Support',
    excerpt: 'A modernized corporate tax framework could benefit both business interests and public finances if designed thoughtfully.',
    author: 'Jonathan Hayes',
    role: 'Tax Policy Analyst',
    date: 'April 24, 2025',
    imageUrl: '/images/authors/jonathan-hayes.jpg',
    path: '/opinion/corporate-tax-reform',
    category: 'Policy'
  },
  {
    id: 9,
    title: 'The Coming Crisis in Retirement Funding',
    excerpt: 'Current demographic trends and pension underfunding point to significant challenges for retirement systems worldwide.',
    author: 'Maria Garcia',
    role: 'Retirement Policy Expert',
    date: 'April 23, 2025',
    imageUrl: '/images/authors/maria-garcia.jpg',
    path: '/opinion/retirement-crisis',
    category: 'Economy'
  },
  {
    id: 10,
    title: 'Housing Affordability: Market Solutions vs. Government Intervention',
    excerpt: 'Examining which approaches might actually make housing more accessible without creating unintended consequences.',
    author: 'Thomas Wright',
    role: 'Urban Economist',
    date: 'April 22, 2025',
    imageUrl: '/images/authors/thomas-wright.jpg',
    path: '/opinion/housing-affordability',
    category: 'Economy'
  }
];

// Featured columnists
const featuredColumnists = [
  {
    id: 11,
    name: 'Dr. Sarah Chen',
    role: 'Chief Economic Strategist',
    bio: 'Former advisor to central banks with expertise in monetary policy and global economic trends.',
    imageUrl: '/images/authors/sarah-chen.jpg',
    path: '/columnists/sarah-chen'
  },
  {
    id: 12,
    name: 'Michael Rodriguez',
    role: 'Market Analyst',
    bio: 'Veteran market analyst with over 20 years experience covering technology and financial sectors.',
    imageUrl: '/images/authors/michael-rodriguez.jpg',
    path: '/columnists/michael-rodriguez'
  },
  {
    id: 13,
    name: 'Prof. James Wilson',
    role: 'Former Central Bank Advisor',
    bio: 'Distinguished academic who has published extensively on monetary policy and financial regulation.',
    imageUrl: '/images/authors/james-wilson.jpg',
    path: '/columnists/james-wilson'
  },
  {
    id: 14,
    name: 'Lisa Thompson',
    role: 'Technology Policy Expert',
    bio: 'Specializes in the intersection of technology, finance, and regulatory policy.',
    imageUrl: '/images/authors/lisa-thompson.jpg',
    path: '/columnists/lisa-thompson'
  }
];

// Trending topics
const trendingTopics = [
  { topic: 'Federal Reserve Policy', path: '/topics/federal-reserve' },
  { topic: 'Inflation Outlook', path: '/topics/inflation' },
  { topic: 'Market Correction', path: '/topics/market-correction' },
  { topic: 'Cryptocurrency Regulation', path: '/topics/crypto-regulation' },
  { topic: 'Housing Market', path: '/topics/housing-market' },
  { topic: 'Corporate Taxation', path: '/topics/corporate-taxation' },
  { topic: 'Central Bank Digital Currency', path: '/topics/cbdc' },
  { topic: 'Tech Monopolies', path: '/topics/tech-monopolies' }
];

const OpinionPage: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 2, pb: 8 }}>
      {/* Trending Topics Bar */}
      <Box 
        sx={{ 
          display: 'flex', 
          overflow: 'hidden',
          bgcolor: '#f7f7f7',
          border: '1px solid #e0e0e0',
          mb: 3,
          p: 1
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mr: 2, whiteSpace: 'nowrap' }}>
          TRENDING TOPICS:
        </Typography>
        <Box sx={{ display: 'flex', overflow: 'auto', gap: 3, alignItems: 'center', pb: 1 }}>
          {trendingTopics.map((item, index) => (
            <Box 
              key={index} 
              component={Link} 
              to={item.path}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                color: 'text.primary',
                '&:hover': {
                  color: 'secondary.main'
                }
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {item.topic}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Main Content - Left Column */}
        <Grid item xs={12} md={8}>
          {/* Featured Opinion - Top Opinion */}
          <Paper elevation={0} sx={{ mb: 4, borderBottom: '1px solid #e0e0e0', pb: 3 }}>
            <Typography 
              component={Link} 
              to={featuredOpinion.path} 
              variant="h3" 
              gutterBottom
              sx={{ 
                textDecoration: 'none',
                color: 'text.primary',
                display: 'block',
                fontWeight: 700,
                '&:hover': {
                  color: 'secondary.main'
                }
              }}
            >
              {featuredOpinion.title}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
              <Box sx={{ 
                flex: { xs: '1 1 100%', sm: '3 1 0' },
                order: { xs: 2, sm: 1 }
              }}>
                <Typography variant="subtitle1" paragraph sx={{ fontSize: '1.25rem', lineHeight: 1.5 }}>
                  {featuredOpinion.excerpt}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    src={featuredOpinion.imageUrl || DEFAULT_IMAGE_PLACEHOLDER} 
                    alt={featuredOpinion.author}
                    sx={{ width: 50, height: 50, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {featuredOpinion.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {featuredOpinion.role}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" color="text.secondary">
                    {featuredOpinion.date}
                  </Typography>
                  <Box>
                    <Button startIcon={<ShareIcon />} size="small">
                      Share
                    </Button>
                    <Button startIcon={<BookmarkBorderIcon />} size="small">
                      Save
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>

          {/* Market Opinions Section */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TrendingUpIcon sx={{ color: 'secondary.main', mr: 1 }} />
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  fontWeight: 700, 
                  borderBottom: '2px solid #000',
                  pb: 1,
                  flexGrow: 1
                }}
              >
                Market Perspectives
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {marketOpinions.map((opinion) => (
                <Grid item xs={12} md={4} key={opinion.id}>
                  <Card elevation={0} sx={{ border: 'none', height: '100%' }}>
                    <Box sx={{ mb: 2 }}>
                      <Avatar 
                        src={opinion.imageUrl || DEFAULT_IMAGE_PLACEHOLDER} 
                        alt={opinion.author}
                        sx={{ width: 60, height: 60 }}
                      />
                    </Box>
                    <CardContent sx={{ px: 0 }}>
                      <Typography 
                        variant="body2" 
                        color="secondary.main" 
                        sx={{ mb: 1, fontWeight: 500 }}
                      >
                        {opinion.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        component={Link}
                        to={opinion.path}
                        sx={{
                          textDecoration: 'none',
                          color: 'text.primary',
                          display: 'block',
                          mb: 1,
                          lineHeight: 1.3,
                          '&:hover': {
                            color: 'secondary.main'
                          }
                        }}
                      >
                        {opinion.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        paragraph 
                        sx={{ 
                          color: 'text.secondary',
                          fontSize: '0.9rem',
                          mb: 1 
                        }}
                      >
                        {opinion.excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                          By {opinion.author}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          color="text.secondary"
                        >
                          {opinion.date}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Technology Opinions Section */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PsychologyIcon sx={{ color: 'secondary.main', mr: 1 }} />
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  fontWeight: 700, 
                  borderBottom: '2px solid #000',
                  pb: 1,
                  flexGrow: 1
                }}
              >
                Technology & Innovation
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {technologyOpinions.map((opinion) => (
                <Grid item xs={12} md={4} key={opinion.id}>
                  <Card elevation={0} sx={{ border: 'none', height: '100%' }}>
                    <Box sx={{ mb: 2 }}>
                      <Avatar 
                        src={opinion.imageUrl || DEFAULT_IMAGE_PLACEHOLDER} 
                        alt={opinion.author}
                        sx={{ width: 60, height: 60 }}
                      />
                    </Box>
                    <CardContent sx={{ px: 0 }}>
                      <Typography 
                        variant="body2" 
                        color="secondary.main" 
                        sx={{ mb: 1, fontWeight: 500 }}
                      >
                        {opinion.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        component={Link}
                        to={opinion.path}
                        sx={{
                          textDecoration: 'none',
                          color: 'text.primary',
                          display: 'block',
                          mb: 1,
                          lineHeight: 1.3,
                          '&:hover': {
                            color: 'secondary.main'
                          }
                        }}
                      >
                        {opinion.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        paragraph 
                        sx={{ 
                          color: 'text.secondary',
                          fontSize: '0.9rem',
                          mb: 1 
                        }}
                      >
                        {opinion.excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                          By {opinion.author}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          color="text.secondary"
                        >
                          {opinion.date}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Economic Policy Opinions */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <BalanceIcon sx={{ color: 'secondary.main', mr: 1 }} />
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  fontWeight: 700, 
                  borderBottom: '2px solid #000',
                  pb: 1,
                  flexGrow: 1
                }}
              >
                Economic Policy
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {economicOpinions.map((opinion) => (
                <Grid item xs={12} md={4} key={opinion.id}>
                  <Card elevation={0} sx={{ border: 'none', height: '100%' }}>
                    <Box sx={{ mb: 2 }}>
                      <Avatar 
                        src={opinion.imageUrl || DEFAULT_IMAGE_PLACEHOLDER} 
                        alt={opinion.author}
                        sx={{ width: 60, height: 60 }}
                      />
                    </Box>
                    <CardContent sx={{ px: 0 }}>
                      <Typography 
                        variant="body2" 
                        color="secondary.main" 
                        sx={{ mb: 1, fontWeight: 500 }}
                      >
                        {opinion.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        component={Link}
                        to={opinion.path}
                        sx={{
                          textDecoration: 'none',
                          color: 'text.primary',
                          display: 'block',
                          mb: 1,
                          lineHeight: 1.3,
                          '&:hover': {
                            color: 'secondary.main'
                          }
                        }}
                      >
                        {opinion.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        paragraph 
                        sx={{ 
                          color: 'text.secondary',
                          fontSize: '0.9rem',
                          mb: 1 
                        }}
                      >
                        {opinion.excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                          By {opinion.author}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          color="text.secondary"
                        >
                          {opinion.date}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Sidebar - Right Column */}
        <Grid item xs={12} md={4}>
          <Box sx={{ pl: { md: 2 }, borderLeft: { md: '1px solid #e0e0e0' } }}>
            {/* Featured Columnists Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PersonIcon sx={{ color: 'secondary.main', mr: 1 }} />
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  fontWeight: 700, 
                  borderBottom: '2px solid #000',
                  pb: 1,
                  flexGrow: 1
                }}
              >
                Our Columnists
              </Typography>
            </Box>
            
            <Stack spacing={2} sx={{ mb: 4 }}>
              {featuredColumnists.map((columnist, index) => (
                <Box key={columnist.id} sx={{ display: 'flex', gap: 2, pb: 2, borderBottom: index < featuredColumnists.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
                  <Avatar 
                    src={columnist.imageUrl || DEFAULT_IMAGE_PLACEHOLDER} 
                    alt={columnist.name}
                    sx={{ width: 60, height: 60 }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle1"
                      component={Link}
                      to={columnist.path}
                      sx={{
                        textDecoration: 'none',
                        color: 'text.primary',
                        display: 'block',
                        fontWeight: 600,
                        '&:hover': {
                          color: 'secondary.main'
                        }
                      }}
                    >
                      {columnist.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {columnist.role}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                      {columnist.bio}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
            
            {/* Topics */}
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ForumIcon sx={{ color: 'secondary.main', mr: 1 }} />
                <Typography 
                  variant="h5" 
                  component="h2" 
                  sx={{ 
                    fontWeight: 700, 
                    borderBottom: '2px solid #000',
                    pb: 1,
                    flexGrow: 1
                  }}
                >
                  Opinion Topics
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {[
                  "Markets", "Economics", "Finance", "Policy", 
                  "Technology", "Business", "Regulation", 
                  "Central Banks", "Global Trade", "Emerging Markets", 
                  "Climate", "Cryptocurrencies", "Retirement"
                ].map((category, index) => (
                  <Chip 
                    key={index} 
                    label={category} 
                    component={Link} 
                    to={`/opinion/topics/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    clickable
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      '&:hover': {
                        bgcolor: 'secondary.light',
                        color: 'secondary.contrastText'
                      }
                    }}
                  />
                ))}
              </Box>
            </Box>
            
            {/* Submit Opinion */}
            <Paper elevation={0} sx={{ mt: 4, p: 3, border: '1px solid #e0e0e0', bgcolor: '#f8f8f8' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Share Your Expertise
              </Typography>
              <Typography variant="body2" paragraph>
                Are you an expert in finance, economics, or business? Submit your opinion piece for consideration.
              </Typography>
              <Button
                component={Link}
                to="/submit-opinion"
                variant="contained"
                color="secondary"
                fullWidth
                startIcon={<LightbulbIcon />}
                sx={{ mb: 2 }}
              >
                Submit an Opinion
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
                Our editors review all submissions carefully.
              </Typography>
            </Paper>
            
            {/* Newsletter */}
            <Paper elevation={0} sx={{ mt: 4, p: 3, border: '1px solid #e0e0e0', bgcolor: '#f8f8f8' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Opinion Newsletter
              </Typography>
              <Typography variant="body2" paragraph>
                Get the week's most insightful perspectives delivered directly to your inbox.
              </Typography>
              <Button
                component={Link}
                to="/subscribe/opinion-newsletter"
                variant="outlined"
                color="secondary"
                fullWidth
                sx={{ mb: 2 }}
              >
                Subscribe Free
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
                Every Sunday morning. Unsubscribe anytime.
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OpinionPage; 