import { createEffect } from "effector";
import { getAnswers } from "../../utils/api";

export const fetchAnswersFx = createEffect(async (id) => {
  try {
    const data = await getAnswers(id);
    return data.items;
  } catch (error) {
    console.log(error);
  }
});
