import Navbar from '@/components/Navbar'
import React from 'react'

const about = () => {
  return (
      <>
          <Navbar/>
      <section class="text-gray-600 body-font bg-[url('https://img.freepik.com/free-photo/old-camera-notebook-laptop-with-blue-pencil-cup-cappuccino-white-background_23-2147979092.jpg?size=626&ext=jpg&ga=GA1.1.2053258145.1698500146&semt=ais')] opacity-100 bg-opacity-5 bg-no-repeat bg-cover">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                      <img alt="feature" class="object-cover object-center h-full w-full" src='https://blog-app-frontend-91it.vercel.app/hero-bg.jpg' />
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">My Introduction</h2>
          <p class="leading-relaxed  text-2xl font-bold">Hey App viewers I hope This blog finds you entertaining it is built on sanity io application where we have a lot of flexibility in changing the data if any comments please let me Know</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center" href='https://portfolio-one-omega-48.vercel.app/'>More About me Go to portfolio
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
     
    </div>
  </div>
</section>
      </>
  )
}

export default about