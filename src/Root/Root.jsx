import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../Login/Login';

const Root = () => {
    return (
        <div>
         
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;