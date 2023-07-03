import React from "react";

const SwipCard = () =>{
    return(
     
        <>
      <div className="relative flex items-center justify-center w-full dark:text-gray-50">
	<button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri">
		<svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
	<div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/0bec4204-37db-4eea-d2f3-2ccaf75e4d00/Tissue" alt="Image 1" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/05c215dd-a582-495e-4fc4-e0fc9443fe00/Tissue" alt="Image 2" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/7e603984-fd44-4ebe-21b1-45e29f5a0300/Tissue" alt="Image 3" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/90df1fd7-12b7-41b2-03ee-06d98962bb00/Tissue" alt="Image 4" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/1c706a3f-c536-4937-baca-89d279b53500/Tissue" alt="Image 5" />
		</div>
	</div>
	<button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri">
		<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
</div>
  
    </>

    )
}

export default SwipCard;