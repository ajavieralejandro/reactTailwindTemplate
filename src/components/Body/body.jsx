import React from "react";
import SwipCard from "../SwipCard/swipCard";
import BodyCard from "../BodyCards/bodyCard1";
import BodyCard2 from "../BodyCards/bodyCard2";

const Body = () =>{
    return(
        
    <section class="">
   <div class="grid grid-cols-3 gap-4 items-flex">
      <div class="md:col-span-2 sm:col-span-12">
      <BodyCard />   


      </div>
      <div class="md:col-span-1 sm:col-span-12">
      
     <BodyCard2/>

     </div>
      </div>
</section>
    )
}

export default Body;