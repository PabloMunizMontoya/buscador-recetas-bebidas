import React, {createContext, useEffect,useState} from 'react'
import Axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idReceta, guardarIdReceta] = useState(null)
    const [ receta, guardarRecetas] = useState({})

    useEffect (() => {
        const obtenerReceta = async () => {

            if(!idReceta) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`

            const resultado = await Axios.get(url)
            console.log(resultado.data.drinks[0])
            /* guardarRecetas(recetas) */
        }
        obtenerReceta()
    },[idReceta]) 

    return ( 
        <ModalContext.Provider

        value={{
            guardarIdReceta
        }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;