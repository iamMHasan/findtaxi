import { useState } from 'react'
import Navbar from './component/NavBar'
import { Box, Container } from '@mui/material'
import Hero from './component/Hero'
import Form from './component/Form'
import WhyChooseUs from './component/WhyChooseUs'

function App() {

  return (
    <Box>
      <Container>
        <Navbar />
        <Hero/>
        <Form/>
        <WhyChooseUs/>
      </Container>
    </Box>
  )
}

export default App
