import { memo } from 'react';
import type { FC } from 'react';
import { useState } from 'react';

import resets from '../_resets.module.css';
import { Line1Icon } from './Line1Icon.js';
import { Line3Icon2 } from './Line3Icon2.js';
import { Line3Icon } from './Line3Icon.js';
import { Line4Icon } from './Line4Icon.js';
import classes from './VistaRegistro.module.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 33:3 */

export const VistaRegistro: FC<Props> = memo(function VistaRegistro(props = {}) {


  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const history = useNavigate();

  const handleGoConsulta = async () => {
    history('/consulta');
  }

  const handleGoAnadir = async () => {
    history('/insertar');
  }

  const handleGoRegistro = async () => {
    history('/registro');
  }

  const handleGoLogin = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    history('/');
  }

  const handleRegister = async () => {

    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(password);
    console.log(confPassword);
    
    
    try {
      axios.post('http://127.0.0.1:3333/api/Out/v1/usuarios/create', {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        confPassword: confPassword,
        rol_id: 1,
      })
      .then((response)=>{
        const message = response.data;
        console.log(message.mensaje);
        toast.success(message.mensaje);
      })
      .catch((error)=>{
        if (error.response){
          const message = error.response.data;
          console.log(message.mensaje);
          toast.error(message.mensaje);
        }
      })
  
    } catch (error) {
      toast.error("No se puedo registrar");
      console.error(error);
    }
  };


  

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rEGISTRO}>REGISTRO</div>
      <div className={classes.rectangle12}></div>
      <div>
        <input 
          className={classes.rectangle10} 
          type="text" 
          placeholder="Nombres"
          onChange={(e) => {
            setNombre(e.target.value)
          }}
        />
      </div>
      <div>
        <input 
          className={classes.rectangle13} 
          type="text" 
          placeholder="Apellidos"
          onChange={(e) => {
            setApellido(e.target.value)
          }}
        />
      </div>
      <div>
        <input 
          className={classes.rectangle14} 
          type="text" 
          placeholder="Correo"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div>
        <input 
          className={classes.rectangle15} 
          type="text" 
          placeholder="Contraseña"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div>
        <input 
          className={classes.rectangle16} 
          type="text" 
          placeholder="Confirmar Contraseña"
          onChange={(e) => {
            setConfPassword(e.target.value)
          }}
        />
      </div>
      <div className={classes.nombres}>Nombres:</div>
      <div className={classes.apellidos}>Apellidos:</div>
      <div className={classes.correoElectronico}>Correo electrónico:</div>
      <div className={classes.contrasena}>Contraseña:</div>
      <div className={classes.confirmarContrasena}>Confirmar contraseña:</div>
      <div>
        <button className={classes.rEGISTRAR} onClick={handleRegister} >REGISTRAR</button>
      </div>
      <div className={classes.line3}>
        <Line3Icon className={classes.icon} />
      </div>
      <div>
        <button className={classes.consultarEncargados} onClick={handleGoConsulta} >Consultar Encargados</button>
      </div>
      <button className={classes.anadirEncargados} onClick={handleGoAnadir}>
        <div className={classes.textBlock}>Añadir</div>
        <div className={classes.textBlock2}> Encargados</div>
      </button>
      <div>
        <button className={classes.registrarUsuarios} onClick={handleGoRegistro} >
          <div className={classes.textBlock3}>Registrar</div>
          <div className={classes.textBlock4}>Usuarios</div>
        </button>
      </div>
      <div className={classes.line1}>
        <Line1Icon className={classes.icon2} />
      </div>
      <div className={classes.line4}>
        <Line4Icon className={classes.icon3} />
      </div>
      <div className={classes.line32}>
        <Line3Icon2 className={classes.icon4} />
      </div>
      <div className={classes.line2}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.nombreDeUsuario}>Nombre de usuario</div>
      <div>
        <button className={classes.image1}onClick={handleGoLogin}></button>
      </div>
      <div className={classes.image3}></div>
      <div className={classes.oUT}>OUT</div>
      <ToastContainer position="bottom-right" />
    </div>
  );
});
