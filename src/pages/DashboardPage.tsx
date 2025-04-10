import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Bookmark as BookmarkIcon,
  History as HistoryIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';
import NewsCard from '../components/NewsCard';

// Sample personalized news data
const personalizedNews = [
  {
    id: 1,
    title: 'Your Portfolio Update: Tech Stocks Surge',
    excerpt: 'Your tech investments have shown strong growth this week.',
    category: 'Portfolio',
    date: '2024-03-15',
    imageUrl: 'https://source.unsplash.com/random/800x600?stock-market'
  },
  {
    id: 2,
    title: 'Market Trends You Follow: AI Sector',
    excerpt: 'Latest developments in artificial intelligence companies you track.',
    category: 'Technology',
    date: '2024-03-14',
    imageUrl: 'https://source.unsplash.com/random/800x600?artificial-intelligence'
  },
  {
    id: 3,
    title: 'Economic Indicators You Monitor',
    excerpt: 'Key economic metrics show positive trends in your areas of interest.',
    category: 'Economy',
    date: '2024-03-13',
    imageUrl: 'https://source.unsplash.com/random/800x600?economy'
  }
];

const DashboardPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Your Personalized Dashboard
          </Typography>
          
          <Grid container spacing={3}>
            {personalizedNews.map((article) => (
              <Grid item xs={12} key={article.id}>
                <NewsCard article={article} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText primary="View Portfolio" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <BookmarkIcon />
                </ListItemIcon>
                <ListItemText primary="Saved Articles" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Reading History" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItem>
            </List>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Your Interests
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['Technology', 'Markets', 'Economy', 'Crypto'].map((interest) => (
                <Paper
                  key={interest}
                  sx={{
                    p: 1,
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: 1
                  }}
                >
                  {interest}
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage; 