import React from 'react'
import Box from '@mui/material/Box';
import UseAnimations from 'react-useanimations';
import facebook from 'react-useanimations/lib/facebook'
import twitter from 'react-useanimations/lib/twitter'
import instagram from 'react-useanimations/lib/instagram'
import { Typography } from '@mui/material';


const Footer = () => {
    return (
        <Box sx={{
            padding: 3,
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: "#020202"
        }}>

            <Box>
                <Typography variant="h6">LOGO</Typography>
            </Box>


            <Box sx={{ marginTop: 1 }}>
                <Typography sx={{ fontSize: "10px" }} variant="body2">COPYRIGHT 2022. ALL RIGHTS RESERVED.</Typography>
            </Box>

            <Box sx={{ display: 'flex' }}>

                <UseAnimations size={30} animation={facebook} fillColor="white" strokeColor="white" />
                <UseAnimations size={30} animation={instagram} fillColor="white" strokeColor="white" />
                <UseAnimations size={30} animation={twitter} fillColor="white" strokeColor="white" />

            </Box>

        </Box >
    )
}

export default Footer