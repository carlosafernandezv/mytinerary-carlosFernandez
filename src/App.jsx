import './App.css'
import { blogs } from './data/data';
import Hero from './components/Hero'
import Header from './components/Header'
import { CardBlog } from './components/CardBlog';

import Footer from './components/Footer';
function App() {
  const carouselBlogs = [...blogs, ...blogs];
  
  return (
    <>
      <Header />
      <Hero />
      <div className='container my-5'>
				<div className='overflow-hidden w-full'>
					<div className='flex whitespace-nowrap animate-scroll'>
						{carouselBlogs.map((blog, index) => (
							<CardBlog blog={blog} key={index} />
						))}
					</div>
				</div>
			</div>
      <Footer />
    


    </>
  )
}
export default App