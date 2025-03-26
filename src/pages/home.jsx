import React, { useState, useEffect } from 'react'
import aboutme from '../Assets/me.jpg'
//3rd party imports
import { motion } from "framer-motion";

const Home = () => {
    const [text, setText] = useState("");
    const message = "Amankwah Amoako Kwaku";
    const speed = 100; // typing speed in ms

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < message.length) {
                const nextChar = message.charAt(i);
                setText((prev) => prev + nextChar);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, []);

    const handleScrollBehaviourForName = (content) => {
        return <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {content}
        </motion.div>
    }

    return (
        <div id='home' className='grid hero'>
            <div className='col-12 md:col-6 lg:col-6 hero-left'>
                <h2>Hello, I am</h2>
                <h1 className='name-style'>{handleScrollBehaviourForName(text)}</h1>
                <h2>Web Developer</h2>
                <a
                    href="https://drive.google.com/uc?export=download&id=1q2--LvFtL9ehEj6IlSXWOY1cfhVZ1jxp"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <button style={{ padding: "10px 20px", cursor: "pointer", margin: "2rem 0 0", borderRadius: "5px", backgroundColor: "#f1f1f1", color: "#000" }}>
                        Download Resume
                    </button>
                </a>
            </div>
            <div className='col-12 md:col-6 lg:col-6 hero-right'>
                {/* <img src={aboutme} alt="Amoako Amankwah" /> */}
                <img
                    src={aboutme}
                    alt="Amoako Amankwah"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', marginTop:'1rem' }}
                />
            </div>


        </div >
    )
}

export default Home;