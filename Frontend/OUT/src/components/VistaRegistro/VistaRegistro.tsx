import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Line1Icon } from './Line1Icon.js';
import { Line3Icon2 } from './Line3Icon2.js';
import { Line3Icon } from './Line3Icon.js';
import { Line4Icon } from './Line4Icon.js';
import classes from './VistaRegistro.module.css';

interface Props {
  className?: string;
}
/* @figmaId 33:3 */

export const VistaRegistro: FC<Props> = memo(function VistaRegistro(props = {}) {

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rEGISTRO}>REGISTRO</div>
      <div className={classes.rectangle12}></div>
      <input className={classes.rectangle10} type="text" placeholder="Nombres" />
      <input className={classes.rectangle13} type="text" placeholder="Apellidos" />
      <input className={classes.rectangle14} type="text" placeholder="Correo"  />
      <input className={classes.rectangle15} type="text" placeholder="Contraseña" />
      <input className={classes.rectangle16} type="text" placeholder="Confirmar Contraseña" />
      <div className={classes.nombres}>Nombres:</div>
      <div className={classes.apellidos}>Apellidos:</div>
      <div className={classes.correoElectronico}>Correo electrónico:</div>
      <div className={classes.contrasena}>Contraseña:</div>
      <div className={classes.confirmarContrasena}>Confirmar contraseña:</div>
      <button className={classes.rEGISTRAR}>REGISTRAR</button>
      <div className={classes.rectangle2}></div>
      <div className={classes.line3}>
        <Line3Icon className={classes.icon} />
      </div>
      <div className={classes.nombreDeUsuario}>Nombre de usuario</div>
      <button className={classes.image1}></button>
      <div className={classes.image3}></div>
      <button className={classes.consultarEncargados}>Consultar Encargados</button>
      <button className={classes.anadirEncargados}>
        <div className={classes.textBlock}>Añadir</div>
        <div className={classes.textBlock2}> Encargados</div>
      </button>
      <button className={classes.registrarUsuarios}>
        <div className={classes.textBlock3}>Registrar</div>
        <div className={classes.textBlock4}>Usuarios</div>
      </button>
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
      <div className={classes.oUT}>OUT</div>
    </div>
  );
});
