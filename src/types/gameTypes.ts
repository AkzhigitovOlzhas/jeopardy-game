export interface IQuestion {
  id: number;
  answer: string;
  question: string;
  value: number;
  category_id: number;
  userAnswer?: string;
}

export interface ICategory {
  id: number;
  title: string;
  clues?: IQuestion[];
}

export type UserAnswer = {
  categoryId: number;
  questionId: number;
  answer: string;
};
