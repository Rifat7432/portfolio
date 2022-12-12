import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import Home from '../Pages/Home/Home';
import Skills from '../Pages/Skills/Skills';
import Projects from '../Pages/Projects/Projects';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
            
        </div>
    );
};

export default Main;