import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddTask from "../pages/AddTask";
import CompletedTask from "../pages/CompletedTask";
import EditTask from "../pages/EditTask";
import Login from "../pages/Login";
import MyTask from "../pages/MyTask";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <AddTask/>
            },
            {
                path: '/myTask',
                element: <MyTask/>
            },
            {
                path: '/completedTask',
                element: <CompletedTask/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/tasks/edit/:id',
                element: <EditTask/>
            },
        ]
    }
])

