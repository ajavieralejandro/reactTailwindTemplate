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
     
        <section class="row-start-5 row-end-7 col-start-1 col-end-9  ">
        <article class="mx-auto w-full pb-8 h-full bg-cover bg-center cursor-pointer w-full transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl ">
        <p class="m-4 text-md p-2 leading-relaxed text-center">

                Un exquisito ensamble entre poemas y vivencias que nos hacen oír la voz de la poeta más viva que nunca.
                </p>
                <p class="m-4 text-md p-2 leading-relaxed text-center">
                Representa desde su infancia hasta su muerte entrelazando la prosa teatral con sus poemas.
                </p>
                <p class="m-4 text-md p-2 leading-relaxed text-center">
                En este unipersonal la actriz, Silvia Pereira nos hará vivir y emocionar al conocer a una Alfonsina, poeta, mujer, madre, amante, comprometida con su tiempo.
                </p>
            </article>

        </section>
        <section class="row-start-1 row-end-4 col-start-9 col-end-13 ">
        <article class="mx-auto max-w-sm pb-8 h-full bg-cover bg-center cursor-pointer transform duration-500  rounded-xl">
                <h2 class="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                ALFONSINA, DISPUESTA A TODO
                </h2>
                <p class="m-4 text-lg p-4 leading-relaxed text-center">
                Espectáculo teatral poético  a cargo de Silvia Pereira.
                </p>
                <p class="m-4 text-lg p-4 leading-relaxed text-center">
                El espectáculo narra vida y obra de Alfonsina Storni a través de sus poesías.
                </p>
            </article>

     
        </section>
        <section class="row-start-4 row-end-7 col-start-9 col-end-13 bg-purple-100">
        <img
          src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/af9cdbe4-ee7e-4a43-5b2e-6ca079722b00/public"
          alt="image 2"
          className="h-full w-full object-cover"
        /> 
        
        </section>
    </section>

</section>
    )
}

export default Body;