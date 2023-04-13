import styles from "./table.module.css";
import { Link } from "react-router-dom";

export default function Table({
  title,
  items,
  handleTopQuestions,
  handleTopTagQuestions,
}) {
  return (
    <>
      <h2>{title}</h2>
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
          {items.map(({ question_id, owner, title, answer_count, tags }) => (
            <tr key={question_id}>
              <td
                className={styles.author}
                onClick={() => handleTopQuestions(owner.user_id)}
              >
                {owner.display_name}
              </td>
              <td>
                <Link to={"/info"}>{title}</Link>
              </td>
              <td>
                <Link to={"/info"}>{answer_count}</Link>
              </td>
              <td>
                {tags.map((tag, index) => (
                  <span
                    className={styles.tag}
                    key={index}
                    onClick={() => handleTopTagQuestions(tag)}
                  >
                    {tag},{" "}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
