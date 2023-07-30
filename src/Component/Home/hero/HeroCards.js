import React from 'react';
import img1 from '../../../Assets/download (2).jpeg'
import img2 from '../../../Assets/download (3).jpeg'
import img3 from '../../../Assets/download (2).jpeg'
import img4 from '../../../Assets/download (4).jpeg'


const HeroCards = () => {
    return (
        <span className='flex gap-12 px-6 mt-4'>
            <div className="card w-96 bg-[#ffffff]shadow-sm border">
                <figure><img className=' w-96 h-72' src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#332c2c]">
                        Noteworthy technology
                    </h2>
                    <p className="text-[#565151]">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-start mt-2">
                    <div className=" font-bold text-primary">Min $25 - $32 / Day</div> 
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-[#ffffff] shadow-sm border">
            <figure><img className=' w-96 h-72'  src={img2} alt="Shoes" /></figure>
            <div className="card-body">
                 <h2 className="card-title text-[#332c2c]">
                     Noteworthy technology
                 </h2>
                <p className="text-[#565151]">If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start mt-2">
                <div className=" font-bold text-primary">Min $25 - $32 / Day</div>  
                </div>
            </div>
        </div>
        <div className="card w-90 bg-[#ffffff] shadow-sm border">
            <figure><img className=' w-96 h-72'  src={img3} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#332c2c]">
                  Noteworthy technology
                </h2>
                <p className="text-[#565151]">If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start mt-2">
                <div className=" font-bold text-primary">Min $25 - $32 / Day</div> 
                </div>
            </div>
        </div>
        <div className="card w-96 bg-[#ffffff] shadow-sm border">
            <figure><img className=' w-96 h-72'  src={img4} alt="Shoes" /></figure>
            <div className="card-body">
                  <h2 className="card-title text-[#332c2c]">
                     Noteworthy technology
                   </h2>
                <p className="text-[#565151]">If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start mt-2">
                <div className=" font-bold text-primary">Min $25 - $32 / Day</div> 
                </div>
            </div>
        </div>
        </span>
    );
};

export default HeroCards;