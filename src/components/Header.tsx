import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem } from '../types';
import { saveScrollPosition, restoreScrollPosition } from '../utils/scrollPosition';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Markets', path: '/markets' },
  { label: 'Economy', path: '/economy' },
  { label: 'Technology', path: '/technology' },
  { label: 'Opinion', path: '/opinion' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Fixed date for April 26, 2025 (Saturday) as requested
  const formattedDate = "Saturday, April 26, 2025";

  // Handle navigation with scroll position preservation
  const handleNavigation = (path: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    // Save current scroll position
    saveScrollPosition(location.pathname);
    // Navigate to new route
    navigate(path);
    // Restore scroll position for that route (if exists)
    restoreScrollPosition(path);
  };

  // Effect to restore scroll position on component mount
  useEffect(() => {
    restoreScrollPosition(location.pathname);
  }, [location.pathname]);

  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={0} 
      sx={{ 
        borderBottom: '1px solid #e0e0e0', 
        bgcolor: '#fff'
      }}
    >
      {/* Top bar with date and login */}
      <Container maxWidth="xl">
        <Toolbar sx={{ minHeight: '36px', padding: '4px 0' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', marginRight: 'auto' }}>
            {formattedDate}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f1f1f1', borderRadius: 1, px: 1 }}>
              <InputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                sx={{ fontSize: '0.875rem', py: 0.5 }}
              />
              <IconButton size="small" sx={{ p: '4px' }}>
                <SearchIcon fontSize="small" />
              </IconButton>
            </Box>
            
            <Button
              component={Link}
              to="/subscribe"
              variant="contained"
              color="secondary"
              size="small"
              sx={{ textTransform: 'none', fontSize: '0.75rem' }}
            >
              Subscribe
            </Button>
            
            <Button
              component={Link}
              to="/login"
              variant="text"
              color="inherit"
              size="small"
              sx={{ textTransform: 'none', fontSize: '0.75rem' }}
            >
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>
      
      {/* Masthead with title */}
      <Container maxWidth="xl" sx={{ bgcolor: 'white' }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          pt: 2, 
          pb: 1,
          borderBottom: '2px solid #000'
        }}>
          <Typography
            variant="h1"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontFamily: '"Chomsky", "Cheltenham", "Georgia", serif',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              textAlign: 'center'
            }}
          >
            The Bridge Observer
          </Typography>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              mt: 0.5, 
              color: 'text.secondary',
              fontStyle: 'italic',
              fontSize: '0.875rem'
            }}
          >
            Your Trusted Source for Financial Intelligence
          </Typography>
        </Box>
      </Container>
      
      {/* Navigation */}
      <Container maxWidth="xl" sx={{ bgcolor: 'white' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          borderBottom: '1px solid #e0e0e0' 
        }}>
          {isMobile ? (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', py: 1 }}>
              <Button
                id="menu-button"
                aria-controls={open ? 'sections-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleMenuClick}
                startIcon={<MenuIcon />}
                sx={{ textTransform: 'none' }}
              >
                Sections
              </Button>
              <Menu
                id="sections-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'menu-button',
                }}
              >
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.path} 
                    component="a"
                    href={item.path}
                    onClick={(e) => {
                      handleNavigation(item.path)(e as React.MouseEvent);
                      handleMenuClose();
                    }}
                    selected={location.pathname === item.path}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component="a"
                  href={item.path}
                  onClick={handleNavigation(item.path)}
                  color="inherit"
                  sx={{ 
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    borderBottom: location.pathname === item.path ? '2px solid #000' : 'none',
                    borderRadius: 0,
                    '&:hover': {
                      bgcolor: 'transparent',
                      borderBottom: '2px solid #888',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header; 