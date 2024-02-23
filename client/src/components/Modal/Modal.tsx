import React, { FC } from "react";
import s from "./Modal.module.scss";
import clsx from "clsx";

interface IModal {
  children: React.ReactNode;
  active: boolean;
  setActive: (value: boolean) => void;
}

const Modal: FC<IModal> = ({ active, setActive, children }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={clsx(s.modal, { [s.active]: active })}
    >
      <div
        className={clsx(s.modal__content, { [s.active]: active })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
