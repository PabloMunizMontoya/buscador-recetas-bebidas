import React, {createContext, useEffect,useState} from 'react'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idReceta, guardarIdReceta] = useState(null)
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