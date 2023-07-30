import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import {GrFacebook} from 'react-icons/gr'
const Login = () => {
    return (
        <>
            {/* You can open the modal using ID.showModal() method */}
        
            <dialog id="login" className="modal">
              <form method="dialog" className="modal-box bg-[#ffffff]">
                <div className='border-b-2'>
                    <span className='ml-52 text-black font-bold'> Login</span>
                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> ✕</button>
                </div>

                <div className="pt-8">
                     <h1 className="text-xl text-black font-bold text-center">Welcome Back</h1>
                         <p className="py-2 pl-1 text-[#848181] text-center"> Login to your account</p>
                    <div className='pb-8'>
                     <input type="email" placeholder="Email Address" className="input input-bordered w-full mt-4 bg-[#ffffff]"/> 
                       <input type="password" placeholder="Password" className="input input-bordered w-full mt-10 bg-[#ffffff]"/>
                    </div>
                         <h4 className='btn w-full mt-4 bg-[#554bea] hover:bg-[#5470f9] normal-case text-[#ffffff]'>continue</h4>  
                         <span className='divider'></span>
                         <h4 className='btn w-full mt-4 normal-case text-black btn-outline pr-32'> <FcGoogle className='h-6 w-6 mr-28'/> continue with Google</h4>  
                         <h4 className='btn w-full mt-4 normal-case text-black btn-outline pr-28'> <GrFacebook className='h-6 w-6 mr-28 text-[#554bea] '/> continue with Facebook</h4>  

                         <p className=' mt-4 text-center'>Didn't have an account? <span className='text-black'>Create an Account</span> </p>   
                </div>

              </form>
            </dialog>  
            
        </>
    );
};

export default Login;