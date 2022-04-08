
import React from 'react'
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Hero from '../components/Hero'
import img from '../images/PremiumAesthetic/work-hero.jpg'
import '../css/work.css'







const Work = ({ pageTransitions }) => {



    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransitions}>





            <Box sx={{


            }} >
                <Hero img={img} />






            </Box>
        </motion.div >
    )
}

export default Work


