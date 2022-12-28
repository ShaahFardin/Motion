import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const myTasks = ({task}) => {
    return (
        <div className='flex justify-between items-center p-5 bg-white my-3 rounded'>
            <span>{task.name}</span>
            <span className='  cursor-pointer'>
                <EditIcon />
            </span>
            <span className='   cursor-pointer'>
                <DeleteIcon />
            </span>
        </div>
    );
};

export default myTasks;