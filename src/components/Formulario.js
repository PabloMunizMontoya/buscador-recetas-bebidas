import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'


const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const obtenerDatos = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //1.6 usamos el nuevo hook para hacer funcionar context, este hook usa la variable que contiene la function createContext(), de esta forma ya tendremos disponible todo lo que tiene el value context dentro del provider.
    const {categorias} = useContext( CategoriasContext)



    console.log(categorias)

    return (
        <form
            className='col-12'
        >
            <fieldset className='text-center'>
                <legend>
                    buscar bebidas por categoria o ingredientes
                </legend>
            </fieldset>

            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        name='nombre'
                        className='form-control'
                        type='text'
                        placeholder='Buscar por ingrediente'
                        onChange={obtenerDatos}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={obtenerDatos}
                    >
                        <option value="">-- Selecciona Categoria</option>
                        {categorias.map(categoria => (
                            <option 
                                key ={categoria.strCategory}
                                value ={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))} 
                    </select>
                </div>

                <div className='col-md-4'>
                    <input  
                    type="submit" 
                    className='btn btn-block btn-primary'
                    name="" 
                    value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>

    );
}

export default Formulario;