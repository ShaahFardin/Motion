import React from 'react';
import TaskIcon from '@mui/icons-material/Task';

const AddTask = () => {
    return (
        <div className='w-full bg-[#FAFAFA] h-screen md:flex justify-center items-center '>
            <div className='md:w-2/3 md:h-64 mt-10 bg-white w-full h-screen border'>
                <form class="rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">

                        <input
                            class=" appearance-none border-b-[1px]   w-full
                             py-2 px-3 text-gray-700 leading-tight focus:outline-none
                              focus:shadow-outline mb-5"

                            id="username"
                            type="text"
                            name='task'
                            placeholder="Task" />
                    </div>
                    <div class="mb-6">

                        <input class="appearance-none border-b-[1px]  
                        w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
                         focus:shadow-outline" id="image" name='image' type="file" accept="image/*" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-600 text-white items-center
                         font-semibold py-2 px-4 rounded-md focus:outline-none 
                         focus:shadow-outline" type="submit">
                            <TaskIcon /> Add Task
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddTask;