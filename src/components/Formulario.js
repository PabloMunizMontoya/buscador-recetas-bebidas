import React, {Fragment} from 'react'
import Header from './Header';

const Formulario = () => {
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
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='categoria'
                    >
                        <option value="">-- Selecciona Categoria</option>
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