import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import TaskIcon from '@mui/icons-material/Task';
import { toast } from 'react-hot-toast';

const EditTask = () => {

    const router = useParams();
    const { id } = router;
    const navigate = useNavigate();

    const [task, setTask] = useState({});
    const [update, setUpdate] = useState(false);


    useEffect(() => {
        fetch(`https://motion-server.vercel.app/tasks/${id}`)
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    setTask(data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    console.log(task);

    const handleUpdateTask = e => {
        e.preventDefault();
        const task = {
            task: e.target.task.value,
            img: e.target.image.value,
        }
        fetch(`https://motion-server.vercel.app/task/edit/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type':"application/json"
            },
            body: JSON.stringify(task)
        })
        .then( res => res.json())
        .then( data => {
            if(data.success){
                toast.success("Task Updated");
                navigate('/myTask')
            }else{
                toast.error('Could not update')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='w-full bg-gray-100 h-screen md:flex justify-center items-center dark:bg-slate-800'>
            <div className='md:w-2/3 md:h-80 mt-20 md:mt-0 bg-white w-full h-screen '>
                <form onSubmit={handleUpdateTask} class="h-full dark:bg-slate-900 px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <input
                            class=" dark:bg-slate-800 dark:text-white appearance-none border-b-[1px]   w-full
                             py-2 px-3 text-gray-700 leading-tight focus:outline-none
                              focus:shadow-outline mb-5"

                            id="username"
                            type="text"
                            name='task'

                            defaultValue={task.task} />
                    </div>
                    <div class="mb-6">

                        <input class="appearance-none border-b-[1px] dark:bg-slate-800 dark:text-white  
                        w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
                         focus:shadow-outline"
                            id="image" name='image' type="text" value={task.img} />
                    </div>
                    <div class="mb-6">
                        <img src={task.img} alt='' className='w-32 object-cover rounded-md '/>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-600 text-white items-center
                         font-semibold py-2 px-4 rounded-md focus:outline-none 
                         focus:shadow-outline" type="submit">
                            <TaskIcon /> Update Task
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default EditTask;