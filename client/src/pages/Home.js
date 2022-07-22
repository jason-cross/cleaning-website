import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Home = () => {
    return (
      <div className='page' id='home'>
          <HeroSection />
      </div>
    );
  };

export default Home;