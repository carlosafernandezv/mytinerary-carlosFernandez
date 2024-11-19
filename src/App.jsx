import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Cities from './Pages/Cities.jsx'
import NotFound from './Pages/NotFound'
import StandardLayout from './Layouts/StandardLayout';
import PrivateRoute from "./Components/PrivateRoute";
import Signin from './Pages/Signin';
import axios from "axios";
import { useDispatch } from "react-redux"
import { setUser } from './store/actions/authActions'
import SignRoute from "./Components/SignRoute";
import SingUp from '../pages/SingUp'


import CityDetail from './components/CityDetail.jsx'




const router = createBrowserRouter([
  {
    element: <StandardLayout></StandardLayout>,
    children:
      [
        { path: "/", element: <Home></Home> },
        { path: "/Home", element: <Home></Home> },
        { path: "/Cities", element:( 
        <PrivateRoute><Cities></Cities></PrivateRoute>)},
        { path: "/Signin", element: (
          <SignRoute>
            <Signin></Signin>
          </SignRoute>
        ) },
        { path: "/SingUp", element: <SingUp></SingUp> },
        { path: "/city/", element: <CityDetail /> },
      ]
  },
  { path: "/*", element: <NotFound></NotFound> },
  
])

const loginWithToken = async (token) => {
  try {
    console.log("se ejecuto login with token");

    const response = await axios.get(
      "http://localhost:8080/api/auth/signin/",
      //"http://localhost:8080/mytinerary/users/validateToken",
      {
        header:{
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.response;    
  } catch (error) {
    console.log("error", error);
        
  }
}

function App() {

  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }));
    });
  }

  return <RouterProvider router={router} />  
}

export default App 
