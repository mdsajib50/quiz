import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import'./Nav.css'

const Nav = () => {
    return (
        <div className='w-full bg-cyan-800 p-4 text-end text-xl text-white'>
    
            <NavLink to='home'  className={({ isActive }) =>
              isActive ? "active" : undefined
            } className='mr-4'>Home</NavLink>

            <NavLink
            to="topics"
            className={({ isActive }) =>
              isActive ? "active" : undefined
            } className='mr-4'
          >
            Topics
          </NavLink>

            <NavLink
            to="statistics"
            className={({ isActive }) =>
              isActive ? "active" : undefined
            }className='mr-4'
          >
            Statistics
          </NavLink>

            <NavLink
            to="blog"
            className={({ isActive }) =>
              isActive ? "active" : undefined
            }
          >
            Blog
          </NavLink>
        </div>
    );
};

export default Nav;