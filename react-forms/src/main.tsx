import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Form1 from './pages/Form1.tsx';
import Form2 from './pages/Form2.tsx';
import NotFound from './pages/NotFound.tsx';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/form1',
    element: <Form1 />,
  },
  {
    path: '/form2',
    element: <Form2 />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
