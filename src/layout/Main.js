import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

const Main = () => {
    return (
        <div className='flex'>
            <div>
                <Sidebar />
            </div>      
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;