import React ,{useState} from "react";
import VistaFormulario from "./VistaFormulario"

const Formulario = () =>{
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    return(
        <div className="container">
            <div className="inputs">
                <label htmlFor="FirstName">First Name:</label>
                <input onChange={e=>{setFirstName(e.target.value)}} type="text" id="FirstName"/>
            </div>
            <div className="campo-error">
                {(FirstName.length<3&&FirstName.length>0)&&<p className="error">First name must be of least 2 characters</p>}
            </div>
            <div className="inputs">
                <label htmlFor="LastName">Last Name:</label>
                <input onChange={e=>{setLastName(e.target.value)}} type="text" id="LastName"/>
            </div>
            <div className="campo-error">
                {(LastName.length<3&&LastName.length>0)&&<p className="error">Last Name must be of least 2 characters</p>}
            </div>
            <div className="inputs">
                <label htmlFor="Email">Email:</label>
                <input onChange={e=>{setEmail(e.target.value)}} type="email" id="Email"/>
            </div>
            <div className="campo-error">
                {(Email.length<6&&Email.length>0)&&<p className="error">Email must be of least 5 characters</p>}
            </div>
            <div className="inputs">
                <label htmlFor="Password">Password:</label>
                <input onChange={e=>{setPassword(e.target.value)}} type="password" id="Password"/>
            </div>
            <div className="campo-error">
                {(Password.length<6&&Password.length>0)&&<p className="error">Password must be of least 8 characters</p>}
            </div>
            <div className="inputs">
                <label htmlFor="ConfirmPassword">Confirm Password:</label>
                <input onChange={e=>{setPassword(e.target.value)}} type="password" id="ConfirmPassword"/>
            </div>
            <div className="campo-error">
                {Password!==ConfirmPassword&&<p className="error">Password must be the same</p>}
            </div>
            <VistaFormulario Primer={FirstName} Segundo={LastName} Correo={Email} Contraseña={Password} Confirmacion={ConfirmPassword}/>
        </div>
    )
}
export default Formulario
