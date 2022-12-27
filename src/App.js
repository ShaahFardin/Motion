import { RouterProvider } from 'react-router';
import './App.css';
import Sidebar from './components/Sidebar';
import { router } from './routes/Router';

function App() {
  return (
    <RouterProvider router={router}>
   
    </RouterProvider>
  );
}

export default App;
