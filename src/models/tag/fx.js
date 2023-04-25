import { createEffect } from "effector";
import { getTopTagQuestions } from "../../utils/api";

export const fetchTagFx = createEffect(async (tag) => {
  try {
    const data = await getTopTagQuestions(tag);
    return data.items;
  } catch (error) {
    console.log(error);
  }
});
