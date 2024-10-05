import './App.css'
import Carousel from "./components/Carousel"
import Footer from './components/Footer'
import Footer2 from './components/Footer2'

import Header from './components/Header'

function App() {
  return (
    <>
    <Header />
    <div className="h-screen bg-indigo-500 grid place-items-center">App</div>
    <Carousel />
    <Footer />
    <Footer2 />
  </>
  )
}
export default App