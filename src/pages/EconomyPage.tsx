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
  Link as MuiLink,
  Button,
  Stack,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PublicIcon from '@mui/icons-material/Public';

// Default placeholder image URL
const DEFAULT_IMAGE_PLACEHOLDER = "/images/economy-default.jpg";

// Featured economic article
const featuredArticle = {
  id: 1,
  title: 'Federal Reserve Signals Cautious Approach to Rate Cuts as Inflation Persists',
  excerpt: 'Central bank officials indicated they would maintain higher interest rates for longer than previously anticipated as inflation remains above target levels.',
  author: 'James Williams',
  category: 'Monetary Policy',
  date: 'April 26, 2025',
  imageUrl: '/images/federal-reserve.jpg',
  path: '/economy/fed-signals-caution'
};

// Economic indicator data
const economicIndicators = [
  { indicator: 'GDP Growth (Q1)', value: '2.4%', change: '+0.3%', previousPeriod: '2.1%' },
  { indicator: 'Unemployment Rate', value: '3.8%', change: '-0.1%', previousPeriod: '3.9%' },
  { indicator: 'Inflation (CPI)', value: '2.8%', change: '-0.2%', previousPeriod: '3.0%' },
  { indicator: 'Core Inflation', value: '3.2%', change: '-0.1%', previousPeriod: '3.3%' },
  { indicator: 'Retail Sales Growth', value: '1.2%', change: '+0.4%', previousPeriod: '0.8%' },
  { indicator: '10-Year Treasury Yield', value: '4.25%', change: '+0.15%', previousPeriod: '4.10%' }
];

// Monetary policy articles
const monetaryPolicyArticles = [
  {
    id: 2,
    title: 'ECB Holds Rates Steady Despite Calls for Stimulus',
    excerpt: 'European Central Bank maintains current policy stance, citing concerns about persistent inflation pressures.',
    author: 'Laura Schmidt',
    category: 'Monetary Policy',
    date: 'April 25, 2025',
    imageUrl: '/images/ecb-building.jpg',
    path: '/economy/ecb-holds-rates'
  },
  {
    id: 3,
    title: 'Bank of Japan Expands Yield Curve Control Parameters',
    excerpt: 'Japanese central bank adjusts policy framework to allow greater flexibility in bond yields amid global rate pressures.',
    author: 'Takashi Yamamoto',
    category: 'Monetary Policy',
    date: 'April 24, 2025',
    imageUrl: '/images/bank-of-japan.jpg',
    path: '/economy/boj-yield-curve'
  },
  {
    id: 4,
    title: 'Central Banks Face Increasingly Complex Policy Trade-offs',
    excerpt: 'Analysis of how monetary authorities are navigating inflation concerns, growth risks, and financial stability.',
    author: 'Dr. Sarah Chen',
    category: 'Monetary Policy',
    date: 'April 23, 2025',
    imageUrl: '/images/central-banks.jpg',
    path: '/economy/central-bank-tradeoffs'
  }
];

// Labor market articles
const laborMarketArticles = [
  {
    id: 5,
    title: 'Job Growth Exceeds Expectations as Service Sector Expands',
    excerpt: 'Non-farm payrolls increased by 285,000 in March, substantially above consensus forecasts of 210,000.',
    author: 'Michael Rodriguez',
    category: 'Labor Market',
    date: 'April 26, 2025',
    imageUrl: '/images/job-growth.jpg',
    path: '/economy/job-growth-exceeds'
  },
  {
    id: 6,
    title: 'Wage Growth Moderates, Easing Inflation Concerns',
    excerpt: 'Average hourly earnings increased at the slowest pace in two years, potentially alleviating pressure on the Federal Reserve.',
    author: 'Emma Thompson',
    category: 'Labor Market',
    date: 'April 25, 2025',
    imageUrl: '/images/wage-growth.jpg',
    path: '/economy/wage-growth-moderates'
  },
  {
    id: 7,
    title: 'Remote Work Trends Reshaping Labor Markets Nationwide',
    excerpt: 'Geographic dispersion of employment continues to transform regional economies and housing markets.',
    author: 'David Miller',
    category: 'Labor Market',
    date: 'April 24, 2025',
    imageUrl: '/images/remote-work.jpg',
    path: '/economy/remote-work-trends'
  }
];

// Housing market articles
const housingMarketArticles = [
  {
    id: 8,
    title: 'Housing Starts Jump to Highest Level in 18 Months',
    excerpt: 'New home construction increased by 8.2% in March, signaling potential relief for tight housing supply.',
    author: 'Jennifer Lee',
    category: 'Housing',
    date: 'April 25, 2025',
    imageUrl: '/images/housing-construction.jpg',
    path: '/economy/housing-starts-jump'
  },
  {
    id: 9,
    title: 'Mortgage Rates Climb to 6.5%, Dampening Home Sales',
    excerpt: 'Higher borrowing costs continue to pressure housing affordability despite strong demand.',
    author: 'Thomas Grant',
    category: 'Housing',
    date: 'April 24, 2025',
    imageUrl: '/images/mortgage-rates.jpg',
    path: '/economy/mortgage-rates-climb'
  },
  {
    id: 10,
    title: 'Commercial Real Estate Faces Adjustment Period as Office Demand Shifts',
    excerpt: 'Office vacancy rates in major cities remain elevated as hybrid work models become the new standard.',
    author: 'Richard Wong',
    category: 'Housing',
    date: 'April 23, 2025',
    imageUrl: '/images/commercial-real-estate.jpg',
    path: '/economy/commercial-real-estate'
  }
];

