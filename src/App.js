import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import './App.css';
import Sidebar from './components/Sidebar';
import { router } from './routes/Router';

function App() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster/>
    </>
  );
}

export default App;
