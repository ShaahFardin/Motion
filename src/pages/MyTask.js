import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MyTask = () => {
    return (
        <div className='md:flex w-full h-screen bg-[#FAFAFA] justify-center items-center'>
            <div className='md:w-2/3 md:h-96 w-full h-screen '>
                <div className='flex justify-between items-center p-5 bg-white my-3 rounded'>
                    <span>Task Name</span>
                    <span className='  cursor-pointer'>
                        <EditIcon />
                    </span>
                    <span className='   cursor-pointer'>
                        <DeleteIcon />
                    </span>
                </div>
                <div className='flex justify-between p-5 bg-gray-100 my-3 rounded'>
                    <span>Task Name</span>
                    <span>Update</span>
                    <span>delete</span>
                </div>
            </div>
        </div>
    );
};

export default MyTask;