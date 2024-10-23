import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cities from './Pages/Cities'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import StandardLayout from './Layouts/StandardLayout'
import Signin from './Pages/Signin'


const router = createBrowserRouter([
  {
    element: <StandardLayout></StandardLayout>,
    children:
      [
        { path: "/", element: <Home></Home> },
        { path: "/Home", element: <Home></Home> },
        { path: "/Cities", element: <Cities></Cities> },
        { path: "/Signin", element: <Signin></Signin> },
      ]
  },
  { path: "/*", element: <NotFound></NotFound> },
])
function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      
    </>
  )
}
export default App 
