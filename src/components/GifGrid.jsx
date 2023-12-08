
import { useEffect, useState } from "react";

// import { getGifs } from "./helpers/getGifs";

import { GifItems } from "./GifItems";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category )
    

  return (
    <>
        <h3>{ category }</h3>

        {
            isLoading && ( <h2>Cargando...</h2> )
        }

        <div className="card-grid">
            {
                images.map((image) => (   
                    // <GifItems key={image.id} title={image.title} url={image.url}/>

                    //NUEVA FORMA DE DESTRUCTURAR Y ESPARSIS SU PROPIEDAD, ES BUENO PARA CUANDO SE TIENE MUCHAS PROPIEDADES
                    <GifItems key={image.id} { ...image }/>
                ))
            }
        </div>
    </>
  )
}
