import styles from "./input.module.css";
import { getSearch } from "../../utils/api";
import { createEffect, createStore, createEvent, sample } from "effector";
import { useStore } from "effector-react";
import { Navigate, useLocation } from "react-router-dom";

const submitted = createEvent();
const setField = createEvent();

const sendFormFx = createEffect((params) => {
  fetchSearchFx(params);
});

const fetchSearchFx = createEffect((params) =>
  getSearch(params).then((data) => {
    console.log(data.items);
    return data.items;
  })
);

export const $search = createStore(null).on(
  fetchSearchFx.doneData,
  (state, res) => res
);

export const $form = createStore("").on(setField, (state, value) => value);

const handleChange = setField.prepend((e) => e.target.value);

sample({
  clock: submitted,
  source: $form,
  target: sendFormFx,
});

submitted.watch((e) => {
  e.preventDefault();
});

const Field = ({ name, type, placeholder }) => {
  const value = useStore($form);
  return (
    <div>
      <input
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default function Input() {
  const location = useLocation();
  const search = useStore($search);
  return (
    <>
      {search && (
        <Navigate to="/questions" state={{ from: location }} replace={true} />
      )}

      <form onSubmit={submitted}>
        <Field name="search" placeholder="Введите текст" />
        <button className={styles.button} type="submit">
          Искать
        </button>
      </form>
    </>
  );
}
