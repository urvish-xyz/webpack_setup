import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import DashboardLayout from './layout/dashboardLayout';
import ErrorPage from './layout/errorElement';
import Urvish from './routes/home';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Urvish />,
      },
    ],
  },
]);

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />);
