import styles from "./form.module.css";
import { useStore } from "effector-react";
import { Navigate, useLocation } from "react-router-dom";
import Input from "./input/input";

import { modelSearch } from "../../models/search";

export default function Form() {
  const location = useLocation();
  const search = useStore(modelSearch.$search);

  function handleSubmit(e) {
    e.preventDefault();
    modelSearch.submitted();
  }
  return (
    <>
      {search && (
        <Navigate to="/questions" state={{ from: location }} replace={true} />
      )}

      <form onSubmit={handleSubmit}>
        <Input name="search" placeholder="Введите текст" type="text" />
        <button className={styles.button} type="submit">
          Искать
        </button>
      </form>
    </>
  );
}
