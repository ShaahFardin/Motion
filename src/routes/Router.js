import { createBrowserRouter } from "react-router-dom";
import Modal from "../components/Modal";
import Main from "../layout/Main";
import AddComment from "../pages/AddComment";
import AddTask from "../pages/AddTask";
import CompletedTask from "../pages/CompletedTask";
import EditTask from "../pages/EditTask";
import Login from "../pages/Login";
import MyTask from "../pages/MyTask";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <PrivateRoute><AddTask /></PrivateRoute>
            },
            {
                path: '/myTask',
                element: <MyTask/>
            },
            {
                path: '/completedTask',
                element:<PrivateRoute> <CompletedTask /></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/tasks/edit/:id',
                element: <PrivateRoute><EditTask /></PrivateRoute>
            },
            {
                path: '/tasks/addcomment/:id',
                element: <PrivateRoute><AddComment /></PrivateRoute>
            },
        ]
    }
])

