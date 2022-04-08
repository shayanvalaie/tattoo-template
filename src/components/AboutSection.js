import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import '../css/about.css'

const AboutSection = () => {
    return (
        <div className="bg-color">
            <Grid sx={{
                padding: 5
            }} container spacing={5}>

                <Grid item xs={12} sm={6}>
                    <Box sx={{
                        background: "#0e1111",
                        padding: 5,

                    }}>
                        <Box sx={{

                        }}>


                            <Typography sx={{ color: '#F9F9F9' }} variant="h4">
                                Artist Name

                            </Typography>
                            <Typography sx={{ color: '#F9F9F9' }} variant="p">

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas in corporis a nulla aspernatur aliquam earum repellendus blanditiis perspiciatis voluptatibus delectus architecto at sed dignissimos, voluptatum expedita! Magni, doloribus saepe!

                            </Typography>
                        </Box>
                    </Box>


                </Grid>


                <Grid item xs={12} sm={6}>

                    <img style={{
                        width: '100%'
                    }} src="https://images.unsplash.com/photo-1605647533135-51b5906087d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                </Grid>

            </Grid>
        </div >
    )
}

export default AboutSection