import styles from "./answer.module.css";
import { useParams } from "react-router-dom";
import { getAnswers } from "../../utils/api";
import { useEffect } from "react";
import { useStore } from "effector-react";

import { apiStore, $store } from "../../store";

export default function Answers() {
  const store = useStore($store);
  const { id } = useParams();

  const handleGetAnswers = (id) => {
    getAnswers(id)
      .then((data) => apiStore.getAnswers(data.items))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetAnswers(id);
  }, []);

  return store && Object.keys(store).length > 0 ? (
    <>
      <h2>Список ответов на вопрос</h2>
      <ul>
        {store.map(({ owner, answer_id }) => (
          <li key={answer_id}>
            {owner.display_name}: {answer_id}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <div>Ответов не найдено</div>
  );
}
