import { useEffect, useState } from "react";
import styles from "./input.module.css";

export default function Input() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <input
        name="search"
        placeholder="Введите текст"
        className={styles.input}
        value={value || ""}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        искать
      </button>
    </>
  );
}
