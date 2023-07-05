import React,{useState} from 'react';
import Awesome from '../Awesome/awesome';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipCard from '../SwipCard/swipCard';

export default  () =>{
   const matches = useMediaQuery('(min-width:640px)');
   const handleClick = () =>{
      setIsActive(!isActive);

   }

   const [isActive,setIsActive] = useState(false);
   
    return(
        <>
        
<button onClick={()=>handleClick()} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>



<aside id="default-sidebar" className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'>
   <div class="h-screen px-3 py-4 overflow-y-auto rounded-lg">
   <img class=" w-18 h-18" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/de992575-5b64-46b4-2f21-5ff787516b00/public" alt="image description" />

      <ul class="space-y-2 font-medium">
       
        
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Obras</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Galeria</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Equipo</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Contacto</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
{isActive?
<aside id="default-sidebar" className='fixed top-0 left-0 z-40 w-64 h-screen '>
   <div class="h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
<button onClick={()=>handleClick()} type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img class=" w-22 h-22" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/de992575-5b64-46b4-2f21-5ff787516b00/public" alt="image description" />

      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="ml-3">Escenas Infinitas</span>
            </a>
         </li>
       
        
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Obras</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Galeria</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Equipo</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Contacto</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
:null}



<div class=" p-4 sm:ml-64 " >
 <SwipCard />
</div>
</>
    );
}