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
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// Default placeholder image URL
const DEFAULT_IMAGE_PLACEHOLDER = "/images/finance-default.jpg";

// Featured market article
const featuredArticle = {
  id: 1,
  title: 'Global Markets Rally as Central Banks Signal Coordinated Policy Shift',
  excerpt: 'International equity markets saw their strongest weekly gains in months as major central banks indicated a synchronized approach to monetary policy adjustments.',
  author: 'Thomas Reynolds',
  category: 'Markets',
  date: 'April 26, 2025',
  imageUrl: '/images/global-markets.jpg',
  path: '/markets/global-rally-central-banks'
};

// Stock market articles
const stockMarketArticles = [
  {
    id: 2,
    title: 'Tech Sector Leads Market Surge with Record-Breaking Rally',
    excerpt: 'Technology stocks posted their best performance in over two years as AI advancements continue to drive investor enthusiasm.',
    author: 'Jennifer Lee',
    category: 'Stocks',
    date: 'April 26, 2025',
    imageUrl: '/images/tech-stocks.jpg',
    path: '/markets/tech-stocks-rally'
  },
  {
    id: 3,
    title: 'Energy Stocks Decline as Renewable Alternatives Gain Momentum',
    excerpt: 'Traditional energy companies faced selling pressure as investors shifted capital toward green energy alternatives.',
    author: 'Mark Davidson',
    category: 'Stocks',
    date: 'April 25, 2025',
    imageUrl: '/images/energy-stocks.jpg',
    path: '/markets/energy-stocks-decline'
  },
  {
    id: 4,
    title: 'Small-Cap Stocks Outperform as Economic Outlook Improves',
    excerpt: 'Smaller companies have been outpacing larger counterparts as economic indicators suggest favorable conditions for domestic growth.',
    author: 'Sarah Chen',
    category: 'Stocks',
    date: 'April 25, 2025',
    imageUrl: '/images/small-cap.jpg',
    path: '/markets/small-cap-outperform'
  }
];

// Forex market articles
const forexArticles = [
  {
    id: 5,
    title: 'Dollar Strengthens on Robust Economic Data and Treasury Yield Rise',
    excerpt: 'The U.S. dollar reached multi-month highs against a basket of major currencies as strong economic indicators bolstered the case for higher rates.',
    author: 'Michael Rodriguez',
    category: 'Forex',
    date: 'April 26, 2025',
    imageUrl: '/images/dollar-currency.jpg',
    path: '/markets/dollar-strengthens'
  },
  {
    id: 6,
    title: 'Euro Faces Pressure as ECB and Fed Policy Divergence Grows',
    excerpt: 'The European currency continued its downward trend as markets price in policy differences between the European Central Bank and the Federal Reserve.',
    author: 'Laura Schmidt',
    category: 'Forex',
    date: 'April 25, 2025',
    imageUrl: '/images/euro-currency.jpg',
    path: '/markets/euro-pressure'
  },
  {
    id: 7,
    title: 'Emerging Market Currencies Show Resilience Despite Dollar Strength',
    excerpt: 'Several key emerging market currencies have maintained stability despite broader dollar strength, reflecting improved economic fundamentals.',
    author: 'Robert Jenkins',
    category: 'Forex',
    date: 'April 24, 2025',
    imageUrl: '/images/emerging-markets.jpg',
    path: '/markets/emerging-currencies'
  }
];

// Commodity market articles
const commodityArticles = [
  {
    id: 8,
    title: 'Gold Prices Retreat as Risk Appetite Returns to Markets',
    excerpt: 'The precious metal saw its first weekly decline in over a month as investors rotated into higher-yielding assets.',
    author: 'Emma Thompson',
    category: 'Commodities',
    date: 'April 26, 2025',
    imageUrl: '/images/gold.jpg',
    path: '/markets/gold-prices-retreat'
  },
  {
    id: 9,
    title: 'Oil Prices Surge on Supply Concerns and Increased Summer Demand Forecasts',
    excerpt: 'Crude oil benchmarks posted significant gains as analysts revised summer demand expectations upward amid ongoing supply constraints.',
    author: 'James Williams',
    category: 'Commodities',
    date: 'April 25, 2025',
    imageUrl: '/images/oil.jpg',
    path: '/markets/oil-prices-surge'
  },
  {
    id: 10,
    title: 'Agricultural Commodities Face Volatility as Weather Patterns Shift',
    excerpt: 'Weather-related concerns continue to drive price action in agricultural commodities as key growing regions experience unusual conditions.',
    author: 'David Miller',
    category: 'Commodities',
    date: 'April 24, 2025',
    imageUrl: '/images/agricultural.jpg',
    path: '/markets/agricultural-volatility'
  }
];

