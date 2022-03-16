import React, { FC } from "react";
import classes from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  const rootClasses = [classes.modal];

  if (isOpen) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={closeModal}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.closeBtn} onClick={closeModal}>
          &#10006;
        </div>
        {children}
      </div>
    </div>
  );
};
