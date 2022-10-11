import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../components/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;