import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CompletedTask = () => {
    return (
        <div className='md:flex w-full h-screen bg-[#FAFAFA] justify-center items-center'>
            <div className='md:w-2/3 md:h-96 w-full h-screen '>
                <div className='flex justify-between items-center p-5 bg-white my-3 rounded'>
                    <span className='line-through md:text-xl '>Completed Task</span>
                    <span >Add Comment</span>
                    <span className='text-slate-600 hover:text-blue-500 cursor-pointer'>
                        <EditIcon />
                    </span>
                    <span className=' text-slate-600 hover:text-red-500  cursor-pointer'>
                        <DeleteIcon />
                    </span>
                </div>
                <div className='flex justify-between items-center p-5 bg-white my-3 rounded'>
                    <span className='line-through md:text-xl '>Completed Task</span>
                    <span >Add Comment</span>
                    <span className='  cursor-pointer'>
                        <EditIcon />
                    </span>
                    <span className='   cursor-pointer'>
                        <DeleteIcon />
                    </span>
                </div>
                <div className='flex justify-between items-center p-5 bg-white my-3 rounded'>
                    <span className='line-through md:text-xl '>Task Name</span>
                    <span>Add Comment</span>
                    <span className='  cursor-pointer'>
                        <EditIcon />
                    </span>
                    <span className='   cursor-pointer'>
                        <DeleteIcon />
                    </span>
                </div>
               
            </div>
        </div>
    );
};

export default CompletedTask;