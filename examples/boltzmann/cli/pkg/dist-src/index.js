import { init } from "@boltzmann/simulation";
import sade from "sade";
const program = sade("boltzmann");
program.version("1.0.0");
program.command("run", "", {
  default: true
}).describe("Run the Boltzmann Wealth Model simulation").option("-a, --agents", "Change the number of agents in the simulation").option("-d, --debug", "Debug the simulation").example("run").example("run --agents=20 --debug").action(run);
program.parse(process.argv);
export function run(opts) {
  const simulation = init({
    debug: opts.debug,
    totalAgents: opts.agents
  });
  simulation.run();
}