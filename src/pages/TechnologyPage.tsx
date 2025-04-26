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
  Chip,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { Link } from 'react-router-dom';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import MemoryIcon from '@mui/icons-material/Memory';
import ComputerIcon from '@mui/icons-material/Computer';
import DevicesIcon from '@mui/icons-material/Devices';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import CategoryIcon from '@mui/icons-material/Category';

// Default placeholder image URL
const DEFAULT_IMAGE_PLACEHOLDER = "/images/tech-default.jpg";

// Featured tech article
const featuredArticle = {
  id: 1,
  title: 'Quantum Computing Breakthrough Makes Error Correction Practical',
  excerpt: 'Researchers have achieved a significant milestone in quantum computing by demonstrating a new technique that allows for more effective error correction with fewer physical qubits.',
  author: 'Dr. Eleanor Chen',
  category: 'Quantum Computing',
  date: 'April 26, 2025',
  imageUrl: '/images/quantum-computer.jpg',
  path: '/technology/quantum-error-correction'
};

// AI and Machine Learning articles
const aiArticles = [
  {
    id: 2,
    title: 'New AI Model Achieves Human-Level Understanding of Visual Context',
    excerpt: 'A breakthrough in visual processing allows artificial intelligence to interpret and understand complex visual scenes with unprecedented accuracy.',
    author: 'Michael Reeves',
    category: 'Artificial Intelligence',
    date: 'April 26, 2025',
    imageUrl: '/images/ai-visual.jpg',
    path: '/technology/ai-visual-context'
  },
  {
    id: 3,
    title: 'Open Source LLM Released with Improved Reasoning Capabilities',
    excerpt: 'The latest open-source large language model demonstrates significant improvements in logical reasoning and mathematical problem-solving.',
    author: 'Sarah Johnson',
    category: 'Machine Learning',
    date: 'April 25, 2025',
    imageUrl: '/images/llm-model.jpg',
    path: '/technology/open-source-llm'
  },
  {
    id: 4,
    title: 'AI Ethics Consortium Proposes Global Standards for Deployment',
    excerpt: 'A coalition of leading AI organizations has drafted a comprehensive framework for responsible AI deployment across diverse applications.',
    author: 'David Williams',
    category: 'AI Ethics',
    date: 'April 25, 2025',
    imageUrl: '/images/ai-ethics.jpg',
    path: '/technology/ai-ethics-standards'
  }
];

// Hardware and devices articles
const hardwareArticles = [
  {
    id: 5,
    title: 'Next-Generation Neural Processors Promise 5x Performance Improvement',
    excerpt: 'The latest neural processing units incorporate innovative architecture designs that dramatically increase AI workload efficiency.',
    author: 'Jennifer Lee',
    category: 'Hardware',
    date: 'April 26, 2025',
    imageUrl: '/images/neural-processor.jpg',
    path: '/technology/neural-processors'
  },
  {
    id: 6,
    title: 'Foldable Displays Enter Mainstream with Third-Generation Devices',
    excerpt: 'The newest wave of foldable devices features more durable displays, reduced creasing, and enhanced multitasking capabilities.',
    author: 'Thomas Rodriguez',
    category: 'Devices',
    date: 'April 25, 2025',
    imageUrl: '/images/foldable-display.jpg',
    path: '/technology/foldable-displays'
  },
  {
    id: 7,
    title: 'Revolutionary Battery Technology Extends Device Life by 70%',
    excerpt: 'A new solid-state battery design offers dramatically improved energy density while reducing charging time and enhancing safety.',
    author: 'Lisa Martinez',
    category: 'Hardware',
    date: 'April 24, 2025',
    imageUrl: '/images/battery-tech.jpg',
    path: '/technology/battery-technology'
  }
];

