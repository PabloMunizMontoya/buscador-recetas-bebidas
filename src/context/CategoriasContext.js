import React, {createContext, useState} from 'react'

//1.1 crear el context
export const CategoriasContext = createContext()

//1.2 Provider es donde se encuentran las function y state
const CategoriasProvider = (props) => {

    //1.3 crear el state del context 
    const [hola, guardarHola] = useState('hola')

    //1.4 esto lo que vamos a mostrar en todos los componentes, todo lo que esta dentro del provider estará disponible en los componentes, de esta forma para pasar data de componente  componente solo necesitaremos utilizar el context 
    return (
        <CategoriasContext.Provider
        
            value={{
                hola,
                guardarHola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider