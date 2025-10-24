import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import ClientLayout from './layouts/ClientLayout';
import UserDetail from "./pages/userdetail/page";
import HomePage from "./pages/home/page";
import UserCreate from "./pages/userCreate/page";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
        <ClientLayout/>
    ),
    children: [
      {
        index: true,
        element: (          
          <HomePage/>
        ),
      },
      {
        path: "user/add",
        element: (
              <UserCreate /> 
        ),
      },
      {
        path: "user/:id",
        element: (
               <UserDetail/>
        ),
      },
      {
    path: "*",
    element: <div className="bg-red-500">Not found</div>, // with layout
  },
    ],
  },
  // {
  //   path: "*",
  //   element: <div>Not found</div>, // without layout
  // },
]);

function App() {
  return (
      <RouterProvider router={browserRouter}/>
  );
}

export default App;