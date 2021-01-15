import React, { useState } from 'react'
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyles from './globalStyles';
import SliderData from './data/SliderData'
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';

function App() {

  const [isOpen, setIsOpen] = useState(false)


  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (

    <>

      <GlobalStyles />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection />

    </>

  );
}

export default App;
