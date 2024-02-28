import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import router from './routes/All.routes';
import './styles/index.css';

function App() {
  useEffect(() => {
    Aos.init({
      offset: 20,
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
