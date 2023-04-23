import React from 'react';
import classes from './VistaInsertar.module.css';


function Modal(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return (
    <div className={classes.modal}>
      <div className={classes.modal_content}>{props.children}</div>
    </div>
  );
}

export default Modal;