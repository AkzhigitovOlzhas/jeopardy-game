import React, { FC, useState } from "react";
import { useActions, useTypedSelector } from "../../hooks";
import { Button, Input, Modal } from "../../UI";
import classes from "./QuestionModal.module.css";

export const QuestionModal: FC = () => {
  const [answer, setAnswer] = useState<string>("");
  const { addCurrentScore, addAnsweredQuestion, setUserAnswer, closeModal } =
    useActions();
  const { isOpen, data } = useTypedSelector((state) => state.game.modal);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };
  console.log(data);

  const submitAnswerHandler = () => {
    if (answer) {
      setUserAnswer({
        answer,
        categoryId: data!.category_id,
        questionId: data!.id,
      });
      setAnswer("");
      closeModal();
      addAnsweredQuestion(answer === data?.answer, data!.value);
      addCurrentScore(answer === data?.answer, data!.value);
    }
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className={classes.title}>Вопрос: {data?.question}</div>
      {data?.userAnswer ? (
        <>
          {data.userAnswer === data.answer ? (
            <div
              className={[classes.answerBlock, classes.correctAnswerBlock].join(
                " "
              )}
            >
              <div>Вы ответили верно!</div>
              <div>Правильный ответ: {data?.answer}</div>
            </div>
          ) : (
            <div
              className={[classes.answerBlock, classes.wrongAnswerBlock].join(
                " "
              )}
            >
              <div>Вы ответили не верно!</div>
              <div>Правильный ответ: {data?.answer}</div>
            </div>
          )}
        </>
      ) : (
        <div className={classes.sendQuestionBlock}>
          <Input
            value={answer}
            onChange={inputHandler}
            placeholder="Введите ваш ответ"
          />
          <Button onClick={submitAnswerHandler}>Ответить</Button>
        </div>
      )}
    </Modal>
  );
};
