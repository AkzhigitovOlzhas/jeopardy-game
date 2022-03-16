import React from "react";
import { Loader } from "../../UI";
import { QuestionList } from "./QuestionList";
import classes from "./Game.module.css";
import { useActions, useTypedSelector } from "../../hooks";
import { QuestionModal } from "../QuestionModal";

export const GameBoard = () => {
  const { endGame } = useActions();
  const { isLoading, categories, currentScore } = useTypedSelector(
    (state) => state.game
  );

  if (isLoading) {
    return (
      <div className={classes.gameLoader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={classes.gameBoard}>
      {categories?.map((category) => (
        <QuestionList key={category.id} category={category} />
      ))}
      <div className={classes.scoreBlock}>
        <div>Текущий счет: {currentScore}</div>
        <button onClick={endGame} className={classes.endGameBtn}>
          Завершить игру
        </button>
      </div>
      <QuestionModal />
    </div>
  );
};
