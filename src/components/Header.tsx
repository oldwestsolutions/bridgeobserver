import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Markets', path: '/markets' },
  { label: 'Economy', path: '/economy' },
  { label: 'Technology', path: '/technology' },
  { label: 'Opinion', path: '/opinion' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto' }}>
        <Typography
          variant="h1"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          BridgeObserver
        </Typography>

        {isHomePage && (
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{ textTransform: 'none' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            component={Link}
            to="/subscribe"
            variant="contained"
            color="secondary"
            sx={{ textTransform: 'none' }}
          >
            Subscribe
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            color="secondary"
            sx={{ textTransform: 'none' }}
          >
            Log In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 