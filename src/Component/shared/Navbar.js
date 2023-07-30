/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../Assets/logo.png'
import profile from '../../Assets/profile.webp'
import '../../style/custom.css'
import Login from '../../userAuth/Login';
import SignUP from '../../userAuth/SignUP';
import GuestModal from './GuestModal';

const Navbar = () => {
    return (
        <div className="navbar bg-white h-20 px-16 border">
              <div className="navbar-start">
                <img className='w-40 h-18' src= {logo} alt="logo" />
              </div>
              <div  onClick={()=>window.guestModal.showModal()} className="navbar-center border border-gray-200 rounded-full hover:shadow-md transition">
                <a className="btn btn-link hover:no-underline no-underline normal-case text-base text-black ">Anywhere</a>
                <span>|</span>
                <a className="btn btn-link hover:no-underline no-underline normal-case text-base text-black">Any Week</a>
                <span>|</span>
                <a className="btn btn-link hover:no-underline no-underline normal-case text-[#5f6068]"> Add Guest
                  <span className=' border border-primary-200 rounded-full hover transition h-8 w-8 bg-[#657bf7]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1.5 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                </a>
              </div>
              <div className="navbar-end">
                  <p className=' mr-4 text-black btn btn-link no-underline normal-case text-base hover:no-underline'>Airbnb your Home</p>
                     <div className="dropdown cursor-pointer container hover:shadow-md transition">
                     <label tabIndex={0} className=" mx-1 mb-2">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-8 mb-2 stroke-current  cursor-pointer squared"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                     </label>
                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-gray-100 rounded-box   w-52">
                       <li><a  onClick={()=>window.login.showModal()}>Login</a></li>
                       <li><a  onClick={()=>window.signUp.showModal()}>Sign Up</a></li>
                     </ul>
                        <button className="mr-3 mt-1">
                         <div className="w-6">
                           <img className='h-6 rounded-3xl' src={profile} alt=''/>
                        </div>
                   </button>
                   </div>
                  <Login/>
                  <SignUP/>
                  <GuestModal/>
              </div>

            </div>
    );
};

export default Navbar;