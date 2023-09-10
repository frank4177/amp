import React from "react";
import styles from "./index.module.css";
import ReactDOM from 'react-dom';
import { Bounce } from "react-awesome-reveal";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay}>
        <Bounce>
        {children}
        </Bounce>
      </div>
    </>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
