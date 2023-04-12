import { memo } from 'react';
import type { FC } from 'react';
import axios from 'axios';
import { useState } from 'react';

import resets from '../_resets.module.css';
import classes from './VistaLogin.module.css';

interface Props {
  className?: string;
}
/* @figmaId 33:33 */
export const VistaLogin: FC<Props> = memo(function VistaLogin(props = {}) {

  let email = '';
  let password = '';

  const [token, setToken] = useState('');

  // ...

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3333/api/Out/v1/usuarios/login', {
        email: email,
        password: password,
      });
      const token = response.data.token;
      setToken(token); // Guarda el token en el estado del componente
    } catch (error) {
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
            const value = e.target.value;
            email = value;
          }}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Contraseña"
          className={classes.contrasena2}
          onChange={(e) => {
            const value = e.target.value;
            password = value;
          }}
        />
      </div>
    </div>
  );
});
