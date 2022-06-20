import React, { Fragment, useState} from 'react';
import Formulario from './components/Formulario'; 
import Socio from './components/Socio';
import '../src/index.css'

function App() {
  
  const [asociados, editarAsociados] = useState([]);

// toma el socio nuevo y lo agrega a asociados
  const agregarSocio =(socio) => {
    editarAsociados([
      ...asociados,
      socio
    ])
  };

  //borra socio
  const borrarSocio = (id) =>{
    const nuevaListaDeAsociados = () => asociados.filter(socio => socio.id !== id);
    editarAsociados(nuevaListaDeAsociados)
  };
  
  return (
    <Fragment>
      <div className='bloque'>
        <div>
          <h1>Club Social y Deportivo</h1>
          <Formulario 
            agregarSocio={agregarSocio}/>
        </div>
        <div className='lista'>
            <h2>Lista de Socios</h2>
            {
              asociados.map(
                socio => 
                    <Socio
                      socio={socio} 
                      key={socio.id}
                      borrarSocio={borrarSocio}/>
              )
            }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
