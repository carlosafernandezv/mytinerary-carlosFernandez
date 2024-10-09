import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import {Slider} from './Slider'
import slides from './mock.json'
import Footer from './components/Footer';




function App() {

  return (
    <>
      <Header />
      <Hero />
      <Slider slides={slides} />
      
      
      
      <Footer />
    


    </>
  )
}
export default App