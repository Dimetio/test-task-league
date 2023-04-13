import { useEffect, useState } from "react";
import styles from "./input.module.css";
import { getSearch } from "../../utils/api";

export default function Input() {
  const [value, setValue] = useState("");
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getSearch(value)
      .then((data) => {
        setData(data.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <input
        name="search"
        placeholder="Введите текст"
        className={styles.input}
        value={value || ""}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button} onClick={handleSubmit}>
        искать
      </button>
    </>
  );
}
