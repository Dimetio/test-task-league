import { createEffect } from "effector";
import { getSearch } from "../../utils/api";

export const fetchSearchFx = createEffect(async (inputValue) => {
  const data = await getSearch(inputValue);
  return data.items;
});
