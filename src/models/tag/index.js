import { $currentTag, $questionsByTag } from "./store";
import { onTagClick } from "./events";

export const modelTag = {
  $currentTag,
  $questionsByTag,
  onTagClick,
};