// Market analysis articles
const marketAnalysisArticles = [
  {
    id: 11,
    title: 'Market Volatility Index Drops to Three-Year Low: What It Means for Investors',
    excerpt: 'The sharp decline in market fear gauges suggests investor complacency may be reaching concerning levels.',
    author: 'Dr. Lisa Patel',
    role: 'Chief Market Strategist',
    date: 'April 26, 2025',
    path: '/markets/volatility-index-analysis',
    imageUrl: '/images/authors/lisa-patel.jpg'
  },
  {
    id: 12,
    title: 'Technical Analysis: Key Levels to Watch as Markets Test New Highs',
    excerpt: 'A detailed examination of crucial technical indicators as major indices approach record territory.',
    author: 'Richard Wong',
    role: 'Technical Analyst',
    date: 'April 25, 2025',
    path: '/markets/technical-analysis',
    imageUrl: '/images/authors/richard-wong.jpg'
  }
];

// Market data table
const marketData = [
  { index: 'S&P 500', price: '4,582.64', change: '+0.58%', weeklyChange: '+2.12%' },
  { index: 'Nasdaq Composite', price: '14,346.02', change: '+1.12%', weeklyChange: '+3.45%' },
  { index: 'Dow Jones', price: '36,124.56', change: '+0.24%', weeklyChange: '+1.06%' },
  { index: 'Russell 2000', price: '2,085.33', change: '+0.97%', weeklyChange: '+2.78%' },
  { index: 'FTSE 100', price: '7,845.12', change: '+0.33%', weeklyChange: '+1.45%' },
  { index: 'Nikkei 225', price: '36,985.23', change: '+0.66%', weeklyChange: '+2.34%' },
  { index: 'DAX', price: '16,753.67', change: '+0.45%', weeklyChange: '+1.89%' },
  { index: 'Shanghai Composite', price: '3,256.74', change: '-0.12%', weeklyChange: '+0.78%' }
];

// Currency data table
const currencyData = [
  { pair: 'EUR/USD', price: '1.0874', change: '-0.32%', weeklyChange: '-0.88%' },
  { pair: 'USD/JPY', price: '147.25', change: '+0.41%', weeklyChange: '+1.23%' },
  { pair: 'GBP/USD', price: '1.2635', change: '-0.18%', weeklyChange: '-0.56%' },
  { pair: 'USD/CHF', price: '0.8874', change: '+0.23%', weeklyChange: '+0.67%' },
  { pair: 'USD/CAD', price: '1.3576', change: '+0.15%', weeklyChange: '+0.45%' },
  { pair: 'AUD/USD', price: '0.6635', change: '-0.27%', weeklyChange: '-0.78%' }
];

// Commodity data table
const commodityData = [
  { commodity: 'Crude Oil (WTI)', price: '$78.69', change: '+1.25%', weeklyChange: '+3.45%' },
  { commodity: 'Gold', price: '$1,943.70', change: '-0.75%', weeklyChange: '-1.23%' },
  { commodity: 'Silver', price: '$23.45', change: '-0.62%', weeklyChange: '-0.98%' },
  { commodity: 'Natural Gas', price: '$2.87', change: '+2.15%', weeklyChange: '+5.67%' },
  { commodity: 'Copper', price: '$3.95', change: '+0.85%', weeklyChange: '+2.34%' },
  { commodity: 'Wheat', price: '$642.25', change: '-0.45%', weeklyChange: '-1.35%' }
];

