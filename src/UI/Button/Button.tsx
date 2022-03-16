import React, { FC } from "react";
import classes from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.btn}>
      {children}
    </button>
  );
};
