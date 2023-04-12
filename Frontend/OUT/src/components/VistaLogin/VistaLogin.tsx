import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './VistaLogin.module.css';

interface Props {
  className?: string;
}
/* @figmaId 33:33 */
export const VistaLogin: FC<Props> = memo(function VistaLogin(props = {}) {
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
      <div className={classes.rectangle102}></div>
      <div className={classes.iNGRESAR}>INGRESAR</div>
      <div className={classes.correo}>Correo</div>
      <div className={classes.contrasena2}>Contraseña</div>
    </div>
  );
});