const MarketsPage: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 2, pb: 8 }}>
      {/* Market Data Ticker */}
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
          MARKET SNAPSHOT:
        </Typography>
        <Box sx={{ display: 'flex', overflow: 'auto', gap: 3, pb: 1 }}>
          {marketData.slice(0, 5).map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>
                {item.index}
              </Typography>
              <Typography variant="body2" sx={{ mr: 0.5 }}>
                {item.price}
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
                  <IconButton>
                    <BookmarkBorderIcon fontSize="small" />
                  </IconButton>
                  <IconButton>
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

          {/* Stock Market Section */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <ShowChartIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                Stock Markets
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {stockMarketArticles.map((article) => (
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
                        <IconButton size="small">
                          <ShareIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Market Table Section */}
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
                Market Performance
              </Typography>
            </Box>
            
            <TableContainer component={Paper} elevation={0} sx={{ mb: 4, border: '1px solid #e0e0e0' }}>
              <Table sx={{ minWidth: 650 }} aria-label="market data table">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                    <TableCell sx={{ fontWeight: 700 }}>Index</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Daily Change</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Weekly Change</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {marketData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {row.index}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {row.price}
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
                      <TableCell>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: row.weeklyChange.startsWith('+') ? 'success.main' : 'error.main',
                            fontWeight: 500
                          }}
                        >
                          {row.weeklyChange}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          
          {/* Forex Market Section */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CurrencyExchangeIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                Foreign Exchange
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {forexArticles.map((article) => (
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
                        <IconButton size="small">
                          <ShareIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Currency Table */}
          <Box sx={{ mt: 3, mb: 5 }}>
            <TableContainer component={Paper} elevation={0} sx={{ mb: 4, border: '1px solid #e0e0e0' }}>
              <Table aria-label="currency data table">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                    <TableCell sx={{ fontWeight: 700 }}>Currency Pair</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Daily Change</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Weekly Change</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currencyData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {row.pair}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {row.price}
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
                      <TableCell>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: row.weeklyChange.startsWith('+') ? 'success.main' : 'error.main',
                            fontWeight: 500
                          }}
                        >
                          {row.weeklyChange}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        {/* Sidebar - Right Column */}
        <Grid item xs={12} md={4}>
          <Box sx={{ pl: { md: 2 }, borderLeft: { md: '1px solid #e0e0e0' } }}>
            {/* Market Analysis Section */}
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
                Market Analysis
              </Typography>
            </Box>
            
            <Stack spacing={3} sx={{ mb: 4 }}>
              {marketAnalysisArticles.map((article) => (
                <Box key={article.id} sx={{ display: 'flex', gap: 2 }}>
                  {article.imageUrl && (
                    <Box 
                      component="img"
                      src={article.imageUrl || DEFAULT_IMAGE_PLACEHOLDER}
                      alt={article.author}
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      component={Link}
                      to={article.path}
                      sx={{
                        textDecoration: 'none',
                        color: 'text.primary',
                        display: 'block',
                        mb: 1,
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        lineHeight: 1.2,
                        '&:hover': {
                          color: 'secondary.main'
                        }
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, fontSize: '0.9rem' }}>
                      {article.author}, <span style={{ fontStyle: 'italic' }}>{article.role}</span>
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ color: 'text.secondary', mb: 1, fontSize: '0.875rem' }}>
                      {article.excerpt}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      {article.date}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
            
            {/* Commodity Section */}
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AttachMoneyIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                  Commodities
                </Typography>
              </Box>
              
              <TableContainer component={Paper} elevation={0} sx={{ mb: 4, border: '1px solid #e0e0e0' }}>
                <Table size="small" aria-label="commodity data table">
                  <TableHead>
                    <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                      <TableCell sx={{ fontWeight: 700 }}>Commodity</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Price</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Change</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {commodityData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.875rem' }}>
                            {row.commodity}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                            {row.price}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: row.change.startsWith('+') ? 'success.main' : 'error.main',
                              fontWeight: 500,
                              fontSize: '0.875rem'
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
            
            <Stack spacing={2} sx={{ mt: 4 }}>
              {commodityArticles.map((article, index) => (
                <Box key={article.id} sx={{ pb: 2, borderBottom: index < commodityArticles.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
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
            
            {/* Subscribe Box */}
            <Paper elevation={0} sx={{ mt: 4, p: 3, border: '1px solid #e0e0e0', bgcolor: '#f8f8f8' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Premium Market Analysis
              </Typography>
              <Typography variant="body2" paragraph>
                Get unlimited access to expert market analysis, real-time data, and exclusive reports.
              </Typography>
              <Button
                component={Link}
                to="/subscribe"
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mb: 2 }}
              >
                Subscribe for $1/week
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
                Cancel anytime. Subscription renews automatically.
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MarketsPage; 