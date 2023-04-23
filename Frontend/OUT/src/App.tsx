import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { VistaLogin } from './components/VistaLogin/VistaLogin';
import { VistaRegistro } from './components/VistaRegistro/VistaRegistro';
import { VistaConsulta } from './components/VistaConsulta/VistaConsulta';
import { VistaInsertar } from './components/VistaInsertar/VistaInsertar';
import { ProtectedRoute } from './components/ProtectedRoute';
interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {

  

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VistaLogin />} />
          <Route element={<ProtectedRoute/>}>
            <Route path="/consulta" element={<VistaConsulta />} />
            <Route path="/insertar" element={<VistaInsertar />} />
            <Route path="/registro" element={<VistaRegistro />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
});
