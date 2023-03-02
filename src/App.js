
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Main from './Layout/Main';
import Order from './components/Order/Order';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('books.json'),
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/order',
          element: <Order></Order>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
