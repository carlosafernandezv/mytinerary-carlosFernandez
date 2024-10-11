import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import { Slider } from './Slider'
import slides from './mock.json'
import Footer from './components/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cities from './Pages/Cities'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'


const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "/Home", element: <Home></Home> },
  { path: "/Cities", element: <Cities></Cities> },
  { path: "/*", element: <NotFound></NotFound> },
])
function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
      <Header />
      <Hero />
      <Slider slides={slides} />



      <Footer />



    </>
  )
}
export default App