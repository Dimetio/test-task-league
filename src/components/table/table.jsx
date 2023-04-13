import styles from "./table.module.css";

export default function Table() {
  return (
    <div className={styles.wrapper}>
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
          <tr>
            <td>Автор</td>
            <td>Тема</td>
            <td>Количество ответов</td>
            <td>теги</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.panel}>
        <table className={styles.table} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Вопрос</th>
              <th>Тема</th>
              <th>Количество ответов</th>
              <th>тег</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вопрос</td>
              <td>Тема</td>
              <td>Количество ответов</td>
              <td>тег</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
