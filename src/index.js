import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { LoginScreen } from './components/LoginScreen';
// import { LoginScreen } from './components/LoginScreen';
import './index.css';
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LoginScreen/>,
  // },
  {
    path: "/",
    element: <App/>,
  },
]);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);