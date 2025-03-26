import React, { useState } from 'react'
import '../styles/App.css'
import 'primeflex/primeflex.css';
import Header from './header';
import Footer from './footer';
import Hero from './hero';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <Header />
      </header>

      <main className="content">
        <Hero />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

