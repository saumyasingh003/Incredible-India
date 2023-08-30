import React from 'react'
import { useState,useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scroll,setScroll] = useState(false)
  useEffect(()=>{
    document.title ="Incredible India"
  })
  window.addEventListener("scroll" ,()=>{
    window.scrollY >= 80? setScroll(true):setScroll(false)
  })
  return (
    <div >
   
<nav class={scroll? "navbar-scroll  z-30 delay-50":"bg-white border-gray-200 dark:bg-gray-900"}>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span  style={{fontFamily: " 'Bricolage Grotesque', sans-serif"}} class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Incredible India</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul
      style={{fontFamily: " 'Bricolage Grotesque', sans-serif"}}
       class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className='hover:tracking-wider'>
          <a href="/Home" class="block py-2 pl-3 pr-4 text-white text-xl bg-blue-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-900" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/About" class="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="/Gallery" class="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Gallery</a>
        </li>
        
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Account</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar