import React, { FC } from "react";
import { LoginForm } from "../components";
import classes from "./Pages.module.css";

export const LoginPage: FC = () => {
  return (
    <div className={[classes.wrapper, classes.center].join(" ")}>
      <LoginForm />
    </div>
  );
};
