import { sample } from "effector";
import { $currentQuestion, $answersByQuestion } from "./store";
import { setIdQuestion } from "./events";
import { fetchAnswersFx } from "./fx";

$currentQuestion.on(setIdQuestion, (_, user) => user);
$answersByQuestion.on(fetchAnswersFx.doneData, (_, res) => res);

sample({
  source: $currentQuestion,
  target: fetchAnswersFx,
  clock: setIdQuestion,
});

$answersByQuestion.updates.watch((data) => {
  console.log("поиск ответов на вопрос", data);
});
