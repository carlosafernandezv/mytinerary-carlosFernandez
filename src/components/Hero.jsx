import bgHero from '../assets/bgHero.jpg'
export default function Hero() {

  return (
    <div className="bg-gradient-to-r from-red-400 to-red-100">
      

      <div className="relative isolate px-6 pt-14 lg:px-8 bg-">
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 " 
        >
          
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            MyTinerary
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Find your perfect trip, designed by insiders who know and love their cities!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className=" animate-bounce rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >

                Start your Journey Now! 
              </a>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
