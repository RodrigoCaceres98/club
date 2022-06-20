import React, {Fragment, useState} from "react";
import {v4 as uuidv4} from 'uuid'
import '../'


const Formulario = ({agregarSocio}) => {
    
    const [socio, editarSocio] = useState({
        nombre: '',
        dni: ''
    });

    const {nombre, dni} = socio;
    
    const [error, setError] = useState(false)
    
    const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name] : e.target.value,
        })
    }; 
    //Funcion que envia el formulario
    const submitForm = (e) => {
        e.preventDefault();
        

        // envia el formulario
        if (nombre.trim() === '' || dni.trim() === ''){
            setError(true);
            return;
        } 

        setError(false);
        
        // genera un id al socio
        socio.id = uuidv4();
        

        // genera en socio
        agregarSocio(socio);

        //limpiar el formulario
        editarSocio({
            nombre: '',
            dni :''
        });
    };

    return(
    <Fragment>
        <form 
        onSubmit={submitForm}
        >
            <div>
                <div>
                <label htmlFor="nombre" >Nombre Completo </label>
                </div>
                <div>
                <input 
                    type="text" 
                    name="nombre"
                    placeholder="Ingrese un nombre"
                    id="nombre"
                    onChange= {handleChange}
                    value ={nombre} />
                </div>
                <br />
                
                <div>
                <label htmlFor="dni">DNI</label>
                </div>
                <div>
                <input 
                    type="text"  
                    name="dni"
                    placeholder="Ingrese un DNI"
                    id="dni"
                    onChange={handleChange}
                    value={dni}/>
                </div>
                <br />
                <div>
                <button >Ingresar Socio</button>
                </div>
            </div>
        </form>
        {
            error ? <h4>Completa Todos los datos</h4> : null
        }
    </Fragment>
    );
}

export default Formulario;