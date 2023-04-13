import { memo } from 'react';
import type { FC } from 'react';
import axios from 'axios';
import { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import classes from './VistaLogin.module.css';

interface Props {
  className?: string;
}
/* @figmaId 33:33 */
export const VistaLogin: FC<Props> = memo(function VistaLogin(props = {}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');

  const history = useNavigate();


  // ...

  const handleLogin = async () => {

    console.log( email);
    console.log(password);
    
    
    try {
      //const response = await axios.post('https://out-production.up.railway.app/api/Out/v1/usuarios/login', {

        const response = await axios.post('http://127.0.0.1:3333/api/Out/v1/usuarios/login', {
        email: email,
        password: password,
      });
      const token = response.data.token;
      setToken(token); // Guarda el token en el estado del componente
      history('/consulta');
      toast.success('Sesión iniciada');
    } catch (error) {
      toast.error('Error al iniciar sesión');
      console.error(error);
    }
  };

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.line5}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.oUT}>OUT</div>
      <div className={classes.lOGIN}>LOGIN</div>
      <div className={classes.rectangle17}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.correoElectronico}>Correo electrónico:</div>
      <div className={classes.contrasena}>Contraseña:</div>
      <div 
        className={classes.botonIngresar} 
        onClick={handleLogin}>
        <div className={classes.rectangle102}></div>
        <div className={classes.iNGRESAR}>INGRESAR</div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Correo"
          className={classes.correo}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Contraseña"
          className={classes.contrasena2}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
});
