import React, { useEffect, useState } from 'react';
import TaskIcon from '@mui/icons-material/Task';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-hot-toast';

const AddComment = () => {

    const router = useParams();
    const { id } = router;

    const [task, setTask] = useState({});
    // const [update, setUpdate] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/tasks/${id}`)
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    setTask(data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [ id])

    const handleUpdateTask = e => {

        const comment = {
            comment: e.target.comment.value
        }
        e.preventDefault()
        fetch(`http://localhost:5000/task/edit/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Task Updated");
                    navigate('/completedTask')
                } else {
                    toast.error('Could not update')
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='w-full bg-[#FAFAFA] h-screen md:flex justify-center items-center '>
            <div className='md:w-2/3 md:h-48 mt-20 md:mt-0 bg-white w-full h-screen border'>
                <form onSubmit={handleUpdateTask} class="rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <input
                            class=" appearance-none border-b-[1px]   w-full
                             py-2 px-3 text-gray-700 leading-tight focus:outline-none
                              focus:shadow-outline mb-5"
                            defaultValue={task.comment}
                            id="username"
                            type="text"
                            name='comment'
                        />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-600 text-white items-center
                         font-semibold py-2 px-4 rounded-md focus:outline-none 
                         focus:shadow-outline" type="submit">
                            <AddCommentIcon className='mr-2' />Comment
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddComment;