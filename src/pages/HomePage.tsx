import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Link as MuiLink,
  Button,
  Stack,
  IconButton,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';
import InsightsIcon from '@mui/icons-material/Insights';

// Default placeholder image URL
const DEFAULT_IMAGE_PLACEHOLDER = "/images/finance-default.jpg";

// Sample news data
const featuredArticle = {
  id: 1,
  title: 'Federal Reserve Signals Caution on Rate Cuts as Inflation Concerns Persist',
  excerpt: 'Central bank officials indicated that they would need to see more consistent signs that inflation is cooling before reducing interest rates.',
  author: 'James Williams',
  category: 'Economy',
  date: 'April 26, 2025',
  imageUrl: '/images/federal-reserve.jpg',
  path: '/economy/federal-reserve-signals-caution'
};

const mainArticles = [
  {
    id: 2,
    title: 'Tech Stocks Rally Amid Optimism Over Artificial Intelligence Advancements',
    excerpt: 'Major technology companies saw significant gains as investors responded positively to new developments in AI capabilities.',
    author: 'Sarah Chen',
    category: 'Markets',
    date: 'April 26, 2025',
    imageUrl: '/images/tech-stocks.jpg',
    path: '/markets/tech-stocks-rally'
  },
  {
    id: 3,
    title: 'Global Supply Chain Issues Show Signs of Easing, Report Finds',
    excerpt: 'Recent data indicates that bottlenecks in international shipping and production are beginning to resolve after two years of disruption.',
    author: 'Michael Rodriguez',
    category: 'Economy',
    date: 'April 25, 2025',
    imageUrl: '/images/supply-chain.jpg',
    path: '/economy/supply-chain-easing'
  },
  {
    id: 4,
    title: 'Startup Valuations Face Pressure as Venture Capital Funding Slows',
    excerpt: 'Early-stage companies are adjusting expectations amid a more conservative investment climate in the private markets.',
    author: 'Emma Thompson',
    category: 'Technology',
    date: 'April 25, 2025',
    imageUrl: '/images/startup-funding.jpg',
    path: '/technology/startup-valuations'
  }
];

const sidebarArticles = [
  {
    id: 5,
    title: 'Housing Market Shows Signs of Cooling as Mortgage Rates Rise',
    excerpt: 'Rising interest rates are beginning to impact home sales across major metropolitan areas.',
    category: 'Economy',
    date: 'April 24, 2025',
    path: '/economy/housing-market',
    imageUrl: '/images/housing-market.jpg'
  },
  {
    id: 6,
    title: 'Dollar Strengthens Against Major Currencies on Treasury Yield Increases',
    excerpt: 'The greenback hit multi-week highs as U.S. government bond yields continue to climb.',
    category: 'Markets',
    date: 'April 24, 2025',
    path: '/markets/dollar-strengthens',
    imageUrl: '/images/dollar-currency.jpg'
  },
  {
    id: 7,
    title: 'European Central Bank Holds Rates Steady Despite Growth Concerns',
    excerpt: 'ECB officials maintained their hawkish stance on inflation despite increasing economic headwinds.',
    category: 'Economy',
    date: 'April 23, 2025',
    path: '/economy/ecb-holds-rates',
    imageUrl: '/images/ecb-building.jpg'
  },
  {
    id: 8,
    title: 'Cybersecurity Spending Expected to Reach Record Levels This Year',
    excerpt: 'Companies are increasing investments in digital protection amid rising threats.',
    category: 'Technology',
    date: 'April 23, 2025',
    path: '/technology/cybersecurity-spending',
    imageUrl: '/images/cybersecurity.jpg'
  }
];

const opinionArticles = [
  {
    id: 9,
    title: 'The Hidden Costs of Inflation on Retirement Planning',
    author: 'Robert Jenkins',
    role: 'Senior Economic Analyst',
    excerpt: 'How current inflation trends are eroding savings and what investors can do to protect their nest eggs.',
    date: 'April 26, 2025',
    path: '/opinion/inflation-retirement-planning',
    imageUrl: '/images/authors/robert-jenkins.jpg'
  },
  {
    id: 10,
    title: 'Why Technological Innovation Remains Our Best Economic Hope',
    author: 'Dr. Lisa Patel',
    role: 'Technology Economist',
    excerpt: 'Looking beyond short-term market fluctuations to the transformative potential of emerging technologies.',
    date: 'April 25, 2025',
    path: '/opinion/technology-economic-hope',
    imageUrl: '/images/authors/lisa-patel.jpg'
  }
];

// New breaking news section
const breakingNews = [
  {
    id: 11,
    title: 'Breaking: Major Merger Announced Between Banking Giants',
    excerpt: 'Two of the largest financial institutions have agreed to a $65 billion merger, creating the largest banking entity in North America.',
    author: 'Financial Team',
    category: 'Breaking',
    date: 'April 26, 2025 - 10:45 AM',
    imageUrl: '/images/bank-merger.jpg',
    path: '/breaking/bank-merger'
  }
];

// Markets section with more detailed articles
const marketArticles = [
  {
    id: 12,
    title: 'Commodities Surge as Supply Concerns Mount in Key Markets',
    excerpt: 'Oil, wheat, and precious metals are seeing significant price increases amid geopolitical tensions and supply disruptions.',
    author: 'Thomas Grant',
    category: 'Markets',
    date: 'April 26, 2025',
    imageUrl: '/images/commodities.jpg',
    path: '/markets/commodities-surge'
  },
  {
    id: 13,
    title: 'Asian Markets Rally Following Positive Economic Data from China',
    excerpt: 'Stock indices across Asia posted strong gains after China reported better-than-expected GDP growth for the first quarter.',
    author: 'Jennifer Lee',
    category: 'Markets',
    date: 'April 25, 2025',
    imageUrl: '/images/asian-markets.jpg',
    path: '/markets/asian-markets-rally'
  },
  {
    id: 14,
    title: 'Cryptocurrency Markets Stabilize After Regulatory Framework Announced',
    excerpt: 'Bitcoin and other digital assets found renewed stability after international regulators agreed on a coordinated approach.',
    author: 'Mark Davidson',
    category: 'Markets',
    date: 'April 24, 2025',
    imageUrl: '/images/cryptocurrency.jpg',
    path: '/markets/crypto-stabilize'
  }
];

