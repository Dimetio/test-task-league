import styles from "./answer.module.css";
import { useStore } from "effector-react";
import { $search } from "../../components/input/input";

export default function Answer() {
  const store = useStore($search);
  return (
    <>
      {store && (
        <table className={styles.table} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Автор</th>
              <th>Тема</th>
              <th>Количество ответов</th>
              <th>теги</th>
            </tr>
          </thead>
          <tbody>
            {store.map(({ owner, title, answer_count, tags }, index) => (
              <tr key={index}>
                <td>{owner.display_name}</td>
                <td>{title}</td>
                <td>{answer_count}</td>
                <td>
                  {tags.map((tag, index) => (
                    <span key={index}>{tag}, </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
