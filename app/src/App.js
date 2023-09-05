import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// sign up and login
// import Main from "./components/Main";
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


function App() {
  const user = localStorage.getItem("token");

  return (
    <div className='App'>

      <Navbar />
      <Routes>
        {/* // * when you change Home to Mian in the user && it will change the page */}
        {/* //? check what this is doing */}
        {user && <Route path="/" element={<Home />} />}
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/" element={<Navigate replace to="/login" />} />


        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/indipro' element={<Indipro />} />
        <Route path='/checkout' element={<Checkout />} />
        {/* <Route path='/signUp' element={<SignUp />} /> */}
        <Route path='/Admin' element={<AdminPage />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
