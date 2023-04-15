import { memo } from 'react';
import type { FC } from 'react';
import { Link } from "react-router-dom";

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
  
  function handleRectangle2Click() {
    console.log("Se va a registar el usuario.");
  }
  
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <button className={classes.rectangle10}>LISTO</button>
      <div className={classes.rectangle5}></div>
      <select className={classes.rectangle9}>
        <option value="UNAL">UNAL</option>
        <option value="CUN" selected>CUN</option>
      </select>
      <div className={classes.universidad2}>Universidad:</div>
      <div className={classes.rectangle7}></div>
      <input type="text" placeholder="Cargo" className={classes.rectangle7}/>
      <div className={classes.cargo2}>Cargo:</div>
      <div className={classes.rectangle6}></div>
      <input type='email' placeholder="Correo" className={classes.rectangle6}/>
      <div className={classes.correoElectronico}>Correo electrónico:</div>
      <div className={classes.rectangle8}></div>
      <input type="text" placeholder="Apellidos" className={classes.rectangle8}/>
      <div className={classes.apellidos2}>Apellidos:</div>
      <div className={classes.rectangle3}></div>
      <input type="text" placeholder="Nombres" className={classes.rectangle3}/>
      <div className={classes.nombres2}>Nombres:</div>
      <div className={classes.aNADIRENCARGADOS}>AÑADIR ENCARGADOS</div>
      <div className={`${classes.rectangle2} ${classes.button}`}></div>
      {/* <div className={classes.rectangle2}></div> */}
      <div className={classes.nombreDeUsuarioFondo}></div>
      <div className={classes.line3}>
        <Line3Icon className={classes.icon11} />
      </div>
      <div className={classes.nombreDeUsuarioText}>Nombre de usuario</div>
      <div className={classes.salirBoton}></div>
      <div className={classes.nombreDeUsuarioImagen}></div>
      <button className={classes.consultarEncargados}>Consultar Encargados</button>
      <button className={classes.anadirEncargados}>
        <div className={classes.anadirEncargadosText}>Añadir</div>
        <div className={classes.anadirEncargadosText}> Encargados</div>
      </button>
      <button className={classes.registrarUsuarios}>
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
      <div className={classes.line2}></div>
      <div className={classes.outFondo}></div>
      <div className={classes.outText}>OUT</div>
    </div>
  );
});
