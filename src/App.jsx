import './App.css'
import { blogs } from './data/data';
import Hero from './components/Hero'
import Header from './components/Header'
import { CardBlog } from './components/CardBlog';
import {Slider} from './Slider'
import slides from './mock.json'

import Footer from './components/Footer';




function App() {
  const carouselBlogs = [...blogs, ...blogs];
  const data = [
    { name: 'Buenos Aires', img: '/images/buenosAires.jpg' },
    { name: 'Ciudad de México', img: '/images/ciudadDeMexico.jpg' },
    { name: 'Lima', img: '/images/lima.jpg' },
    { name: 'Cartagena', img: '/images/cartagena.jpg' },
    { name: 'Cabo', img: '/images/ciudadDelCabo.jpg' },
    { name: 'Barcelona', img: '/images/barcelona.jpg' },
    { name: 'Florencia', img: '/images/florencia.jpg' },
    { name: 'Hội An', img: '/images/hoiAn.jpg' },
    { name: 'Cairo', img: '/images/cairo.jpg' },
    { name: 'Chiang Mai', img: '/images/barcelona.jpg' },
    { name: 'Roma', img: '/images/roma.jpg' },
    { name: 'Kioto', img: '/images/kioto.jpg' },
  ];

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