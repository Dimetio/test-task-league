import styles from "./answer.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getAnswers } from "../../utils/api";
import { useEffect } from "react";

export default function Answers() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const handleGetAnswers = (id) => {
    getAnswers(id).then((data) => {
      console.log(data.items);
      setData(data.items);
    });
  };

  useEffect(() => {
    handleGetAnswers(id);
  }, []);

  return data && Object.keys(data).length > 0 ? (
    <>
      <h2>Список ответов на вопрос</h2>
      <ul>
        {data.map(({ owner, answer_id }) => (
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
