import React from "react";

const Body = () =>{
    return(
        
    <section class="">
    <section class=" md:p-0 xl:grid xl:grid-cols-12 xl:grid-rows-6 xl:h-200">
        <section class="row-start-1 row-end-5 col-start-1 col-end-9 bg-orange-100" >
           
                <img
          src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/57c5e1bd-2118-403b-7697-3cacb2ebca00/Tissue"
          alt="image 2"
          className="h-full w-full object-cover"
        />                
        </section>
        <section class="row-start-5 row-end-7 col-start-1 col-end-4 bg-purple-300">
        <img
          src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/dda4b706-0e0a-498b-4b76-839398ada700/Tissue"
          alt="image 2"
          className="h-full w-full object-"
        />         
        </section>
        <section class="row-start-5 row-end-7 col-start-4 col-end-9 bg-gray-200">
            <article class="p-10 flex justify-between items-center h-full">
                <div class="space-y-5">
                    <h2 class="text-3xl max-w-xs">Multipurpose Wooden Tool</h2>
                    <h3 class="text-xl">$24</h3>
                    <button class="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add To Cart</button>
                </div>
                <div>
                    <img class="h-auto w-full ml-10 -mt-5" src="https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1" alt="" />
                </div>
            </article>
        </section>
        <section class="row-start-1 row-end-4 col-start-9 col-end-13 ">
        <img
          src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/697bfc8f-d358-41ed-0ed6-1312abdbb700/Tissue"
          alt="image 2"
          className="h-full w-full object-contain"
        /> 
        </section>
        <section class="row-start-4 row-end-7 col-start-9 col-end-13 bg-purple-100">
        <img
          src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/af9cdbe4-ee7e-4a43-5b2e-6ca079722b00/public"
          alt="image 2"
          className="h-full w-full object-cover"
        /> 
        </section>
    </section>
    <p class="text-sm leading-relaxed text-gray-400 mt-10 text-center">
        Design Inspiration: <a target="_blank" href="https://dribbble.com/shots/6693601-IxD-Challenge-Day-15">https://dribbble.com/shots/6693601-IxD-Challenge-Day-15</a>
    </p>
</section>
    )
}

export default Body;