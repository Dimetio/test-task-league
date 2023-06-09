import styles from "./table-details.module.css";

export default function TableDetails({ items }) {
  return items && Object.keys(items).length > 0 ? (
    <>
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
              <td className={styles.author}>{owner.display_name}</td>
              <td>{title}</td>
              <td>{answer_count}</td>
              <td>
                {tags.map((tag, index) => (
                  <span className={styles.tag} key={index}>
                    {tag},{" "}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <div>Ничего не найдено</div>
  );
}
