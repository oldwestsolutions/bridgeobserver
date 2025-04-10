import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, Typography, Container } from '@mui/material';
import { theme } from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MarketsPage from './pages/MarketsPage';
import EconomyPage from './pages/EconomyPage';
import TechnologyPage from './pages/TechnologyPage';
import OpinionPage from './pages/OpinionPage';
import LoginPage from './pages/LoginPage';
import SubscribePage from './pages/SubscribePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/economy" element={<EconomyPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/opinion" element={<OpinionPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route
              path="*"
              element={
                <Container>
                  <Typography variant="h4" component="h1" gutterBottom>
                    Page Not Found
                  </Typography>
                  <Typography>
                    The page you are looking for does not exist.
                  </Typography>
                </Container>
              }
            />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
