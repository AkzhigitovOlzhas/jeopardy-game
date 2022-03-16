import React from "react";
import { useTypedSelector } from "../hooks";
import classes from "./Pages.module.css";

export const StatisticPage = () => {
  const statistics = useTypedSelector((state) => state.statistics);

  return (
    <div className={[classes.wrapper, classes.center].join(" ")}>
      <div className={classes.statisticPage}>
        <div className={classes.statisticTitle}>Статистика</div>
        <div>
          Всего отвечено на вопросов: {statistics.countAnsweredQuestions}
        </div>
        <div>Правильных ответов: {statistics.countCorrectAnswers}</div>
        <div>Правильных не ответов: {statistics.countWrongAnswers}</div>
        <div>Общий счет: {statistics.totalScore}</div>
      </div>
    </div>
  );
};
