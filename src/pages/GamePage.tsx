import React from "react";
import { GameBoard } from "../components";
import { useActions, useTypedSelector } from "../hooks";
import { Button } from "../UI";
import classes from "./Pages.module.css";

export const GamePage = () => {
  const inGame = useTypedSelector((state) => state.game.inGame);
  const { startGame } = useActions();
  const startGameHandler = () => {
    startGame();
  };

  return (
    <div className={[classes.wrapper, classes.center].join(" ")}>
      {inGame ? (
        <div className={classes.gamePage}>
          <GameBoard />
        </div>
      ) : (
        <Button onClick={startGameHandler}>Начать игру</Button>
      )}
    </div>
  );
};
