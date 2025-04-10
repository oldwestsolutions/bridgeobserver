import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Grid,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
  Link as MuiLink
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const subscriptionPlans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$9.99',
    period: 'month',
    features: [
      'Access to all articles',
      'Daily market updates',
      'Basic newsletter',
      'Ad-free experience'
    ]
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '$99.99',
    period: 'year',
    features: [
      'Everything in Monthly plan',
      'Premium newsletter',
      'Exclusive content',
      'Save 16%'
    ]
  }
];

const SubscribePage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // TODO: Implement actual subscription logic
      navigate('/');
    } catch (err) {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Choose Your Subscription Plan
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Get unlimited access to premium content and exclusive features
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl component="fieldset" sx={{ width: '100%' }}>
              <FormLabel component="legend">Select Plan</FormLabel>
              <RadioGroup
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                sx={{ mt: 2 }}
              >
                {subscriptionPlans.map((plan) => (
                  <Paper
                    key={plan.id}
                    elevation={selectedPlan === plan.id ? 3 : 1}
                    sx={{
                      p: 2,
                      mb: 2,
                      cursor: 'pointer',
                      border: selectedPlan === plan.id ? '2px solid' : 'none',
                      borderColor: 'primary.main'
                    }}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <FormControlLabel
                      value={plan.id}
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography variant="h6">{plan.name}</Typography>
                          <Typography variant="h4" color="primary">
                            {plan.price}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            per {plan.period}
                          </Typography>
                          <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                            {plan.features.map((feature, index) => (
                              <Typography
                                key={index}
                                component="li"
                                variant="body2"
                                sx={{ mb: 1 }}
                              >
                                {feature}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      }
                      sx={{ width: '100%', m: 0 }}
                    />
                  </Paper>
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Create Your Account
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Subscribe Now
                </Button>
                <Typography variant="body2" color="text.secondary" align="center">
                  Already have an account?{' '}
                  <MuiLink component={Link} to="/login" variant="body2">
                    Sign in
                  </MuiLink>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SubscribePage; 