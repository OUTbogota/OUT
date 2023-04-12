import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { VistaLogin } from './components/VistaLogin/VistaLogin';
import { VistaRegistro } from './components/VistaRegistro/VistaRegistro';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <VistaLogin />
      <VistaRegistro/>
    </div>
    
  );
});