// International economy articles
const globalEconomyArticles = [
  {
    id: 11,
    title: 'China\'s Growth Stabilizes as Stimulus Measures Take Effect',
    excerpt: 'GDP expanded at 5.2% in the first quarter, suggesting policy efforts are supporting economic activity.',
    author: 'Michael Chen',
    category: 'Global',
    date: 'April 26, 2025',
    imageUrl: '/images/china-economy.jpg',
    path: '/economy/china-growth-stabilizes'
  },
  {
    id: 12,
    title: 'Eurozone Manufacturing Recovery Strengthens',
    excerpt: 'PMI data shows factory activity expanding at the fastest pace in two years across the currency bloc.',
    author: 'Sophie Bernard',
    category: 'Global',
    date: 'April 25, 2025',
    imageUrl: '/images/eurozone-manufacturing.jpg',
    path: '/economy/eurozone-manufacturing'
  },
  {
    id: 13,
    title: 'Emerging Markets Face Headwinds from Rising U.S. Interest Rates',
    excerpt: 'Capital outflows accelerate as yield differentials shift in favor of dollar-denominated assets.',
    author: 'Rajiv Patel',
    category: 'Global',
    date: 'April 24, 2025',
    imageUrl: '/images/emerging-markets.jpg',
    path: '/economy/emerging-markets-headwinds'
  }
];

