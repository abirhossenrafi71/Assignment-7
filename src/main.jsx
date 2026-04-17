import { Children, Component, StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Timeline from './components/Timeline/Timeline'
import AllUserDetails from './components/AllUserDetails/AllUserDetails';
import Status from './components/Status/Status'
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,


    children: [
      {
        index: true,
        loader: () => fetch("/friends.json"),
        Component: Home
      },
      {
        path:"home",
        loader: () => fetch("/friends.json"),
        Component: Home
      },
      {
        path: "timeline",
        loader: () => fetch("/friends.json"),
        Component: Timeline
      },
      {
        path: "status",
        loader: () => fetch("/friends.json"),
        Component: Status
      },
      {
        path: "userDetails/:userID",
        loader: async ({ params }) => {
          const response = await fetch("/friends.json");
          const data = await response.json();
          const singleUser = data.find((user) => user.id == params.userID);
          if (!singleUser) {
            throw new Response("User Not Found", { status: 404 });
          }
          return singleUser;
        },
        Component: AllUserDetails
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
