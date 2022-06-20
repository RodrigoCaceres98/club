import React, {Fragment} from "react";
import '../index.css'

const Socio = ({socio, borrarSocio}) => {
    return(
        <div className="carnet">
            <Fragment >
                <p>Socio:{socio.id}</p>
                <p>Nombre:{socio.nombre}</p>
                <p>DNI:{socio.dni}</p>
                <button id="boton"
                    onClick={()=> borrarSocio(socio.id)} 
                >Borrar Socio</button>
            </Fragment>
        </div>
    );
}

export default Socio;