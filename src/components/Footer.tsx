import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { Twitter, LinkedIn, Facebook } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About BridgeObserver
            </Typography>
            <Typography variant="body2">
              Your trusted source for financial news and analysis.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              {['About Us', 'Contact', 'Careers', 'Advertise'].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': { color: 'secondary.main' },
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                <LinkedIn />
              </Link>
              <Link
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                <Facebook />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 4,
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © 2024 BridgeObserver. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 