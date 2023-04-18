import { memo } from 'react';
import type { FC } from 'react';
import { useState } from 'react'
import { useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import { Ellipse4Icon } from './Ellipse4Icon.js';
import { Line1Icon } from './Line1Icon.js';
import { Line3Icon2 } from './Line3Icon2.js';
import { Line3Icon } from './Line3Icon.js';
import { Line4Icon2 } from './Line4Icon2.js';
import { Line4Icon } from './Line4Icon.js';
import { Line5Icon } from './Line5Icon.js';
import { Line6Icon } from './Line6Icon.js';
import { Line7Icon } from './Line7Icon.js';
import { Line8Icon } from './Line8Icon.js';
import { Line9Icon } from './Line9Icon.js';
import classes from './VistaConsulta.module.css';
import Encargado from './EncargadosModel.js';


interface Props {
  className?: string;
}


/* @figmaId 4:2 */
export const VistaConsulta: FC<Props> = memo(function VistaConsulta(props = {}) {

    DoRequest()

    const history = useNavigate();

    const [colorNombre, setColorNombre] = useState('#006DD1')
    const [colorUniversidades, setColorUniversidades] = useState('white')

    let user = JSON.parse(localStorage.getItem('user') || '{}');

    console.log(user?.rol);
    

    if (!user) {
       // return <Navigate to="/" />;
    }
    

    const logut: () => void = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history('/');
    }

  function DoRequest(){
    const token = localStorage.getItem('token');

    axios.get<Encargado[]>('http://127.0.0.1:3333/api/Out/v1/encargados/index',{
      headers:{
        "Authorization":"Bearer " + token
      }
    })
    .then(response => {
      const encargadosData = response.data;
      const encargados = encargadosData.map(data => new Encargado(
        data.id_encargado,
        data.nombre_encargado,
        data.apellido_encargado,
        data.correo_encargado,
        data.cargo_encargado,
        data.state,
        data.id_universidad,
        data.created_at,
        data.updated_at
      ));
      console.log(encargados);
    })
    .catch(error => {
      console.error(error);
    });
  }

  function activarBolaNombre(){
    setColorNombre('#006DD1')
    setColorUniversidades('white')
  }

  function activarBolaUniversidades(){
    setColorNombre('white')
    setColorUniversidades('#006DD1')
  }

  const handleInsertar = () => {
    history('/insertar');
  }

  const handleRegistro = () => {
    history('/registro');
  }

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.tablaPanel}></div>
      <div className={classes.cargoTablaText}>Cargo</div>
      <div className={classes.universidadTablaText}>Universidad</div>
      <div className={classes.correoElectronicoTablaText}>Correo electrónico</div>
      <div className={classes.nombresYApellidosTablaText}>Nombres y Apellidos</div>
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
      <input className={classes.inputBusqueda} type="text" placeholder="Buscar" />
      <div className={classes.buscarBoton}></div>
      {/* boton de buscar */}
      <div className={classes.buscarBoton}>
        <div className={classes.buscarBotonFondo}></div>
        <div className={classes.buscarBotonImagen}></div>
      </div>
      <div className={classes.nombre}>Nombre</div>
      <div className={classes.buscarPor}>Buscar por:</div>
      <div className={classes.universidadBola}>Universidad</div>

      <button className={classes.bolaNombre} onClick={()=>activarBolaNombre()}> 
        <div className={classes.bolaExternaNombre}>
          <Ellipse1Icon className={classes.iconoBolaExternaNombre} />
        </div>

        <div className={classes.bolaInternaNombre}>
          <Ellipse3Icon color={colorNombre} className={classes.iconoBolaInternaNombre} />
        </div>
      </button>
      
      <button className={classes.bolaUniversidad} onClick={()=>activarBolaUniversidades()}> 
        <div className={classes.bolaExternaUniversidad}>
          <Ellipse2Icon className={classes.iconoBolaExternaUniversidad} />
        </div>
        <div className={classes.bolaInternaUniversidad}>
          <Ellipse4Icon color={colorUniversidades} className={classes.iconoBolaInternaUniversidad} />
        </div>
      </button>
      
      <div className={classes.consultaDeEncargadosText}  >CONSULTA DE ENCARGADOS</div>
      <div className={classes.nombreDeUsuarioFondo}></div>
      <div className={classes.line3}>
        <Line3Icon className={classes.icon11} />
      </div>
      <div className={classes.nombreDeUsuarioText}>
        {user?.nombre}
      </div>
      <div className={classes.salirBoton} onClick={logut}></div>
      <div className={classes.nombreDeUsuarioImagen}></div>
      <button className={classes.consultarEncargados}>Consultar Encargados</button>
      <button className={classes.anadirEncargados} onClick={ handleInsertar }>
        <div className={classes.anadirEncargadosText}>Añadir</div>
        <div className={classes.anadirEncargadosText}> Encargados</div>
      </button>
      <button className={classes.registrarUsuarios} onClick={ handleRegistro }>
        <div className={classes.registrarUsuariosText}>Registrar</div>
        <div className={classes.registrarUsuariosText}>Usuarios</div>
      </button>
      <div className={classes.line1}>
        <Line1Icon className={classes.icon12} />
      </div>
      <div className={classes.line42}>
        <Line4Icon2 className={classes.icon13} />
      </div>
      <div className={classes.line32}>
        <Line3Icon2 className={classes.icon14} />
      </div>
      <div className={classes.line2}></div>
      <div className={classes.outFondo}></div>
      <div className={classes.outText}>OUT</div>
    </div>
  );
});
