import React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Register = () => {
    return (
        <div class="bg-gray-100 h-screen ">
            <div class="container mx-auto flex justify-center items-center h-full">
                <div class="w-full max-w-xs">
                    <h1 class="text-3xl font-bold text-gray-600 mb-6">Sign Up</h1>
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                Name
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" type="text" placeholder="John Doe" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="email" placeholder="john.doe@example.com" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="********" />
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 items-center
                             text-white font-bold
                         py-2 pl-2 pr-4 rounded-md focus:outline-none focus:shadow-outline" type="submit">
                               <PersonAddIcon className='mr-2'/> Sign Up
                            </button>
                        </div>
                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        Already have an account? <a href="fsda" class="text-blue-500
                         hover:text-blue-700"> Sign In</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;