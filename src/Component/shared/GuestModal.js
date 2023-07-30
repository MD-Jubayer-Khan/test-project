import React from 'react';
import img from '../../Assets/map.png'

const GuestModal = () => {
    return (
        <>
        {/* You can open the modal using ID.showModal() method */}
    
        <dialog id="guestModal" className="modal">
          <form method="dialog" className="modal-box bg-[#ffffff] h-full">
             <div className='border-b-2 pb-4'>
                    <span className='ml-48 text-black font-bold'> Filters</span>
                     <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-2"> ✕</button>
             </div>
                <div className="pt-8">
              <h1 className="text-xl text-black font-bold">Where do you wanna go?</h1>
              <p className="py-2 pl-1 text-[#848181]"> find the perfect location!</p>
              <div className='pb-6 border-b-2'>
                <input type="text" placeholder="Anywhere" className="input input-bordered w-full mt-4 bg-[#ffffff]"/>
              </div>

              <img src={img}alt="" className='py-8 w-full'/>
              <h4 className='btn w-full mt-4 bg-[#554bea] hover:bg-[#5470f9] normal-case'>Search</h4>
              
        </div>
          </form>
        </dialog>  
        
    </>
    );
};

export default GuestModal;