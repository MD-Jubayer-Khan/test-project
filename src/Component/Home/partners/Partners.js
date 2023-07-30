import React, { useEffect, useState } from 'react';
import Partner from './Partner';
import fakeData from '../../../fakeData/partners.json'

const Partners = () => {
    const [partners, setPartners] = useState([]);

    useEffect(()=>{
        setPartners(fakeData)
    },[])

    return (
        <div className=" px-20 mt-16 ml-4 bg-[#ffffff]">
              <h1 className="text-3xl text-black font-bold">Get partners for your next stay</h1>
              <p className="py-4 pl-1 text-[#848181]"> You can find places and stay with hotels and home-stays ranked by travelers. What fun could we have <br /> more than having roommate with similar interest</p>

              <div className=' flex gap-8 px-6 mt-4 pb-36'>
                {
                    partners.map((partner, index)=>(
                        <Partner
                        key={index}
                        partner={partner}/>                     
                    ))
                }
                </div>

        </div>
    );
};

export default Partners;