import styles from "./table.module.css";
import { Link, useLocation } from "react-router-dom";
import { getTopQuestions } from "../../utils/api";
import { apiStore } from "../../store";

import { modelTag } from "../../models/tag";
import { modelUser } from "../../models/user";

export default function Table({ title, items }) {
  const location = useLocation();

  return (
    <>
      <h2>{title}</h2>
      <table className={styles.table} cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>Автор</th>
            <th>Тема</th>
            <th>Количество ответов</th>
            <th>Теги</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ question_id, owner, title, answer_count, tags }) => (
            <tr key={question_id}>
              <td className={styles.author}>
                <Link
                  onClick={() => modelUser.onUserClick(owner.user_id)}
                  to={`${owner.user_id}`}
                  state={{ background: location }}
                >
                  {owner.display_name}
                </Link>
              </td>
              <td>
                <Link to={`/answer/${question_id}`}>{title}</Link>
              </td>
              <td>
                <Link to={`/answer/${question_id}`}>{answer_count}</Link>
              </td>
              <td>
                {tags.map((tag, index) => (
                  <Link
                    //onClick={() => hadnleClickTag(tag)}
                    onClick={() => modelTag.onTagClick(tag)}
                    className={styles.tag}
                    key={index}
                    to={`/tag/${tag}`}
                    state={{ background: location }}
                  >
                    {tag},{" "}
                  </Link>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
