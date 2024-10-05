import './App.css'
import Carousel from "./components/Carousel"
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <div className="h-screen bg-indigo-500 grid place-items-center">App</div>
    <Carousel />
    <Footer />
    
  </>
  )
}
export default App