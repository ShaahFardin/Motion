import React, { useState } from 'react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { AddTaskOutlined, Logout } from '@mui/icons-material';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='block md:hidden rounded-sm  px-3 py-1 '>{isOpen ? <MenuIcon /> : <CancelIcon />}
            </button>
            <aside className={`bg-white w-64 md:w-80 h-screen top-0 relative
                 left-0 z-0 overflow-y-auto shadow-xl ${isOpen ? 'hidden' : 'md:block'}`}>
                <div className='absolute mt-5 inset-x-0 top-0 flex justify-center items-center'>
                    <img src='https://i.ibb.co/C8VQVnr/user.jpg'
                     className='w-16 h-14 object-cover rounded-xl' alt='' />
                </div>
                <div className='p-5 mt-28 '>
                    <Link to='' className='border-b-[1px] transition duration-300 ease-in-out hover:bg-gray-100 my-5 p-2 flex justify-start items-center cursor-pointer'>
                        <AddBoxOutlinedIcon className='mx-5' />
                        <span>Add Task</span>
                    </Link>
                    <Link to='/myTask' className='border-b-[1px] transition duration-300 ease-in-out hover:bg-gray-100 my-5 p-2 flex justify-start items-center cursor-pointer'>
                        <AddTaskOutlined className='mx-5' />
                        <span>My Task</span>
                    </Link>
                    <Link to='/completedTask' className='border-b-[1px] transition duration-300 ease-in-out hover:bg-gray-100 my-5 p-2 flex justify-start items-center cursor-pointer'>
                        <TaskOutlinedIcon className='mx-5' />
                        <span>Completed Task</span>
                    </Link>
                    <Link to='/completedTask' className='border-b-[1px] transition duration-300 ease-in-out hover:bg-gray-100 my-5 p-2 flex justify-start items-center cursor-pointer'>
                        <LogoutIcon className='mx-5' />
                        <span>Logout</span>
                    </Link>

                </div>
                {/* <div className='absolute inset-x-0 bottom-0'>
                    <button
                        className='w-full inline-block text-center whitespace-nowrap  
                      bg-teal-900 text-white  py-2 text-lg border-teal-500'><LogoutIcon /> LOGOUT
                    </button>
                </div> */}
            </aside>
        </div>
    );
};

export default Sidebar;