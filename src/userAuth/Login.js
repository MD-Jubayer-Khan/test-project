import React from 'react';

const Login = () => {
    return (
        <>
            {/* You can open the modal using ID.showModal() method */}
        
            <dialog id="login" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Login</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
              </form>
            </dialog>  
            
        </>
    );
};

export default Login;