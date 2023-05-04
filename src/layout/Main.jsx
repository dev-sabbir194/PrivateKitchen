import React from 'react';
import './Main.css'
import NavBar from '../pages/Shared/Navbar/NavBar';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
      <div className="home-body">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Main;