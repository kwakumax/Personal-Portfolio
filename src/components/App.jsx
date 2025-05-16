import React, { useEffect } from 'react'
import 'primeicons/primeicons.css';
import '../styles/App.css'
import 'primeflex/primeflex.css';
// import { Toaster } from 'sonner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './header';
import Footer from './footer';
// import Hero from './hero';
import Projects from '../pages/projects';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <div className="app-wrapper">
      {/* <Toaster richColors position="top-right" /> */}
      <div className="header">
        <Header />
      </div>

      <main className="content">
        {/* <Hero /> */}
        <div data-aos="zoom-out-right">
          <Home />
        </div>
        {/* <div data-aos="flip-left"> */}
          <Projects />
        {/* </div> */}
        <About />
        <Contact />
      </main>

      <footer className="footer mb-0">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

