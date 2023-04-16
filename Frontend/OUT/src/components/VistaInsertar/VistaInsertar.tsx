import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import { useState, useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import resets from '../_resets.module.css';
import { Line1Icon } from './Line1Icon.js';
import { Line3Icon2 } from './Line3Icon2.js';
import { Line3Icon } from './Line3Icon.js';
import { Line5Icon } from './Line5Icon.js';
import { Ellipse5Icon } from './Ellipse5Icon';
import classes from './VistaInsertar.module.css';

import Modal from './VentanaEmer';

interface Props {
  className?: string;
  onClick?: () => void;
}

interface Option {
  id_universidad: number;
  nombre_universidad: string;
}

/* @figmaId 15:51 */
export const VistaInsertar: FC<Props> = memo(function VistaInsertar(props = {}) {
  
  const [nombres, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [cargo, setCargo] = useState('');
  const [universidad, setUni] = useState('');
  // Opciones de selección múltiple para el campo universidad
  const [options, setOptions] = useState<Option[]>([]);

  // Modal para ventana emergente al agregar universidad
  const [showModal, setShowModal] = useState(false);
  const [nueva_uni, setNuevaUniversidad] = useState('');
  

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
    localStorage.removeItem('user');
    history('/');
  }

  useEffect(() => {
    console.log("Entro universidades");
    axios.get('http://127.0.0.1:3333/api/Out/v1/universidades/index')
      .then(response => {
        console.log(response.data);
        setOptions(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAnadirUniversidad = async () => {
    console.log(nueva_uni);

    try{
      axios.post('http://127.0.0.1:3333/api/Out/v1/universidades/store',{
        nombre_universidad:nueva_uni,
      })
      .then((response)=>{
        const message = response.data;
        console.log(message.msg);
        axios.get('http://127.0.0.1:3333/api/Out/v1/universidades/index')
          .then(response => {
            console.log(response.data);
            setOptions(response.data);
          })
          .catch(error => {
            console.error(error);
          });
        toast.success(message.msg);

        
      })
      .catch((error)=>{
        if (error.response){
          const message = error.response.data;
          console.log(message.mensaje);
          toast.error(message.mensaje);
        }
      })

    } catch (error) {
      toast.error('Error al ingresar la universidad');
      console.log(error);
    }
  };

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
      {/* <button className={classes.botonAnadir}>+</button> */}
      <div>
        <button className={classes.botonAnadir} onClick={toggleModal}>+</button>
        {showModal && (
          <Modal>
            {/* <h1>Contenido del modal</h1>
            <p>Este es el contenido que se mostrará en el modal.</p>
            <button onClick={toggleModal}>Cerrar</button> */}
            <div className={classes.rectangle10_2}></div>
            <button className={classes.aNADIR} onClick={handleAnadirUniversidad}>AÑADIR</button>
            <div className={classes.anadirUniversidadAsegurateQueA}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>Añadir universidad </span>
                <span className={classes.label2}>(Asegurate que aún no esté registrada):</span>
              </p>
            </div>
            {/* <div className={classes.universidad}>Universidad</div> */}
            <input 
              type="text" 
              placeholder="Universidad" 
              className={classes.universidad}
              onChange={(e) => {
                setNuevaUniversidad(e.target.value)
              }}  
            />
            <button className={classes.ellipse5} onClick={toggleModal} >
              <Ellipse5Icon className={classes.icon}/>
            </button>
            <button className={classes.x} onClick={toggleModal}>X</button>
            
          </Modal>
        )}
      </div>
      {/* <select className={classes.rectangle9} onChange={(e)=>{setUni(e.target.value)}}>
        {options.map(option => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select> */}
      <select className={classes.rectangle9} onChange={(e) => {setUni(e.target.value)}}>
        <option value="">--Seleccione una opción--</option>
        {options.map(option => (
          <option value={option.nombre_universidad}>
            {option.nombre_universidad}
          </option>
        ))}
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
      <button className={classes.anadirEncargados} onClick={handleGoAnadir}>
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
      <button className={classes.salirBoton} onClick={handleGoLogin}></button>
      <div className={classes.nombreDeUsuarioImagen}></div>

      <div className={classes.outFondo}></div>
      <div className={classes.outText}>OUT</div>
      <ToastContainer position="bottom-right" />
    </div>
  );
});
