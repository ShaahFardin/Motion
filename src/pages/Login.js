import React from 'react';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
    return (
        <div class="bg-gray-100 h-screen ">
            <div class="container mx-auto flex justify-center items-center h-full">
                <div class="w-full max-w-xs">
                <h1 class="text-3xl font-bold text-gray-600 mb-6">Sign In</h1>
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-semibold mb-2" for="username">
                                Username
                            </label>
                            <input class=" appearance-none border rounded w-full
                             py-2 px-3 text-gray-700 leading-tight focus:outline-none
                              focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-semibold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 pl-2 pr-4 rounded focus:outline-none focus:shadow-outline" type="button">
                              <LoginIcon className='mr-2'/>  Sign In
                            </button>
                            
                        </div>
                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;