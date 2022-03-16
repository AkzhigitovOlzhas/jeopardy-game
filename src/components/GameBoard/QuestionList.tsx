import React, { FC } from "react";
import { QuestionItem } from "./QuestionItem";
import classes from "./Game.module.css";
import { ICategory } from "../../types/gameTypes";

interface QuestionListProps {
  category: ICategory;
}

export const QuestionList: FC<QuestionListProps> = ({ category }) => {
  return (
    <div className={classes.questionList}>
      <div className={classes.categoryName}>{category.title}</div>
      <div className={classes.questions}>
        {category.clues?.map((question, i) => {
          if (i < 5) {
            return <QuestionItem key={question.id} questionData={question} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};
