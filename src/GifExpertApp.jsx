import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
// import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ "One Punch"])

  const onAddCategory = ( newCategory ) => {

    if( categories.includes( newCategory ) ) return;
    
    setCategories( [newCategory, ...categories] )

  }

  return (
    
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onWewCategory={(value) => onAddCategory(value)}/>

        {/* <button onClick={btnEnviar}>Agregar</button> */}

          { categories.map( category => {
            return (
              <GifGrid key={ category } category={ category } />
            )
          } ) }

    </>
  )
}
