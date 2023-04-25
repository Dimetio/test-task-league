import { sample } from "effector";
import { $currentUser, $questionsByUser } from "./store";
import { onUserClick } from "./events";
import { fetchUserFx } from "./fx";

$currentUser.on(onUserClick, (_, user) => user);
$questionsByUser.on(fetchUserFx.doneData, (_, res) => res);

sample({
  source: $currentUser,
  target: fetchUserFx,
  clock: onUserClick,
});

$questionsByUser.updates.watch((data) => {
  console.log("поиск по автору", data);
});
