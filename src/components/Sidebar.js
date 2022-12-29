import React, { useEffect, useState } from 'react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { AddTaskOutlined, Logout } from '@mui/icons-material';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    const toggleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    

    return (
        <div >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='block md:hidden rounded-sm  px-3 py-1 '>{isOpen ? <MenuIcon /> : <CancelIcon />}
            </button>
            <aside className={`bg-white dark:bg-slate-900 dark:text-white w-64 md:w-80 h-screen top-0 relative
                 left-0 z-0 overflow-y-auto shadow-xl ${isOpen ? 'hidden' : 'md:block'}`}>
                <div className='absolute mt-5 inset-x-0
                 top-0 flex justify-center items-center'>
                    <img src='https://i.ibb.co/C8VQVnr/user.jpg'
                        className='w-16 h-14 object-cover rounded-xl' alt='' />

                </div>

                <div className='p-5 mt-28 '>
                    
                    <Link onClick={toggleDarkMode} className='border-b-[1px] transition
                     duration-300 ease-in-out hover:bg-gray-100
                      dark:hover:bg-slate-800
                      my-5 p-2 flex justify-start items-center cursor-pointer'>
                       {theme === 'light' ? <DarkModeIcon className='mx-4'/>: <LightModeIcon className='mx-4'/>}
                        <button >{theme === 'light' ? "Dark": "Light"}</button>
                    </Link>
                    <Link to='/' className='border-b-[1px] transition
                     duration-300 ease-in-out hover:bg-gray-100
                      dark:hover:bg-slate-800
                      my-5 p-2 flex justify-start items-center cursor-pointer'>
                        <AddBoxOutlinedIcon className='mx-4' />
                        <span>Add Task</span>
                    </Link>
                    <Link to='/myTask'
                        className='border-b-[1px] transition duration-300
                      ease-in-out hover:bg-gray-100 dark:hover:bg-slate-800
                       my-5 p-2 flex 
                      justify-start items-center cursor-pointer'>
                        <AddTaskOutlined className='mx-4' />
                        <span>My Task</span>
                    </Link>
                    <Link to='/completedTask'
                        className='border-b-[1px] transition duration-300 
                     ease-in-out hover:bg-gray-100 dark:hover:bg-slate-800
                      my-5 p-2 flex justify-start items-center cursor-pointer'>
                        <TaskOutlinedIcon className='mx-4' />
                        <span>Completed Task</span>
                    </Link>

                    <Link to='/register'
                        className='border-b-[1px] transition duration-300
                      ease-in-out hover:bg-gray-100 dark:hover:bg-slate-800
                       my-5 p-2 flex justify-start items-center cursor-pointer'>
                        <PersonAddIcon className='mx-4' />
                        <span>Sign Up</span>
                    </Link>
                    <Link to='/login'
                        className='border-b-[1px] transition duration-300 
                     ease-in-out hover:bg-gray-100 dark:hover:bg-slate-800
                      my-5 p-2 flex justify-start items-center cursor-pointer'>
                        <LoginIcon className='mx-4' />
                        <span>login</span>
                    </Link>
                    <Link to='/completedTask'
                        className='border-b-[1px] transition duration-300 ease-in-out
                     hover:bg-gray-100 dark:hover:bg-slate-800 my-5 p-2 flex justify-start items-center 
                     cursor-pointer'>
                        <LogoutIcon className='mx-4' />
                        <span>Logout</span>
                    </Link>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;