import './App.css'
import Carousel from "./components/Carousel"
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    <Navbar/>
    <div className="h-screen bg-indigo-500 grid place-items-center">App</div>
    <Carousel></Carousel>
    
  </>
  )
}
export default App