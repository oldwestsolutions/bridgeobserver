import React from 'react';
import { Box, Container, Typography, Link, Grid, Divider, List, ListItem } from '@mui/material';
import { Twitter, LinkedIn, Facebook, Email, Smartphone } from '@mui/icons-material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#f7f7f7',
        color: 'text.primary',
        pt: 6,
        pb: 4,
        mt: 'auto',
        borderTop: '2px solid #000',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontFamily: '"Cheltenham", "Georgia", "Times New Roman", serif',
                fontWeight: 700,
                borderBottom: '1px solid #ccc',
                pb: 1,
                mb: 2
              }}
            >
              The Bridge Observer
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Delivering incisive financial journalism and market analysis since 2022.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Link
                href="#"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                <LinkedIn />
              </Link>
              <Link
                href="#"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                <Facebook />
              </Link>
              <Link
                href="#"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                <Email />
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontFamily: '"Cheltenham", "Georgia", "Times New Roman", serif',
                fontWeight: 700,
                borderBottom: '1px solid #ccc',
                pb: 1,
                mb: 2
              }}
            >
              News Sections
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <List dense disablePadding>
                  {['Home', 'Markets', 'Economy', 'Technology'].map((item) => (
                    <ListItem disablePadding sx={{ mb: 1 }} key={item}>
                      <Link
                        href="#"
                        sx={{
                          color: 'text.primary',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          '&:hover': { color: 'secondary.main' },
                        }}
                      >
                        {item}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <List dense disablePadding>
                  {['Opinion', 'Analysis', 'Podcasts', 'Videos'].map((item) => (
                    <ListItem disablePadding sx={{ mb: 1 }} key={item}>
                      <Link
                        href="#"
                        sx={{
                          color: 'text.primary',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          '&:hover': { color: 'secondary.main' },
                        }}
                      >
                        {item}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontFamily: '"Cheltenham", "Georgia", "Times New Roman", serif',
                fontWeight: 700,
                borderBottom: '1px solid #ccc',
                pb: 1,
                mb: 2
              }}
            >
              Company
            </Typography>
            <List dense disablePadding>
              {['About Us', 'Contact', 'Careers', 'Advertise', 'Press', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <ListItem disablePadding sx={{ mb: 1 }} key={item}>
                  <Link
                    href="#"
                    sx={{
                      color: 'text.primary',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      '&:hover': { color: 'secondary.main' },
                    }}
                  >
                    {item}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontFamily: '"Cheltenham", "Georgia", "Times New Roman", serif',
                fontWeight: 700,
                borderBottom: '1px solid #ccc',
                pb: 1,
                mb: 2
              }}
            >
              Subscribe
            </Typography>
            <Typography variant="body2" paragraph>
              Get unlimited access to The Bridge Observer's award-winning financial news and analysis.
            </Typography>
            <Box>
              <Link
                href="/subscribe"
                sx={{
                  display: 'inline-block',
                  color: 'white',
                  bgcolor: 'secondary.main',
                  px: 3,
                  py: 1,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  mb: 2,
                  '&:hover': { bgcolor: 'secondary.dark' },
                }}
              >
                Subscribe Now
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Smartphone fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                (555) 123-4567
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Email fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                info@bridgeobserver.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: '#ccc' }} />
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' } }}>
          <Typography variant="caption" color="text.secondary">
            © {currentYear} The Bridge Observer. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, md: 0 } }}>
            {['Terms of Use', 'Privacy', 'Cookies', 'Accessibility', 'Do Not Sell My Information'].map((item) => (
              <Typography variant="caption" color="text.secondary" key={item}>
                <Link
                  href="#"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {item}
                </Link>
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 