// Technology section with more articles
const technologyArticles = [
  {
    id: 15,
    title: 'Quantum Computing Breakthrough Could Revolutionize Financial Modeling',
    excerpt: 'Scientists have achieved a significant advance in quantum computing that may transform risk assessment in financial institutions.',
    author: 'Dr. Alan Parker',
    category: 'Technology',
    date: 'April 25, 2025',
    imageUrl: '/images/quantum-computing.jpg',
    path: '/technology/quantum-finance'
  },
  {
    id: 16,
    title: 'Fintech Startups Seeing Record Investment Despite Overall VC Slowdown',
    excerpt: 'Financial technology remains a bright spot for investors, with payment solutions and blockchain applications leading the way.',
    author: 'Sophia Martinez',
    category: 'Technology',
    date: 'April 24, 2025',
    imageUrl: '/images/fintech.jpg',
    path: '/technology/fintech-investment'
  },
  {
    id: 17,
    title: 'AI Trading Algorithms Now Handle 70% of Market Volume, Study Finds',
    excerpt: 'The dominance of artificial intelligence in trading continues to grow, raising questions about market efficiency and regulation.',
    author: 'Richard Wong',
    category: 'Technology',
    date: 'April 23, 2025',
    imageUrl: '/images/ai-trading.jpg',
    path: '/technology/ai-trading'
  }
];

const marketData = [
  { name: 'S&P 500', value: '4,582.64', change: '+0.58%' },
  { name: 'Nasdaq', value: '14,346.02', change: '+1.12%' },
  { name: 'Dow Jones', value: '36,124.56', change: '+0.24%' },
  { name: '10-Year Treasury', value: '4.25%', change: '+0.03' },
  { name: 'EUR/USD', value: '1.0874', change: '-0.32%' },
  { name: 'Crude Oil', value: '$78.69', change: '+1.25%' },
  { name: 'Gold', value: '$1,943.70', change: '-0.75%' },
  { name: 'Bitcoin', value: '$52,478.35', change: '+3.25%' }
];

const HomePage: React.FC = () => {
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
          {marketData.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>
                {item.name}
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

      {/* Breaking News Section */}
      <Box sx={{ mb: 4 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 2, 
            bgcolor: '#fff9f9', 
            border: '1px solid #e57373',
            borderLeft: '4px solid #c62828'
          }}
        >
          {breakingNews.map((article) => (
            <Grid container spacing={2} key={article.id}>
              <Grid item xs={12} sm={4} md={3}>
                <Box
                  component="img"
                  src={article.imageUrl || DEFAULT_IMAGE_PLACEHOLDER}
                  alt={article.title}
                  sx={{
                    width: '100%',
                    height: { xs: 200, sm: 160 },
                    objectFit: 'cover',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip 
                    label="BREAKING NEWS" 
                    size="small" 
                    sx={{ 
                      bgcolor: '#c62828', 
                      color: 'white',
                      fontWeight: 'bold',
                      mr: 2
                    }} 
                  />
                  <Typography variant="caption" color="text.secondary">
                    {article.date}
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  component={Link}
                  to={article.path}
                  sx={{
                    textDecoration: 'none',
                    color: 'text.primary',
                    display: 'block',
                    fontWeight: 700,
                    mb: 1,
                    '&:hover': {
                      color: 'secondary.main'
                    }
                  }}
                >
                  {article.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {article.excerpt}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Paper>
      </Box>

      <Grid container spacing={3}>
        {/* Left Column - Main Content */}
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

          {/* Main Article Grid */}
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 2, 
              borderBottom: '2px solid #000',
              pb: 1
            }}
          >
            Latest News
          </Typography>
          
          <Grid container spacing={3}>
            {mainArticles.map((article) => (
              <Grid item xs={12} sm={6} md={4} key={article.id}>
                <Card elevation={0} sx={{ border: 'none', height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="160"
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
                    <Typography 
                      variant="caption" 
                      color="text.secondary"
                      sx={{ fontStyle: 'italic' }}
                    >
                      {article.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          {/* Markets Section */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TimelineIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                Markets & Investing
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {marketArticles.map((article) => (
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
          
          {/* Technology Section */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <InsightsIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
              {technologyArticles.map((article) => (
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
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Box sx={{ pl: { md: 2 }, borderLeft: { md: '1px solid #e0e0e0' } }}>
            {/* Opinion Section */}
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
                Opinion & Analysis
              </Typography>
            </Box>
            
            <Stack spacing={3} sx={{ mb: 4 }}>
              {opinionArticles.map((article) => (
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
            
            <Divider sx={{ my: 3 }} />
            
            {/* Editor's Picks */}
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 2, 
                borderBottom: '2px solid #000',
                pb: 1
              }}
            >
              Editor's Picks
            </Typography>
            
            <Stack spacing={2}>
              {sidebarArticles.map((article) => (
                <Box key={article.id} sx={{ pb: 2, borderBottom: '1px solid #e0e0e0' }}>
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
                Get Full Digital Access
              </Typography>
              <Typography variant="body2" paragraph>
                Enjoy unlimited access to our award-winning financial journalism and exclusive market insights.
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

export default HomePage; 