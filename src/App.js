import React from 'react';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './userAuth/Login';
import SignUP from './userAuth/SignUP';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signUp' element={<SignUP/>}></Route>
      </Routes>
    </>
  );
}

export default App;
