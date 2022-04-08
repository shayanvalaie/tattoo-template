import React from 'react'
import Box from '@mui/material/Box';




const Hero = ({ title, img }) => {

    return (
        <Box sx={{
            position: 'relative',
            backgroundImage: `url(${img})`,
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center'

        }}>








        </Box>
    )
}

export default Hero