// Software and cloud articles
const softwareArticles = [
  {
    id: 8,
    title: 'Major Operating System Update Integrates AI Assistant System-Wide',
    excerpt: 'The latest OS release features deep AI integration across all core applications, enabling context-aware assistance throughout the user experience.',
    author: 'Kevin Brown',
    category: 'Software',
    date: 'April 26, 2025',
    imageUrl: '/images/os-update.jpg',
    path: '/technology/os-ai-integration'
  },
  {
    id: 9,
    title: 'Cloud Providers Launch Carbon-Negative Computing Options',
    excerpt: 'Leading cloud services now offer carbon-negative compute instances that actively remove more carbon than they produce.',
    author: 'Emily Wilson',
    category: 'Cloud Computing',
    date: 'April 25, 2025',
    imageUrl: '/images/green-cloud.jpg',
    path: '/technology/carbon-negative-cloud'
  },
  {
    id: 10,
    title: 'Distributed Database Technology Achieves New Performance Milestone',
    excerpt: 'A new distributed database architecture demonstrates unprecedented scaling capabilities while maintaining strict consistency guarantees.',
    author: 'Ryan Thompson',
    category: 'Databases',
    date: 'April 24, 2025',
    imageUrl: '/images/distributed-db.jpg',
    path: '/technology/distributed-database'
  }
];

// Expert opinions articles
const expertArticles = [
  {
    id: 11,
    title: 'The Future of Edge Computing in a 6G World',
    excerpt: 'As 6G standards begin to take shape, edge computing will undergo dramatic evolution to handle new connectivity paradigms.',
    author: 'Dr. Maya Patel',
    role: 'Chief Technology Officer, EdgeTech Solutions',
    date: 'April 26, 2025',
    path: '/technology/edge-computing-6g',
    imageUrl: '/images/authors/maya-patel.jpg'
  },
  {
    id: 12,
    title: 'Navigating the Evolving Cybersecurity Landscape in 2025',
    excerpt: 'With AI-powered threats becoming increasingly sophisticated, defensive strategies must evolve accordingly.',
    author: 'Alex Mercer',
    role: 'Security Researcher',
    date: 'April 25, 2025',
    path: '/technology/cybersecurity-landscape',
    imageUrl: '/images/authors/alex-mercer.jpg'
  }
];

// Trending tech topics
const trendingTopics = [
  { topic: "Quantum Computing", icon: <MemoryIcon color="secondary" /> },
  { topic: "GenAI Applications", icon: <SmartToyIcon color="secondary" /> },
  { topic: "6G Networks", icon: <RssFeedIcon color="secondary" /> },
  { topic: "Sustainable Tech", icon: <CloudIcon color="secondary" /> },
  { topic: "Cybersecurity", icon: <SecurityIcon color="secondary" /> },
  { topic: "Edge Computing", icon: <DevicesIcon color="secondary" /> }
];

// Upcoming tech events
const techEvents = [
  {
    name: "Global AI Summit",
    date: "May 15-17, 2025",
    location: "San Francisco, CA",
    description: "The premier conference exploring advances in artificial intelligence and machine learning.",
    link: "/events/global-ai-summit"
  },
  {
    name: "Quantum Technology Expo",
    date: "June 8-10, 2025",
    location: "Berlin, Germany",
    description: "Showcasing the latest developments in quantum computing, sensing, and communication.",
    link: "/events/quantum-tech-expo"
  },
  {
    name: "Cybersecurity World Conference",
    date: "July 22-24, 2025",
    location: "Singapore",
    description: "Gathering security experts to address emerging threats in the digital landscape.",
    link: "/events/cybersecurity-world"
  },
  {
    name: "Future of Cloud Computing Forum",
    date: "August 5-7, 2025",
    location: "Tokyo, Japan",
    description: "Exploring next-generation cloud technologies and architectural approaches.",
    link: "/events/cloud-computing-forum"
  }
];

