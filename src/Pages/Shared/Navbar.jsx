import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scroll = (p)=>{
    window.scroll({
      top: p,
      behavior: 'smooth'
    });
  }
  const navItems = (
    <>
      <li>
        <Link onClick={()=>scroll(0)} to={'/'}  className="btn btn-outline btn-primary my-2  mx-4">Home</Link>
      </li>
      <li>
        <Link onClick={()=>scroll(700)} to={'/'}  className="btn btn-outline btn-primary my-2 mx-4">Skills</Link>
      </li>
      <li>
        <Link onClick={()=>scroll(1250)} to={'/'}   className="btn btn-outline btn-primary my-2 mx-4">Project</Link>
      </li>
      <li>
        <Link onClick={()=>scroll(500)} to={'/'}   className="btn btn-outline btn-primary my-2 mx-4">About Me</Link>
      </li>
      <li>
        <Link  to={'/Blog'}   className="btn btn-outline btn-primary mx-4 my-2 ">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <button className="btn btn-ghost normal-case text-xl">
          Front end Developer
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
