import React from 'react';
import {NavLink} from 'react-router-dom';
import'./Nav.css'
import { BarsIcon } from '@heroicons/react/24/solid';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
            
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>

            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <NavLink to='home'  className={({ isActive }) =>
              isActive ? "active" : undefined
            } className='mr-4'>Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink
            to="topics"
            className={({ isActive }) =>
              isActive ? "active" : undefined
            } className='mr-4'
          >
            Topics
          </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
            to="statistics"
            className={({ isActive }) =>
              isActive ? "active" : undefined
            }className='mr-4'
          >
            Statistics
          </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
            to="blog"
            className={({ isActive }) =>
              isActive ? "active" : undefined
            }
          >
            Blog
          </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}