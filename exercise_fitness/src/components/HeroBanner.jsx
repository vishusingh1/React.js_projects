import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from '..//assets/images/banner.png';
import { Link } from 'react-router-dom';


const HeroBanner = () => {
    return (
      <Box sx={{ mt: { lg: '212px', sx: '70px'}, ml: { sm: '50px'}}} position="relative" padding="20px">
        <Typography color= "#FF2625" fontWeight="600" fontSize="26px">
            Fitness club
        </Typography>
        <Typography fontStyle={700} sx={{ fontSize: { lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
            Burn, Sweat <br/> and Repeat
        </Typography>
        <Typography fontSize= "22px" lineHeight= "35px" mb={4}>
            Check out the most effective Exercises
        </Typography>
        <Button variant="contained" color="error" component={Link} to="#Exercise" sx={{ backgroundColor: '#ff2625', padding: '10px'}}> Explore Exercises</Button>


        <Typography fontWeight={600} color="#ff2625" sx={{ opacity: '0.1',display: { lg: 'block', xs: 'none' }}} fontSize= '200px'>
            Exercises
        </Typography>
     
        <img src={HeroBannerImage} alt={HeroBanner} className="hero-banner-img" />

      </Box>
    )
}

export default HeroBanner




