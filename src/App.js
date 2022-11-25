import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='lg:w-11/12 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