const EconomyPage: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 2, pb: 8 }}>
      {/* Economic Indicators Ticker */}
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
          ECONOMIC SNAPSHOT:
        </Typography>
        <Box sx={{ display: 'flex', overflow: 'auto', gap: 3, pb: 1 }}>
          {economicIndicators.slice(0, 5).map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>
                {item.indicator}
              </Typography>
              <Typography variant="body2" sx={{ mr: 0.5 }}>
                {item.value}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: item.change.startsWith('+') ? 'success.main' : 'error.main',
                  fontWeight: 500
                }}
              >
                {item.change}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Main Content - Left Column */}
        <Grid item xs={12} md={8}>
          {/* Featured Article - Top Story */}
          <Paper elevation={0} sx={{ mb: 4, borderBottom: '1px solid #e0e0e0', pb: 3 }}>
            <Typography 
              component={Link} 
              to={featuredArticle.path} 
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
              {featuredArticle.title}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
              <Box sx={{ 
                flex: { xs: '1 1 100%', sm: '3 1 0' },
                order: { xs: 2, sm: 1 }
              }}>
                <Typography variant="subtitle1" paragraph sx={{ fontSize: '1.25rem', lineHeight: 1.5 }}>
                  {featuredArticle.excerpt}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    fontStyle: 'italic',
                    mb: 1
                  }}
                >
                  <span>By {featuredArticle.author}</span>
                  <span>{featuredArticle.date}</span>
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <MuiLink 
                    component={Link} 
                    to={featuredArticle.path} 
                    sx={{ 
                      color: 'secondary.main',
                      textDecoration: 'none',
                      fontWeight: 500,
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Continue Reading
                  </MuiLink>
                  <Box sx={{ flexGrow: 1 }} />
                  <IconButton size="small">
                    <BookmarkBorderIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <ShareIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
              
              <Box sx={{ 
                flex: { xs: '1 1 100%', sm: '2 1 0' },
                order: { xs: 1, sm: 2 } 
              }}>
                <Box
                  component="img"
                  src={featuredArticle.imageUrl || DEFAULT_IMAGE_PLACEHOLDER}
                  alt={featuredArticle.title}
                  sx={{
                    width: '100%',
                    height: { xs: 200, sm: 300 },
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Box>
          </Paper>

          {/* Economic Indicators Detail */}
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
                Economic Indicators
              </Typography>
            </Box>
            
            <TableContainer component={Paper} elevation={0} sx={{ mb: 4, border: '1px solid #e0e0e0' }}>
              <Table sx={{ minWidth: 650 }} aria-label="economic indicators table">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                    <TableCell sx={{ fontWeight: 700 }}>Indicator</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Current</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Previous Period</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Change</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {economicIndicators.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {row.indicator}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {row.value}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {row.previousPeriod}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: row.change.startsWith('+') ? 'success.main' : 'error.main',
                            fontWeight: 500
                          }}
                        >
                          {row.change}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          
          {/* Monetary Policy Section */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccountBalanceIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                Monetary Policy
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {monetaryPolicyArticles.map((article) => (
                <Grid item xs={12} md={4} key={article.id}>
                  <Card elevation={0} sx={{ border: 'none', height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={article.imageUrl || DEFAULT_IMAGE_PLACEHOLDER}
                      alt={article.title}
                    />
                    <CardContent sx={{ px: 0 }}>
                      <Typography 
                        variant="body2" 
                        color="secondary.main" 
                        sx={{ mb: 1, fontWeight: 500 }}
                      >
                        {article.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        component={Link}
                        to={article.path}
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
                        {article.title}
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
                        {article.excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography 
                          variant="caption" 
                          color="text.secondary"
                          sx={{ fontStyle: 'italic' }}
                        >
                          {article.date}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          color="text.secondary"
                        >
                          By {article.author}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Labor Market Section */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WorkIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                Labor Market
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {laborMarketArticles.map((article) => (
                <Grid item xs={12} md={4} key={article.id}>
                  <Card elevation={0} sx={{ border: 'none', height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={article.imageUrl || DEFAULT_IMAGE_PLACEHOLDER}
                      alt={article.title}
                    />
                    <CardContent sx={{ px: 0 }}>
                      <Typography 
                        variant="body2" 
                        color="secondary.main" 
                        sx={{ mb: 1, fontWeight: 500 }}
                      >
                        {article.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        component={Link}
                        to={article.path}
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
                        {article.title}
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
                        {article.excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography 
                          variant="caption" 
                          color="text.secondary"
                          sx={{ fontStyle: 'italic' }}
                        >
                          {article.date}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          color="text.secondary"
                        >
                          By {article.author}
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
            {/* Housing Market Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <HomeWorkIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                Housing Market
              </Typography>
            </Box>
            
            <Stack spacing={2} sx={{ mb: 4 }}>
              {housingMarketArticles.map((article, index) => (
                <Box key={article.id} sx={{ pb: 2, borderBottom: index < housingMarketArticles.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                    <Box
                      component="img"
                      src={article.imageUrl || DEFAULT_IMAGE_PLACEHOLDER}
                      alt={article.title}
                      sx={{
                        width: 80,
                        height: 60,
                        objectFit: 'cover',
                      }}
                    />
                    <Typography
                      variant="subtitle1"
                      component={Link}
                      to={article.path}
                      sx={{
                        textDecoration: 'none',
                        color: 'text.primary',
                        display: 'block',
                        fontWeight: 600,
                        fontSize: '1rem',
                        lineHeight: 1.3,
                        '&:hover': {
                          color: 'secondary.main'
                        }
                      }}
                    >
                      {article.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                      mb: 1
                    }}
                  >
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </Typography>
                </Box>
              ))}
            </Stack>
            
            {/* Global Economy Section */}
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PublicIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                  Global Economy
                </Typography>
              </Box>
              
              <Stack spacing={2}>
                {globalEconomyArticles.map((article, index) => (
                  <Box key={article.id} sx={{ pb: 2, borderBottom: index < globalEconomyArticles.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                      <Box
                        component="img"
                        src={article.imageUrl || DEFAULT_IMAGE_PLACEHOLDER}
                        alt={article.title}
                        sx={{
                          width: 80,
                          height: 60,
                          objectFit: 'cover',
                        }}
                      />
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to={article.path}
                        sx={{
                          textDecoration: 'none',
                          color: 'text.primary',
                          display: 'block',
                          fontWeight: 600,
                          fontSize: '1rem',
                          lineHeight: 1.3,
                          '&:hover': {
                            color: 'secondary.main'
                          }
                        }}
                      >
                        {article.title}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        fontSize: '0.8rem',
                        mb: 1
                      }}
                    >
                      <span>{article.category}</span>
                      <span>{article.date}</span>
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
            
            {/* Economic Calendar */}
            <Paper elevation={0} sx={{ mt: 4, p: 3, border: '1px solid #e0e0e0', bgcolor: '#f8f8f8' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Economic Calendar
              </Typography>
              <Typography variant="body2" paragraph>
                Track upcoming economic data releases, central bank meetings, and policy announcements.
              </Typography>
              <Button
                component={Link}
                to="/economy/calendar"
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mb: 2 }}
              >
                View Full Calendar
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
                Updated daily with market impact forecasts
              </Typography>
            </Paper>
            
            {/* Newsletter */}
            <Paper elevation={0} sx={{ mt: 4, p: 3, border: '1px solid #e0e0e0', bgcolor: '#f8f8f8' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Economy Newsletter
              </Typography>
              <Typography variant="body2" paragraph>
                Get expert analysis on economic trends, policy developments, and key indicators.
              </Typography>
              <Button
                component={Link}
                to="/subscribe/economy-newsletter"
                variant="outlined"
                color="secondary"
                fullWidth
                sx={{ mb: 2 }}
              >
                Subscribe Free
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
                Delivered every Monday morning
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EconomyPage; 