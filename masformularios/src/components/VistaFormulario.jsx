import React from "react";

const VistaFormulario = ({Primer, Segundo, Correo, Contraseña, Confirmacion}) =>{
    return(
        <div className="VistaFormulario">
            <p>First name: {Primer}</p>
            <p>Last name: {Segundo}</p>
            <p>Email: {Correo}</p>
            <p>Password: {Contraseña}</p>
            <p>Confirm Password: {Confirmacion}</p>
        </div>
    )
}
export default VistaFormulario