import React from 'react';
import Navbar from '../shared/Navbar';
import Menu from '../Menu';
import Footer from '../shared/Footer'
import HeroSection from './hero/HeroSection';


const Home = () => {
    return (
        <>
        <Navbar/>
         <Menu/>
         <HeroSection/>
        <Footer/>
        </>
    );
};

export default Home;