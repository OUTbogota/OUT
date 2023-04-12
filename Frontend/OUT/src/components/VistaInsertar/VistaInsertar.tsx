import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Line1Icon } from './Line1Icon.js';
import { Line3Icon2 } from './Line3Icon2.js';
import { Line3Icon } from './Line3Icon.js';
import { Line5Icon } from './Line5Icon.js';
import classes from './VistaInsertar.module.css';

interface Props {
  className?: string;
}
/* @figmaId 15:51 */
export const VistaInsertar: FC<Props> = memo(function VistaInsertar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle10}></div>
      <div className={classes.lISTO}>LISTO</div>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.universidad}>Universidad</div>
      <div className={classes.universidad2}>Universidad:</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.cargo}>Cargo</div>
      <div className={classes.cargo2}>Cargo:</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.correo}>Correo</div>
      <div className={classes.correoElectronico}>Correo electrónico:</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.apellidos}>Apellidos</div>
      <div className={classes.apellidos2}>Apellidos:</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.nombres}>Nombres</div>
      <div className={classes.nombres2}>Nombres:</div>
      <div className={classes.aNADIRENCARGADOS}>AÑADIR ENCARGADOS</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.line3}>
        <Line3Icon className={classes.icon} />
      </div>
      <div className={classes.nombreDeUsuario}>Nombre de usuario</div>
      <div className={classes.image1}></div>
      <div className={classes.image3}></div>
      <div className={classes.consultarEncargados}>Consultar Encargados</div>
      <div className={classes.anadirEncargados}>
        <div className={classes.textBlock}>Añadir</div>
        <div className={classes.textBlock2}> Encargados</div>
      </div>
      <div className={classes.line1}>
        <Line1Icon className={classes.icon2} />
      </div>
      <div className={classes.line32}>
        <Line3Icon2 className={classes.icon3} />
      </div>
      <div className={classes.line2}></div>
      <div className={classes.registrarUsuarios}>
        <div className={classes.textBlock3}>Registrar</div>
        <div className={classes.textBlock4}>Usuarios</div>
      </div>
      <div className={classes.line5}>
        <Line5Icon className={classes.icon4} />
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.oUT}>OUT</div>
    </div>
  );
});
