import { forward, sample } from "effector";
import { $input, $search } from "./store";
import { fetchSearchFx } from "./fx";
import { inputChanged, inputReset, submitted } from "./events";

$input.on(inputChanged, (_, value) => value).reset(inputReset);
$search.on(fetchSearchFx.doneData, (_, res) => res);

/**
 * когда произошло событие clock
 * возьми данные из source
 * и передай их в target
 */
sample({
  source: $input,
  target: fetchSearchFx,
  clock: submitted,
});

forward({ from: fetchSearchFx, to: inputReset });

$search.updates.watch((value) => {
  console.log(value);
});
