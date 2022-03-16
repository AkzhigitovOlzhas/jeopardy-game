import React, { FC } from "react";
import { useActions } from "../../hooks";
import { IQuestion } from "../../types/gameTypes";
import classes from "./Game.module.css";

interface QuestionItemProps {
  questionData: IQuestion;
}

export const QuestionItem: FC<QuestionItemProps> = ({ questionData }) => {
  const { openModal } = useActions();

  const openModalHandler = () => {
    openModal({ isOpen: true, data: questionData });
  };

  if (!questionData.userAnswer) {
    return (
      <button onClick={openModalHandler} className={classes.questionBtn}>
        {questionData.value}
      </button>
    );
  }

  if (questionData.answer === questionData.userAnswer) {
    return (
      <button
        onClick={openModalHandler}
        className={[classes.questionBtn, classes.succes].join(" ")}
      >
        Верно
      </button>
    );
  }

  return (
    <button
      onClick={openModalHandler}
      className={[classes.questionBtn, classes.wrong].join(" ")}
    >
      Не верно
    </button>
  );
};
