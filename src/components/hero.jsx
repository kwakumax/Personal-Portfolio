import React from 'react'
import Projects from '../pages/projects'
import About from '../pages/about'
import Contact from '../pages/contact'
import Home from '../pages/home'
import '../styles/hero.css'
//3rd party imports
import { motion } from "framer-motion";


const Hero = () => {
 
    const handleOtherScrollBehaviour = (content) => {
        return <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // trigger when 50% visible
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            {content}
        </motion.div>
    }

    return (<div>
        {handleOtherScrollBehaviour(<Home />)}
        {handleOtherScrollBehaviour(<Projects />)}
        {handleOtherScrollBehaviour(<About />)}
        {handleOtherScrollBehaviour(<Contact />)}
    </div>)
}
export default Hero;