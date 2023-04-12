import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import { Ellipse4Icon } from './Ellipse4Icon.js';
import { Line1Icon } from './Line1Icon.js';
import { Line3Icon2 } from './Line3Icon2.js';
import { Line3Icon } from './Line3Icon.js';
import { Line4Icon } from './Line4Icon.js';
import { Line5Icon } from './Line5Icon.js';
import { Line6Icon } from './Line6Icon.js';
import { Line7Icon } from './Line7Icon.js';
import { Line8Icon } from './Line8Icon.js';
import { Line9Icon } from './Line9Icon.js';
import classes from './VistaConsulta.module.css';

interface Props {
  className?: string;
}
/* @figmaId 4:2 */
export const VistaConsulta: FC<Props> = memo(function VistaConsulta(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle11}></div>
      <div className={classes.cargo}>Cargo</div>
      <div className={classes.universidad}>Universidad</div>
      <div className={classes.correoElectronico}>Correo electrónico</div>
      <div className={classes.nombresYApellidos}>Nombres y Apellidos</div>
      <div className={classes.line4}>
        <Line4Icon className={classes.icon} />
      </div>
      <div className={classes.line8}>
        <Line8Icon className={classes.icon2} />
      </div>
      <div className={classes.line9}>
        <Line9Icon className={classes.icon3} />
      </div>
      <div className={classes.line5}>
        <Line5Icon className={classes.icon4} />
      </div>
      <div className={classes.line7}>
        <Line7Icon className={classes.icon5} />
      </div>
      <div className={classes.line6}>
        <Line6Icon className={classes.icon6} />
      </div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.buscar}>Buscar </div>
      <div className={classes.image2}></div>
      <div className={classes.nombre}>Nombre</div>
      <div className={classes.buscarPor}>Buscar por:</div>
      <div className={classes.universidad2}>Universidad</div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon8} />
      </div>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon9} />
      </div>
      <div className={classes.ellipse4}>
        <Ellipse4Icon className={classes.icon10} />
      </div>
      <div className={classes.cONSULTADEENCARGADOS}>CONSULTA DE ENCARGADOS</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.line3}>
        <Line3Icon className={classes.icon11} />
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
        <Line1Icon className={classes.icon12} />
      </div>
      <div className={classes.line32}>
        <Line3Icon2 className={classes.icon13} />
      </div>
      <div className={classes.line2}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.oUT}>OUT</div>
    </div>
  );
});
