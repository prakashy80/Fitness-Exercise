import React from 'react';
import { Box, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', sm: "70px" },
            ml: { sm: '50px' }
        }} position="relative" p="20px"
        >
            <Typography color="#FF2625"
                fontSize="26px"
                fontWeight="600"
            >
                Fitness Club
            </Typography>
            <Typography fontWeight={700}
                sx={{
                    fontSize: { lg: "44px", xs: '40px' }
                }}
                mb="23px" mt="30px"
            >
                Sweet, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check out the most effective Exercises
            </Typography>
            <Button variant="contained" color="error" href="#exercises"
                sx={{
                    background: "#FF2625", padding: "10px"
                }}>
                Explore Exercises
            </Button>
            <Typography fontWeight={200} color="#FF2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', sm: "none" }

                }} fontSize="200px"
            >Exercises</Typography>
            <img src={HeroBannerImage} alt='hero-banner' className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner
