import styles from "./answer.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "effector-react";
import { modelAnswer } from "../../models/answer";

export default function Answers() {
  const answers = useStore(modelAnswer.$answersByQuestion);
  const { id } = useParams();

  useEffect(() => {
    modelAnswer.setIdQuestion(id);
  }, []);

  return answers && Object.keys(answers).length > 0 ? (
    <>
      <h2>Список ответов на вопрос</h2>
      <ul>
        {answers.map(({ owner, answer_id }, index) => (
          <li key={index}>
            {owner.display_name}: {answer_id}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <div>Ответов не найдено</div>
  );
}
