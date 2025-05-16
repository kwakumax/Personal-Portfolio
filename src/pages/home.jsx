import React, { useState, useEffect } from 'react'
import mygib from '../Assets/myGibliNoBG.png'
import '../styles/hero.css'
//3rd party imports
import { motion } from "framer-motion";
import { Button } from 'primereact/button';

const Home = () => {
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const message = "Amankwah Amoako";
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {content}
        </motion.div>
    }

    const fileId = "1i9MHuskRVXI7iJo3_gveQlHwHTtF3nLX";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const handleDownload = () => {
        setLoading(true);

        // Create a temporary invisible link and click it
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "document.pdf"; // optional, filename hint
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Hide spinner after 3 seconds (adjust if needed)
        setTimeout(() => setLoading(false), 3000);
    };

    return (
        <div className='flex flex-wrap justify-content-center align-items-center' id='home' style={{ height: "100vh" }}>
            <div className='hero-left'>
                <h2>Hello, I am</h2>
                <h1 className='name-style'>{handleScrollBehaviourForName(text)}</h1>
                <h2>Web Developer</h2>
                <Button
                    onClick={handleDownload}
                    disabled={loading}
                    loading={loading}
                    label={!loading && "Download Resume"}
                    style={{ padding: "10px 20px", cursor: "pointer", margin: "2rem 0 0", borderRadius: "5px", backgroundColor: "#f1f1f1", color: "#000" }}>
                    {!loading && <i className='pi pi-download ml-2' />}
                </Button>
            </div>
            <div className=''>
                <img
                    src={mygib}
                    alt="Amoako Amankwah"
                    className='w-full max-w-md md:max-w-lg lg:max-w-xl'
                />
            </div>
        </div >
    )
}

export default Home;