import React, { Fragment } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';


function App() {
  return (

    //1.5 cambiamos el Fragment por el componente, de esta manera los datos del componente estarán disponibles en  todos los componentes que se encuentren dentro del provider. 
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className='container mt-5'>
          <div className='row'>
            <Formulario/>
          </div>
          <ListaRecetas />
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
