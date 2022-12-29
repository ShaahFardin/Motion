import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-hot-toast';

const CompletedTask = () => {

    const [completedTasks, setCompletedTask] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/task/completed`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCompletedTask(data.data)
                }
            }).catch(error => console.log(error))
    }, [update])


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Deleted");
                    setUpdate(!update)
                } else {
                    toast.error("Something went wrong!");
                    console.log(data.error);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='md:flex w-full h-screen bg-[#FAFAFA] justify-center items-center'>
            <div className='md:w-2/3 md:h-96 w-full h-screen '>
                {
                    completedTasks.map(completed => {
                        return <div className='flex justify-between items-center p-5 bg-white my-3 rounded'>
                            <span className='line-through  w-1/3 md:w-1/3'>{completed.task}</span>
                            <span >Add Comment</span>
                            <span
                                onClick={() => handleDelete(completed._id)}
                                className=' text-slate-600 hover:text-red-500  cursor-pointer'>
                                <DeleteIcon />
                            </span>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default CompletedTask;