import { Box, Container, Grid, Typography } from '@mui/material'
import { CallMade, Phone, GasMeter, TaxiAlert, FlightLand, Calculate} from '@mui/icons-material'
import React from 'react'

const WhyChooseUs = () => {
  const featureList = [
    {
      title: 'No call-out fee',
      description: 'At Maxi Taxi Perth, we don’t charge a call-out fee (save $1.50)',
      icon: <Phone />,
    },
    {
      title: 'Meter or fixed fare',
      description: 'Choose meter fare or opt for a set price to avoid surprises',
      icon: <GasMeter />,
    },
    {
      title: 'Standard taxi rates',
      description: 'We provide premium services at standard taxi rates (normal tariffs)',
      icon: <TaxiAlert />,
    },
    {
      title: 'Direct communication',
      description: 'Speak directly to the taxi driver, not just some phone operator',
      icon: <CallMade />,
    },
    {
      title: 'Arrival alerts',
      description: 'Get a text message when we’re 10 minutes away (free service)',
      icon: <FlightLand />,
    },
    {
      title: 'Online taxi fare calculator',
      description: 'Estimate your taxi fare with our online calculator',
      icon: <Calculate />,
    }
  ]

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Why choose us?
      </Typography>
      <hr style={{ width: '50px', height: '3px', margin: 'auto', marginTop: '16px', marginBottom: '32px', backgroundColor: '#f50057', border: 'none' }} />
      <Typography variant='body2' sx={{ textAlign: 'center', mb: 4 }}>
        When you’re looking for a good, reliable taxi service in Greater Perth, there are plenty of good reasons to choose us. We’ll highlight a few of those reasons below, but for the full list of benefits of using our services, go to Why choose Maxi Taxi Perth.
      </Typography>
      <Grid container spacing={2}>
        {featureList.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 2, border: '1px solid #e0e0e0' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '56px', height: '56px', mb: 1, bgcolor: '#f50057', color: '#fff' }}>
                {feature.icon}
              </Box>
              <Typography variant='h6' sx={{ mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant='body2' sx={{ mb: 1 }}>
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default WhyChooseUs
