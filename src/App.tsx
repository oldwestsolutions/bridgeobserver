import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/economy" element={<EconomyPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/opinion" element={<OpinionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
