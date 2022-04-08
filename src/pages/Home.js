import React from 'react'
import "../css/home.css"
import { motion } from 'framer-motion';
import Hero from '../components/Hero'
import img from '../images/PremiumAesthetic/home-hero.png'






const Home = ({ pageTransitions }) => {

    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransitions}>

            <Hero img={img} />






        </motion.div >



    )
}

export default Home