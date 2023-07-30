import React from 'react';
import { GiFlowerStar } from 'react-icons/gi';

const Partner = ({partner}) => {
    const {img, name, yearGender} = partner;
    return (
        <div className="card w-96 bg-[#ffffff] border shadow-sm">
          <figure><img src={img}className='w-full h-72' alt="Shoes" /></figure>
          <div className="card-body">
            <div>
                <h2 className="card-title text-[#332c2c] text-lg">
                     {name} <GiFlowerStar className='text-primary'></GiFlowerStar>
                </h2>
                    <p className='text-black'>{yearGender}</p>
            </div>
            <p className='text-[#685f5f]'>If a dog chews shoes whose shoes does he choose? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet reiciendis vel.</p>
            <div className="card-actions justify-start">
              <div className="text-black text-sm font-bold">Looking Near: Bristol, Bath & London</div> 
            </div>
          </div>
        </div> 
    )
};

export default Partner;<h1>hello from partner</h1>