import { createEffect } from "effector";
import { getTopQuestions } from "../../utils/api";

export const fetchUserFx = createEffect(async (user) => {
  try {
    const data = await getTopQuestions(user);
    return data.items;
  } catch (error) {
    console.log(error);
  }
});
