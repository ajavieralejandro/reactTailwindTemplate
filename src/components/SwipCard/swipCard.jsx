import React from "react";

const SwipCard = () =>{
    return(
     
        <>
       
    <section class="">
  
            <section class="row-start-1 row-end-4 col-start-9 col-end-13 bg-orange-100">
                <article class="p-10 flex justify-between items-center h-full" >
                    <div class="space-y-5">
                        <h2 class="text-2xl max-w-sm ">Comfortable Wooden Chair</h2>
                        <h3 class="text-xl">$79</h3>
                        <button class="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">Add To Cart</button>
                    </div>
                    <div>
                        <img class="h-auto w-80" src="https://static.wixstatic.com/media/b758ae_d06272d35a2f4b759d32b406da96ae46~mv2.jpg/v1/fill/w_399,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1%20(1).jpg" alt="" />
                    </div>
                </article>
            </section>
         
        </section>
  
    </>

    )
}

export default SwipCard;