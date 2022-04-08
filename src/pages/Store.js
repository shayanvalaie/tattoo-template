import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container';

const Store = ({ pageTransitions }) => {
    return (

        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransitions}>
            <Container maxWidth="sm">
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5,

                    marginTop: '100px'

                }}>
                    <Typography className="small-text" sx={{
                        color: 'white'
                    }} variant="h5">
                        Coming soon
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Box>
            </Container>
        </motion.div>
    )
}

export default Store