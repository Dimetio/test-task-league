import styles from "./table.module.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "../modal/modal";
import UserQuestions from "../user-questions/user-questions";
import { getTopQuestions, getTopTagQuestions } from "../../utils/api";

export default function Table({ title, items }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [panelData, setPanelData] = useState(null);

  function handleOpenModal() {
    setIsVisible(true);
  }

  function handleCloseModal() {
    setIsVisible(false);
  }

  const hadnleClickUser = (id) => {
    getTopQuestions(id).then((data) => {
      setPanelData(data.items);
      handleOpenModal();
    });
  };

  const hadnleClickTag = (tag) => {
    getTopTagQuestions(tag).then((data) => {
      setPanelData(data.items);
      handleOpenModal();
    });
  };
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
              <td className={styles.author}>
                <Link
                  to={`${question_id}`}
                  state={{ background: location }}
                  onClick={() => hadnleClickUser(owner.user_id)}
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
                    onClick={() => hadnleClickTag(tag)}
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

      {isVisible && (
        <Modal closeModal={handleCloseModal} isOpened={isVisible}>
          <UserQuestions
            items={panelData}
            title="Наиболее популярные вопросы автора"
          />
        </Modal>
      )}
    </>
  );
}
