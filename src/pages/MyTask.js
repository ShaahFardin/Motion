import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { IconButton, Tooltip } from '@mui/material';

const MyTask = () => {

    const [tasks, setTasks] = useState([]);
    const [update, setUpdate] = useState(false);
    const [check, setCheck] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://motion-server.vercel.app/tasks')
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    setTasks(data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [update, check])

    const handleEdit = (id) => {
        navigate(`/tasks/edit/${id}`)
    }
    const handleDelete = (id) => {
        fetch(`https://motion-server.vercel.app/tasks/${id}`, {
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


    const handleComplete = id => {

        console.log("clicked", id);

        const completed = {
            completed: true
        }

        fetch(`https://motion-server.vercel.app/task/completed/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(completed)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Task completed");
                    setCheck(!check)
                } else {
                    toast.error("Something went wrong!");
                    console.log(data);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='md:flex dark:bg-slate-800 w-full h-screen bg-gray-100 justify-center items-center'>
            <div className='md:w-2/3 md:h-96  w-full'>
                {
                    tasks.map(task => {
                        return <div className={`flex justify-between dark:bg-slate-900
                        dark:text-white
                         items-center p-5 bg-white my-3 rounded ${task.completed && "line-through"}`}>
                            <span className={`${task.completed && "hidden"}`} >
                                <input
                                    type='checkbox'
                                    name='checkbox' onClick={() => handleComplete(task._id)} />
                            </span>
                            <Tooltip title='Task Name'>
                                <span className={`w-1/3 md:w-1/2 `}>{task.task}</span>
                            </Tooltip>
                            <span onClick={() => handleEdit(task._id)} className='cursor-pointer'>
                                <Tooltip title="Edit task">
                                    <IconButton>
                                        <EditIcon className=' dark:text-white' />
                                    </IconButton>
                                </Tooltip>
                            </span>
                            <span onClick={() => handleDelete(task._id)} className='   cursor-pointer'>

                                <Tooltip title="Delete task">
                                    <IconButton>
                                        <DeleteIcon className=' dark:text-white' />
                                    </IconButton>
                                </Tooltip>
                            </span>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default MyTask;