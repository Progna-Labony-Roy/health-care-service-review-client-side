import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './components/Routes/Routes';

function App() {
  
  return (
    <div className="bg-slate-300">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
