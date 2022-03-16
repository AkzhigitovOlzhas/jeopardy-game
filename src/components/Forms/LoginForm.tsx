import React, { useState } from "react";
import { useActions } from "../../hooks";
import { Button, Input } from "../../UI";
import { validateUserName } from "../../utils";
import classes from "./LoginForm.module.css";

export const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const { setName } = useActions();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(validateUserName(e.target.value));
    setUserName(e.target.value);
  };

  const submitHandler = () => {
    if (!error) {
      localStorage.setItem("userName", userName);
      setName(userName);
    }
  };

  return (
    <div className={classes.loginForm}>
      <Input
        value={userName}
        onChange={inputHandler}
        type="text"
        placeholder="Введите своё имя..."
      />
      <Button onClick={submitHandler}>Зарегистрироваться</Button>
      {error ? <div className={classes.errorMessage}>{error}</div> : null}
    </div>
  );
};
