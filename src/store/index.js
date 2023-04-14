import { createStore, createApi } from "effector";

export const $store = createStore(null);

export const apiStore = createApi($store, {
  getUserQuestions: (state, questions) => questions, // получаю вопросы юзера
  getQuestionsForTag: (state, questions) => questions, // получаю вопросы по тегу
  getAnswers: (state, answers) => answers, // получаю ответы для вопроса
});
