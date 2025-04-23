import {argv} from "node:process";
import {workthreadRun} from "./workthread";

enum Commands {
  MULTITHREAD = "multithread",
}

const commandMap = new Map<Commands, () => void>([
  [Commands.MULTITHREAD, workthreadRun],
]);

function run(): void {
  const command = argv[2] as Commands;
  if (command && commandMap.get(command)) {
    console.log(`server started, command ${command}.`);
  }
}

run();
