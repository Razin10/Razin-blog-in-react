import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <nav>
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => handleLinkClick('home')}
            className={activeLink === 'home' ? 'active' : ''}
          >
            home
          </a>
        </li>
        {/* অন্যান্য লিঙ্কগুলিও একইভাবে তৈরি করুন */}
      </ul>
    </nav>
  );
}

function Section({ id, children }) {
  return (
    <section id={id} style={{ display: activeLink === id ? 'block' : 'none' }}>
      {children}
    </section>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Section id="home">hi</Section>
      <Section id="about">i</Section>
      <Section id="blog">am</Section>
      <Section id="project">razin</Section>
    </div>
  );
}

export default App;
