import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import resets from '../_resets.module.css';
import { Line1Icon } from './Line1Icon.js';
import { Line3Icon2 } from './Line3Icon2.js';
import { Line3Icon } from './Line3Icon.js';
import { Line5Icon } from './Line5Icon.js';
import classes from './VistaInsertar.module.css';

interface Props {
  className?: string;
  onClick?: () => void;
}
/* @figmaId 15:51 */
export const VistaInsertar: FC<Props> = memo(function VistaInsertar(props = {}) {
  
  const [nombres, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [cargo, setCargo] = useState('');
  const [universidad, setUni] = useState('');

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
    history('/');
  }

  const handleAnadir = async () => {

    console.log(nombres);
    console.log(apellidos);
    console.log(correo);
    console.log(cargo);
    console.log(universidad);

    try{
      axios.post('http://127.0.0.1:3333/api/Out/v1/encargados/store',{
      nombre_encargado:nombres,
      apellido_encargado:apellidos,
      correo_encargado:correo,
      cargo_encargado:cargo,
      id_universidad:universidad,
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
      toast.error('Error al ingresar encargado');
      console.log(error);
    }

  };
  
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <button className={classes.rectangle10} onClick={handleAnadir}>LISTO</button>
      <div className={classes.rectangle5}></div>
      <button className={classes.botonAnadir}>+</button>
      <select className={classes.rectangle9} onChange={(e)=>{setUni(e.target.value)}}>
        <option value="UNAL">UNAL</option>
        <option value="CUN" selected>CUN</option>
      </select>
      <div className={classes.universidad2}>Universidad:</div>
      <div className={classes.rectangle7}></div>
      <input 
        type="text" 
        placeholder="Cargo" 
        className={classes.rectangle7}
        onChange={(e) => {
          setCargo(e.target.value)
        }}  
      />
      <div className={classes.cargo2}>Cargo:</div>
      <div className={classes.rectangle6}></div>
      <input 
        type='email' 
        placeholder="Correo" 
        className={classes.rectangle6}
        onChange={(e) => {
          setCorreo(e.target.value)
        }}
      />
      <div className={classes.correoElectronico}>Correo electrónico:</div>
      <div className={classes.rectangle8}></div>
      <input 
        type="text" 
        placeholder="Apellidos" 
        className={classes.rectangle8}
        onChange={(e) => {
          setApellidos(e.target.value)
        }}
      />
      <div className={classes.apellidos2}>Apellidos:</div>
      <div className={classes.rectangle3}></div>
      <input 
        type="text" 
        placeholder="Nombres" 
        className={classes.rectangle3}
        onChange={(e) => {
          setNombre(e.target.value)
        }}
      />
      <div className={classes.nombres2}>Nombres:</div>
      <div className={classes.aNADIRENCARGADOS}>AÑADIR ENCARGADOS</div>
      <button className={classes.consultarEncargados} onClick={handleGoConsulta} >Consultar Encargados</button>
      <button className={classes.anadirEncargados} onClick={handleAnadir}>
        <div className={classes.anadirEncargadosText}>Añadir</div>
        <div className={classes.anadirEncargadosText}> Encargados</div>
      </button>
      <button className={classes.registrarUsuarios} onClick={handleGoRegistro}>
        <div className={classes.registrarUsuariosText}>Registrar</div>
        <div className={classes.registrarUsuariosText}>Usuarios</div>
      </button>
      <div className={classes.line1}>
        <Line1Icon className={classes.icon2} />
      </div>
      <div className={classes.line42}>
        <Line3Icon2 className={classes.icon3} />
      </div>
      <div className={classes.line5}>
        <Line5Icon className={classes.icon4} />
      </div>
      <div className={classes.line32}>
        <Line3Icon2 className={classes.icon4} />
      </div>
      <div className={classes.line2}></div>
      <div className={`${classes.rectangle2} ${classes.button}`}></div>
      <div className={classes.nombreDeUsuarioFondo}></div>
      {/* <div className={classes.line3}>
        <Line3Icon className={classes.icon11} />
      </div> */}
      <div className={classes.nombreDeUsuarioText}>Nombre de usuario</div>
      <div className={classes.salirBoton}></div>
      <div className={classes.nombreDeUsuarioImagen}></div>

      <div className={classes.outFondo}></div>
      <div className={classes.outText}>OUT</div>
      <ToastContainer position="bottom-right" />
    </div>
  );
});
