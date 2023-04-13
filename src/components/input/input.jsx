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

const mock = [
  {
    answer_count: 1,
    content_license: "CC BY-SA 4.0",
    creation_date: 1681388005,
    is_answered: false,
    last_activity_date: 1681404016,
    last_edit_date: 1681404016,
    link: "https://stackoverflow.com/questions/76005289/switch-toggle-is-not-switching-in-react-until-i-refresh-it",
    owner: {
      account_id: 13603446,
      display_name: "Zahid Hussain",
      link: "https://stackoverflow.com/users/9813424/zahid-hussain",
      profile_image:
        "https://www.gravatar.com/avatar/063c53891dcdc5e10e3108189ef61539?s=256&d=identicon&r=PG&f=1",
      reputation: 11,
      user_id: 9813424,
      user_type: "registered",
    },
    question_id: 76005289,
    score: 1,
    tags: ["javascript", "reactjs", "checkbox", "toggle"],
    title: "Switch Toggle is not switching in react until i refresh it",
    view_count: 23,
  },
];

console.log(mock);

export const $search = createStore(mock).on(
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
        <Navigate to="/answer" state={{ from: location }} replace={true} />
      )}

      <form onSubmit={submitted}>
        <Field name="search" placeholder="Введите текст" />
        <button className={styles.button} type="submit">
          Submit!
        </button>
      </form>
    </>
  );
}
