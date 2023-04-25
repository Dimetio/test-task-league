import { sample } from "effector";
import { $currentTag, $questionsByTag } from "./store";
import { onTagClick } from "./events";
import { fetchTagFx } from "./fx";

$currentTag.on(onTagClick, (_, tag) => tag);
$questionsByTag.on(fetchTagFx.doneData, (_, res) => res);

sample({
  source: $currentTag,
  target: fetchTagFx,
  clock: onTagClick,
});

$questionsByTag.updates.watch((data) => {
  console.log("поиск по тегу", data);
});
