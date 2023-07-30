import React from 'react';
import Navbar from '../shared/Navbar';
import Menu from '../Menu';
import Footer from '../shared/Footer'
import HeroSection from './hero/HeroSection';
import Partners from './partners/Partners';


const Home = () => {
    return (
        <>
        <Navbar/>
         <Menu/>
         <HeroSection/>
         <Partners/>
        <Footer/>
        </>
    );
};

export default Home;