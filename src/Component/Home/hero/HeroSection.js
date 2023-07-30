import React from 'react';
import HeroCards from './HeroCards';

const HeroSection = () => {
    return (
        <div className=" px-20 mt-16 ml-4 bg-[#ffffff]">
              <h1 className="text-3xl text-black font-bold">Get inspiration for your next stay</h1>
              <p className="py-4 pl-1 text-[#848181]"> You can find places and stay with hotels and home-stays ranked by travelers. What fun could we have <br /> more than having roommate with similar interest</p>

            <HeroCards/>
        </div>
    );
};

export default HeroSection;