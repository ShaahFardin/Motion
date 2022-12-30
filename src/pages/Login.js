import React, { useContext } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {

    const { googleSignIn, loginNewUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                console.log(user);
                toast.success("Google sign in successfull");
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value


        loginNewUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Login successfull')
                e.target.reset()
                navigate(from, { replace: true })
            })
    }

    return (
        <div class="bg-gray-100 h-screen dark:bg-slate-800 dark:text-white">
            <div class="container mx-auto flex justify-center items-center h-full">
                <div class="w-full max-w-xs">
                    <h1 class="text-3xl font-bold dark:text-white text-gray-600 mb-6">Sign In</h1>
                    <form onSubmit={handleSignIn} class="bg-white dark:bg-slate-900
                     dark:text-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block dark:text-white text-gray-700 text-sm font-semibold mb-2" >
                                Email
                            </label>
                            <input class="dark:bg-slate-700 dark:text-white
                             appearance-none border rounded w-full
                             py-2 px-3 text-gray-700 leading-tight focus:outline-none
                              focus:shadow-outline" id="username" type="text" placeholder="Username" name='email' />
                        </div>
                        <div class="mb-6">
                            <label class="block dark:text-white text-gray-700 text-sm font-semibold mb-2">
                                Password
                            </label>
                            <input class="shadow dark:bg-slate-700 dark:text-white
                             appearance-none border rounded w-full py-2 px-3 text-gray-700 
                             mb-3 leading-tight focus:outline-none 
                             focus:shadow-outline" id="password" type="password"
                                placeholder="******************" name='password' />
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold 
                            py-2 pl-2 pr-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                <LoginIcon className='mr-2' />  Sign In
                            </button>


                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn}>Googel sign in</button>
                    <p class="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;