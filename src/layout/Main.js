import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

const Main = () => {
    return (
        <div className='flex '>
            <div className='fixed top-0 left-0 '>
                <Sidebar />
            </div>      
            <div className='flex-1  md:ml-64'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;