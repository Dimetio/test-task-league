import styles from "./index.module.css";
import { useStore } from "effector-react";
import { modelSearch } from "../../../models/search";

export default function Input({ name, type, placeholder }) {
  const input = useStore(modelSearch.$input);

  const handleChange = (e) => {
    modelSearch.inputChanged(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        value={input || ""}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
