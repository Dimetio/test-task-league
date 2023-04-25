import { $currentQuestion, $answersByQuestion } from "./store";
import { setIdQuestion } from "./events";

export const modelAnswer = {
  $currentQuestion,
  $answersByQuestion,
  setIdQuestion,
};
