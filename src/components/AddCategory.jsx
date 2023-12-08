import { useState } from "react"

export const AddCategory = ( {onWewCategory} ) => {


    const [inputValue, setInputValue] = useState("")

    const onInputChane = ({target}) => {
        
      setInputValue(target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1 ) return;

        onWewCategory( inputValue.trim() )
        // setCategories( categories => [ inputValue, ...categories ])

        setInputValue("");
    }


  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input type="text" 
        placeholder="Buscar gift" 
        value={inputValue} 
        onChange={ (event) => onInputChane(event)} />
    </form>
  )
}
