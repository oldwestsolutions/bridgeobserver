import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: string;
  features: string[];
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 9.99,
    interval: 'month',
    features: [
      'Unlimited access to all articles',
      'Real-time market updates',
      'Premium research reports',
      'Monthly market analysis',
    ],
  },
  {
    id: 'yearly',
    name: 'Yearly Plan',
    price: 99.99,
    interval: 'year',
    features: [
      'All Monthly Plan features',
      'Save 16% compared to monthly',
      'Early access to special reports',
      'Exclusive webinars',
    ],
  },
];

const SubscribePage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Handle successful subscription
      console.log('Subscription successful', { selectedPlan, formData });
    } catch (err) {
      setError('Failed to process subscription');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} sx={{ py: 4 }}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Subscribe to Bridge Observer
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Choose Your Plan
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Subscription Options</FormLabel>
              <RadioGroup
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
              >
                {subscriptionPlans.map((plan) => (
                  <Paper key={plan.id} sx={{ p: 2, mb: 2 }}>
                    <FormControlLabel
                      value={plan.id}
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography variant="h6">{plan.name}</Typography>
                          <Typography variant="h5" color="primary">
                            ${plan.price}/{plan.interval}
                          </Typography>
                          <Box component="ul" sx={{ mt: 2 }}>
                            {plan.features.map((feature, index) => (
                              <Typography
                                component="li"
                                key={index}
                                sx={{ mb: 1 }}
                              >
                                {feature}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      }
                    />
                  </Paper>
                ))}
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Create Your Account
            </Typography>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Subscribe Now'}
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" align="center">
                    Already have an account?{' '}
                    <Button component={RouterLink} to="/login">
                      Sign in
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SubscribePage; 