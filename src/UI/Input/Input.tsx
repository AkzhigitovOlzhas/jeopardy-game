import React, { FC } from "react";
import classes from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = (props) => {
  return <input {...props} className={classes.input} />;
};
