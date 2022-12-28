import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-hot-toast';

const MyTask = () => {

    const [tasks, setTasks] = useState([]);
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    setTasks(data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [update])

    const handleEdit = () => {

    }
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
        <div className='md:flex w-full h-screen bg-gray-100 justify-center items-center'>
            <div className='md:w-2/3 md:h-96 mt-14 w-full'>
                {
                    tasks.map(task => {
                        return <div className='flex justify-between items-center p-5 bg-white my-3 rounded'>
                            <span className='w-1/3 md:w-1/2'>{task.task}</span>
                            <span onClick={() => handleEdit(task._id)} className='  cursor-pointer'>
                                <EditIcon />
                            </span>
                            <span onClick={() => handleDelete(task._id)} className='   cursor-pointer'>
                                <DeleteIcon />
                            </span>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default MyTask;