const TechnologyPage: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 2, pb: 8 }}>
      {/* Trending Tech Topics Bar */}
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
          TRENDING:
        </Typography>
        <Box sx={{ display: 'flex', overflow: 'auto', gap: 3, alignItems: 'center', pb: 1 }}>
          {trendingTopics.map((item, index) => (
            <Box 
              key={index} 
              component={Link} 
              to={`/technology/topics/${item.topic.toLowerCase().replace(/\s+/g, '-')}`}
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
              <Box sx={{ mr: 0.5 }}>{item.icon}</Box>
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

          {/* AI and Machine Learning Section */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SmartToyIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                AI & Machine Learning
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {aiArticles.map((article) => (
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

          {/* Hardware and Devices Section */}
          <Box sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <ComputerIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                Hardware & Devices
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {hardwareArticles.map((article) => (
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
          
          {/* Software and Cloud Section */}
          <Box sx={{ mt: 5, mb: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CodeIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                Software & Cloud
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {softwareArticles.map((article) => (
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

        {/* Sidebar - Right Column */}
        <Grid item xs={12} md={4}>
          <Box sx={{ pl: { md: 2 }, borderLeft: { md: '1px solid #e0e0e0' } }}>
            {/* Expert Opinion Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <MemoryIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                Expert Insights
              </Typography>
            </Box>
            
            <Stack spacing={3} sx={{ mb: 4 }}>
              {expertArticles.map((article) => (
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
            
            {/* Technology Events Section */}
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <DevicesIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                  Upcoming Tech Events
                </Typography>
              </Box>
              
              <List sx={{ width: '100%', bgcolor: 'background.paper', mb: 3 }}>
                {techEvents.map((event, index) => (
                  <React.Fragment key={index}>
                    <ListItem 
                      alignItems="flex-start" 
                      component={Link}
                      to={event.link}
                      sx={{
                        px: 0, 
                        pt: 2, 
                        pb: index === techEvents.length - 1 ? 2 : 1,
                        textDecoration: 'none',
                        color: 'text.primary',
                        '&:hover': {
                          bgcolor: '#f9f9f9'
                        }
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              fontWeight: 600, 
                              color: 'text.primary',
                              '&:hover': {
                                color: 'secondary.main'
                              }
                            }}
                          >
                            {event.name}
                          </Typography>
                        }
                        secondary={
                          <Box sx={{ mt: 1 }}>
                            <Typography 
                              variant="body2" 
                              color="secondary.main"
                              sx={{ display: 'block', fontWeight: 500, mb: 0.5 }}
                            >
                              {event.date} | {event.location}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              color="text.secondary"
                              sx={{ display: 'block' }}
                            >
                              {event.description}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < techEvents.length - 1 && (
                      <Divider component="li" />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Box>
            
            {/* Technology Newsletter */}
            <Paper elevation={0} sx={{ mt: 4, p: 3, border: '1px solid #e0e0e0', bgcolor: '#f8f8f8' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Technology Newsletter
              </Typography>
              <Typography variant="body2" paragraph>
                Stay ahead of the curve with our weekly technology insights. Get the latest developments in AI, quantum computing, and more.
              </Typography>
              <Button
                component={Link}
                to="/subscribe/tech-newsletter"
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mb: 2 }}
              >
                Subscribe Free
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
                No spam, unsubscribe anytime.
              </Typography>
            </Paper>
            
            {/* Tech Categories */}
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CategoryIcon sx={{ color: 'secondary.main', mr: 1 }} />
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
                  Technology Categories
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {[
                  "Artificial Intelligence", "Quantum Computing", "Robotics", 
                  "Virtual Reality", "Blockchain", "IoT Devices", 
                  "5G Technology", "Semiconductors", "Biotechnology", 
                  "Cloud Computing", "Edge Computing", "Cybersecurity"
                ].map((category, index) => (
                  <Chip 
                    key={index} 
                    label={category} 
                    component={Link} 
                    to={`/technology/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
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
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TechnologyPage; 