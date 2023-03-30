import React, {createContext, useState, useEffect} from 'react'
import Axios from 'axios'

//1.1 crear el context
export const CategoriasContext = createContext()

//1.2 Provider es donde se encuentran las function y state
const CategoriasProvider = (props) => {

    //1.3 crear el state del context 
    const [categorias, guardarCategorias] = useState([])

    //1.6 ejecutar el llamado a la api
    useEffect (() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const categorias = await Axios.get(url)
            guardarCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
    },[]) 

    //1.4 esto lo que vamos a mostrar en todos los componentes, todo lo que esta dentro del provider estará disponible en los componentes, de esta forma para pasar data de componente  componente solo necesitaremos utilizar el context 
    return (
        <CategoriasContext.Provider
        
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider