import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const handleBookNowClick = () => {
        const element = document.getElementById('formId');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleHomeClick = () => {
        const element = document.getElementById('home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box id="home" sx={{ flexGrow: 1 }}>
            <AppBar sx={{
                bgcolor: "transparent",
                color : "black",
                boxShadow : "none",
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Taxi Booking
                    </Typography>
                    <Button variant='outlined' sx={{fontWeight : "bold"}} >Call Now : 00123456789</Button>
                    <Button onClick={handleHomeClick} color="inherit">Home</Button>
                    <Button onClick={handleBookNowClick} color="inherit">Book Now</Button>
                </Toolbar>
            </AppBar>
            <Toolbar /> {/* Add this to prevent content from being hidden under the Navbar */}
        </Box>
    );
}

export default Navbar;
