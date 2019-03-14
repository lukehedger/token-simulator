import produce from "immer"; // import { Agent, AgentType } from "@token-simulator/bar-agents";
// TODO: Package core.protocol

const Protocol = {
  systemClock: 1000,
  totalSupply: 100,
  wealthThreshold: 1
}; // TODO: Package core.simulation

const Simulation = options => {
  return {
    agents: {},
    transactions: {},
    processTransaction: () => {},
    objective: () => {},
    options: options
  };
};

const Agent = ({
  id,
  balance,
  type
}) => {
  return {
    id: id,
    balance: balance,
    type: type
  };
}; // Initialise the simulation


export const init = ({
  debug = false,
  totalAgents = 10
} = {}) => {
  // Initialise `Simulation`
  const simulation = Simulation({
    debug: debug
  }); // Initialize `Agent`s

  for (let id = 0; id < totalAgents; id++) {
    simulation.agents[id] = Agent({
      id: id,
      balance: Protocol.totalSupply / totalAgents,
      type: "altruistic"
    });
  } // Implement `Simulation.processTransaction` function


  simulation.processTransaction = ({
    amount,
    from,
    to
  }) => {
    simulation.agents = produce(simulation.agents, draftState => {
      draftState[from].balance = simulation.agents[from].balance - amount;
      draftState[to].balance = simulation.agents[to].balance + amount;
    });
  }; // Implement `Simulation.objective` function


  simulation.objective = () => {
    Object.values(simulation.agents).filter(agent => agent.balance >= 1).map(agent => {
      const recipient = Object.values(simulation.agents).filter(({
        id
      }) => id !== agent.id)[Math.floor(Math.random() * (Object.keys(simulation.agents).length - 1 - 0) + 0)];
      const transaction = {
        amount: Protocol.wealthThreshold,
        from: agent.id,
        to: recipient.id
      };
      simulation.processTransaction(transaction);

      if (simulation.options.debug) {
        simulation.logTransaction(transaction);
      }
    });

    if (simulation.options.debug) {
      simulation.logAgents();
    }
  }; // TODO: Package simulation-logger.agents


  simulation.logAgents = () => {
    console.table(Object.values(simulation.agents));
  }; // TODO: Package simulation-logger.transactions


  simulation.logTransaction = transaction => {
    console.table([transaction]);
  }; // Implement `Simulation.run` function, usually a loop of objective function


  simulation.run = () => {
    setInterval(() => {
      simulation.objective();
    }, Protocol.systemClock);
  };

  return simulation;
};