import {argv} from "node:process";
import {workthreadRun} from "./workthread";

enum Commands {
  MULTITHREAD = "multithread",
}

const commandMap = new Map<Commands, () => void>([
  [Commands.MULTITHREAD, workthreadRun],
]);

function run(): void {
  const commandName = argv[2] as Commands;
  const command = commandMap.get(commandName);
  if (commandName && command) {
    console.log(`server started, command ${commandName}.`);
    command();
  }
}

run();
