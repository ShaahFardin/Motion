import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddTask from "../pages/AddTask";
import CompletedTask from "../pages/CompletedTask";
import MyTask from "../pages/MyTask";

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
        ]
    }
])

