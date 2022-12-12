import React from 'react';
import About from '../About/About';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const HomeLayout = () => {
    return (
        <div>
             <Home></Home>
             <About></About>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default HomeLayout;