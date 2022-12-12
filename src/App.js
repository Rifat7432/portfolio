import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';

function App() {
  document.querySelector('html').style.backgroundColor='#1E293B'
  document.querySelector('html').style.color='#ffff'
  return (
    <div className=" max-w-7xl mx-auto">
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
