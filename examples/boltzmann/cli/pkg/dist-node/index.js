'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var simulation = require('@boltzmann/simulation');
var sade = _interopDefault(require('sade'));

const program = sade("boltzmann");
program.version("1.0.0");
program.command("run", "", {
  default: true
}).describe("Run the Boltzmann Wealth Model simulation").option("-a, --agents", "Change the number of agents in the simulation").option("-d, --debug", "Debug the simulation").example("run").example("run --agents=20 --debug").action(run);
program.parse(process.argv);
function run(opts) {
  const simulation$1 = simulation.init({
    debug: opts.debug,
    totalAgents: opts.agents
  });
  simulation$1.run();
}

exports.run = run;
