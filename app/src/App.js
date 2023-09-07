import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// sign up and login
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";

// imported pages 
import Home from './pages/home';
import Product from './pages/product'
import Indipro from './pages/indipro';

import Checkout from './pages/checkout';
// import SignUp from './pages/signUp';
import AdminPage from './pages/admin';

// imported compenents 
import Navbar from './components/navbar';

import Footer from './components/footer'
// import Acordian from './components/acordian'

// toast notification
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopContextProvider from './context/shopContext';


function App() {
  const user = localStorage.getItem("token");

  return (
    <div className='App'>

      <Navbar />

      {/* according to video the routes must be wrapped in the context provider */}
      {/* // todo this is part of video (not needed if you dont use the video method) */}
      {/* all of the routes inside the provider wil have access to the value we put in the provider */}
      <ShopContextProvider>

        <Routes>
          {/* // * when you change Home to Mian in the user && it will change the page */}
          {/* //? check what this is doing */}
          {user && <Route path="/" element={<Main />} />}
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/" element={<Navigate replace to="/login" />} />


          <Route path='/Home' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Indipro' element={<Indipro />} />
          <Route path='/Checkout' element={<Checkout />} />

          {/* // * added new cart with folder route */}
          {/* <Route path='/Cart' element={<Cart/>}/> */}

          {/* <Route path='/signUp' element={<SignUp />} /> */}
          <Route path='/Admin' element={<AdminPage />} />
        </Routes>

      </ShopContextProvider>

      <Footer />

    </div>
  );
}

export default App;
