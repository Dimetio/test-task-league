import { $currentUser, $questionsByUser } from "./store";
import { onUserClick } from "./events";

export const modelUser = {
  $currentUser,
  $questionsByUser,
  onUserClick,
};
