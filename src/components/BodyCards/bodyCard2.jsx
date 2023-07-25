import React from "react";

const BodyCard2 = () =>{
    return(
      <>
                
            <article class="p-0 max-h-125 relative transform duration-300 hover:-translate-y-1 cursor-pointer group">
                <div class="relative max-h-125 overflow-hidden">
                    <img class="absolute" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/e81dd286-91db-45df-a427-64f3c1241d00/Tissue" alt="" />
                    <img class="relative transform duration-500 group-hover:opacity-0" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/af9cdbe4-ee7e-4a43-5b2e-6ca079722b00/Tissue" alt="" />
                </div>
                <div class="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100 rounded">
                    <a target="_blank" href="https://unsplash.com/@danteov_seen">
                        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="rgba(0,0,0,0.5)">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                    </a>
                </div>
              
                <p class="mt-6  text-xl leading-relaxed text-gray-700">
                Nuestras acciones se guían por la honestidad, el respeto y el compromiso valores que nos identifican en el ámbito teatral.

                </p>
                <p class="text-gray-400 mt-10 font-semibold">23rd March, 2021</p>
            </article>
      </>  
    );
}

export default BodyCard2;